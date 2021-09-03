using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using teste.Models;

namespace teste.Controllers
{
    [Route("[controller]/[action]")]
    [ApiController]
    public class ProprietarioController : ControllerBase
    {
        private BDContexto contexto;
        
        public ProprietarioController(BDContexto bdContexto)
        {
            contexto = bdContexto;
        }

        [HttpGet]
        public List<Proprietario> Listar()
        {
            return contexto.Proprietario.ToList();
           
        }
         [HttpPost]
        public Proprietario  Cadastrar([FromBody]Proprietario dados)
        {

            contexto.Proprietario.Add(dados); 
            contexto.SaveChanges();
            return dados;
        }
        [HttpGet]
        public Proprietario Visualizar(int id)
        {
            return contexto.Proprietario.Where(p => p.Id == id)
            .Select(c => new Proprietario
            {
              Id = c.Id,
              Nome = c.Nome,
              Endereco = c.Endereco,
              Telefone = c.Telefone,
              Imovel = c.Imovel,
              Finalidade = c.Finalidade,
              Preco = c.Preco
            }
            ).FirstOrDefault();
           }
          [HttpPut]
        public Proprietario Alterar([FromBody]Proprietario dados)
        {
 
            contexto.Update(dados);
            contexto.SaveChanges();
            return dados;
        }
       
        [HttpDelete]
        public string Excluir([FromBody]int id)
        {
            Proprietario dados = contexto.Proprietario.FirstOrDefault(p => p.Id == id);
            contexto.Remove(dados);
            //remove o contexto do proprietario pelo id
            
            
            contexto.SaveChanges();
            // salva no banco o contexto de proprietario e imovel no banco
            
            return "Proprietário excluído com sucesso!";
        }

         [HttpGet]
public  List<Proprietario> ListarPorPreco(double valorInicial, double valorFinal  )
{
    try
    {
        return contexto.Proprietario.Where(c => c.Preco >= valorInicial && c.Preco <= valorFinal)
        .Select(c => new Proprietario
        {
            Id = c.Id,
            Nome = c.Nome,
            Endereco = c.Endereco,
            Telefone = c.Telefone,
            Imovel = c.Imovel,
            Finalidade = c.Finalidade,
            Preco = c.Preco
        }).ToList();
    }
    catch(System.Exception ex)
    {
        throw ex;
    }
}
        [HttpGet]
        public List<Proprietario> Listar13()
        {
            return contexto.Proprietario
            .Select(c => new Proprietario
            {
              Id = c.Id,
              Nome = c.Nome,
              Endereco = c.Endereco,
              Telefone = c.Telefone,
              Imovel = c.Imovel,
              Finalidade = c.Finalidade,
              Preco = c.Preco
             
            }
            

            ).ToList();
           
        }
       


 


[HttpGet]
public List<Proprietario> ComParametro(double valorInicial, double valorFinal)
{
try
 {
return contexto.Proprietario.Where(c => c.Preco >= valorInicial && c.Preco <= valorFinal)
.ToList();
 }
catch(System.Exception ex)
 {
throw ex;
 }
}
 
 }}