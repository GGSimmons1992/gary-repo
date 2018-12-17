using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Cors;
using Clippy.Models;
using Newtonsoft.Json.Linq;

namespace Clippy.Controllers
{
    [EnableCors()]
    [Route("api/[controller]")]
    [ApiController]
    public class TodoController : ControllerBase
    {
        private static List<Todo> Todos = new List<Todo>()
        {
          new Todo(){Text = "the monday todo"},
          new Todo(){Text = "the tuesday todo"},
          new Todo(){Text = "the wednesday todo"},
          new Todo(){Text = "the thursday todo"},
          new Todo(){Text = "the friday todo"}
        };

        // GET api/values
        [HttpGet]
        public ActionResult<IEnumerable<Todo>> Get()
        {
            return Todos;
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public ActionResult<Todo> Get(int id)
        {
            try
            {
              return Todos[id];//Ok() the quintesential 200
            }
            catch(ArgumentOutOfRangeException aoore)
            {
              return NotFound(aoore.Message);//The quintesential 404.
            }

        }

        // POST api/values
        [HttpPost]
        public ActionResult<IEnumerable<Todo>> Post([FromBody] Todo value)
        {
          Todos.Add(value);
          return Todos;
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
