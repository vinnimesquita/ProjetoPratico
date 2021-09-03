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
    public class LambdaController : ControllerBase
    {
        private List<int> lista = new List<int> { 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };
        
        [HttpGet]
        public List<int> Maior(int parametro)
        {
            return lista.Where(n => n > parametro).ToList();
        }
        
        [HttpGet]
        public List<int> Par()
        {
            return lista.Where(n => (n % 2) == 0).ToList();
        }
    }
}
