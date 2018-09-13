using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using fabiocostateste.business.Interface;
using fabiocostateste.EF.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace fabiocostateste.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsuariosController : ControllerBase
    {

        private readonly IUsuariosService _usuariosService; 

        public UsuariosController(IUsuariosService usuariosService)
        {
            _usuariosService = usuariosService; 

        }


        // GET: api/Usuarios
        [HttpGet]
        public object Get()
        {

            object r = new object(); 
            try
            {

                var usuarios = _usuariosService.GetAllFilter(x => true, "UsuarioId"); 
                if(usuarios != null)
                {

                    r = new
                    {

                        usuarios
                    };
                }

                return r; 

            }catch(Exception ex)
            {

                return r; 

            }
        }

        // GET: api/Usuarios/5
        [HttpGet("{id}", Name = "Get")]
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Usuarios
        [HttpPost]
        public void Add(Usuarios usuario)
        {

            if (!ModelState.IsValid)
            {
                
            }

            var usuarionovo = _usuariosService.Add(usuario); 


        }

        // PUT: api/Usuarios/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
