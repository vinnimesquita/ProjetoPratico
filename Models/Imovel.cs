using System;
using System.Collections.Generic;

namespace teste.Models
{
    public partial class Imovel
    {
        public Imovel()
        {
            Proprietario = new HashSet<Proprietario>();
        }

        public int Id { get; set; }
        public string Nome { get; set; }
        public string Finalidade { get; set; }
        public float Preco { get; set; }

        public virtual ICollection<Proprietario> Proprietario { get; set; }
    }
}
