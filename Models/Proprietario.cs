using System;
using System.Collections.Generic;

namespace teste.Models
{
    public partial class Proprietario
    {
        public int Id { get; set; }
        public string Nome { get; set; }
        public string Endereco { get; set; }
        public string Telefone { get; set; }
        public string Imovel { get; set; }
        public string Finalidade { get; set; }
        public float Preco { get; set; }
    }
}
