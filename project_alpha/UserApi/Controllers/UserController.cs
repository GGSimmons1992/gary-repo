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

        // GET api/values/5
        [HttpGet("{id}")]
        public ActionResult<User> Get(int id)
        {
            try
            {
              return Users[id];//Ok() the quintesential 200
            }
            catch(ArgumentOutOfRangeException aoore)
            {
              return NotFound(aoore.Message);//The quintesential 404.
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




        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {

        }
    }
}
