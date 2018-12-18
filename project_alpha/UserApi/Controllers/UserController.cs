using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Cors;
using UserApi.Models;

namespace UserApi.Controllers
{
    [EnableCors()]
    [Route("api/[controller]")]
    [ApiController]


    public class UserController : ControllerBase
    {
        internal static List<User> Users = new List<User>()
          {
            new User("redEye","password123"),
            new User("blueMoon","silence94"),
            new User("blackieChan","firetruck69")
          };

        // GET api/User
        [HttpGet]
        public ActionResult<IEnumerable<User>> FullGet()
        {
          return Users;
        }

        // GET api/User/checker
        [HttpGet("checker")]
        public ActionResult<User> Get()
        {
            User activeUser=Users.FirstOrDefault(u => u.accessKey==true);
            if (activeUser!=null)
            {
              return activeUser;
            }
            else
            {
              User dummyUser=new User("","");
              return dummyUser;
            }
        }

        // POST api/User
        [HttpPost]
        public ActionResult<IEnumerable<User>> Post([FromBody] User value)
        {
          Users.Add(value);
          return Users;
        }

        // PUT api/User/
        [HttpPut]
        public ActionResult<User> Put([FromBody] User inputtedUser)
        {
          bool validation=false;
          User foundUser=Users.FirstOrDefault(u => u.Username==inputtedUser.Username);
          if (foundUser==null){
            validation=false;
          }else{
            if (foundUser.Password==inputtedUser.Password)
              {
                foundUser.accessKey=true;
                validation=true;
              }
          }

          if (validation)
          {
            return foundUser;
          }
          else
          {
            User dummyUser=new User("","");
            return dummyUser;
          }
        }

        // PUT api/User/checker
        [HttpPut("checker")]
        public ActionResult<User> Put()
        {
          User activeUser=Users.FirstOrDefault(u => u.accessKey==true);
          activeUser.accessKey=false;
          return activeUser;
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {

        }
    }
}
