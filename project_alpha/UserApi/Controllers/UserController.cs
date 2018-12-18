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
        private static List<User> Users = new List<User>()
          {
            new User("redEye","password123"),
            new User("blueMoon","silence94"),
            new User("blackieChan","firetruck69")
          };

        // GET api/values
        [HttpGet]
        public ActionResult<IEnumerable<User>> Get()
        {
          return Users;
        }

        // GET api/values/checker
        [HttpGet("checker")]
        public ActionResult<User> Get(string meh)
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

        // POST api/values
        [HttpPost]
        public ActionResult<IEnumerable<User>> Post([FromBody] User value)
        {
          Users.Add(value);
          return Users;
        }

        // PUT api/values/
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

        // PUT api/values/
        [HttpPut("checker")]
        public ActionResult<User> Put([FromBody] string meh)
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
