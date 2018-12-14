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
        public List<User> Users { get; set; }

        public UserController()
        {
          Users = new List<User>()
          {
            new User("redEye","password123"),
            new User("blueMoon","silence94"),
            new User("blackieChan","firetruck69")
          };
        }

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
        public void Post([FromBody] string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
