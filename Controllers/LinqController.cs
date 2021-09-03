using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace teste.Controllers
{
    [Route("[controller]/[action]")]
    [ApiController]
    public class LinqController : ControllerBase
    {
        // GET: api/Linq
        private List<int> lista = new List<int> { 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };
        
        [HttpGet]
        public List<int> Maior(int parametro)
        {
            return (from l in lista
                    where l > parametro
                    select l).ToList();
        }
        
        [HttpGet]
        public List<int> Par(int parametro)
        {
            return (from l in lista
                    where (l % 2) == 0
                    select l).ToList();
        }
    }
}
