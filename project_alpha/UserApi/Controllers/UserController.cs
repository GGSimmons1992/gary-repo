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

        // PUT api/values/name
        [HttpPut]
        public ActionResult<bool> Put([FromBody] User inputtedUser)
        {
          int stoneIndex=-1;
          for (int index=0;index<Users.Count;index+=1)
          {
            if (inputtedUser.Username==Users[index].Username){
              if (inputtedUser.Password==Users[index].Password)
              {
                stoneIndex=index;
                Users[index].accessKey=inputtedUser.accessKey;
              }
            }
          }
          if (stoneIndex>=0)
          {
            return true;
          }
          else
          {
            return false;
          }

        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
