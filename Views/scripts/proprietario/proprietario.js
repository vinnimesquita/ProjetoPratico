$(document).ready(function() {
    listarGrid(); // chama a função listarGrid onde acontece o carregamento do grid 
    //na interface com os dados da tabela proprietario e imovel do banco de dados
    //listarForm();
    $('#salvar').click(cadastrar);
    // chama a função onclick onde o usuario vai cadastrar os dados do proprietarios e 
    //esses dados vao ser adicionados no banco de dados na tabela proprietario e imovel 
    $('#filtrar').click(filtrarGrid);
    // chama a função onclick filtrarGrid pelo id do botão (#filtrar) do arquivo html
    
});
function listarForm(){

    $.get('http://40.114.30.110/Proprietario/Listar13')
    
        .done(function(resposta) { 
            for(i = 0; i < resposta.length; i++) {
                let dados = resposta[i];
                $('#tipoImo').append($('<option></option>').val(resposta[i].id).html(resposta[i].nome));
                $('#fin').append($('<option></option>').val(resposta[i].id).html(resposta[i].finalidade));
                 }
                })
        .fail(function(erro, mensagem, excecao) { 
            alert(mensagem + ': ' + excecao);
        });
}

function listarGrid(){
 $.get('http://40.114.30.110/Proprietario/Listar')
    // pelo método GET é chamado o serviço Listar12 da controller Proprietario
        .done(function(resposta) { 
            for(i = 0; i < resposta.length; i++) {
                let dados = resposta[i];
                $('#grid').append($('<tr></tr>').attr('id', dados.id));
                $('#' + dados.id).append($('<td></td>').html(dados.id));
                // cria uma coluna no grid com os dados da coluna id da tabela proprietario do banco de dados 
                $('#' + dados.id).append($('<td></td>').html(dados.nome));
                // cria uma coluna no grid com os dados da coluna nome da tabela proprietario do banco de dados 
                $('#' + dados.id).append($('<td></td>').html(dados.endereco));
                // cria uma coluna no grid com os dados da coluna endereco da tabela proprietario do banco de dados 
                $('#' + dados.id).append($('<td></td>').html(dados.telefone));
                // cria uma coluna no grid com os dados da coluna telefone da tabela proprietario do banco de dados 
                $('#' + dados.id).append($('<td></td>').html(dados.imovel));
                // cria uma coluna no grid com os dados da coluna nome da tabela imovel do banco de dados 
                $('#' + dados.id).append($('<td></td>').html(dados.finalidade));
                // cria uma coluna no grid com os dados da coluna finalidade da tabela imovel do banco de dados
                $('#' + dados.id).append($('<td></td>').html('R$ ' + dados.preco.toFixed(2).toString().replace('.', ',')));
                // cria uma coluna no grid com os dados da coluna preco da tabela imovel do banco de dados
              // $('#' + dados.id).append($('<td></td>').html('<button class=\"bot1\" type=\"button\" onclick=\"visualizar('+ dados.id +')\">Visualizar</button><button class=\"botao\" type=\"button\" onclick=\"excluir('+ dados.id +')\">Excluir</button>'));
               $('#' + dados.id).append($('<td></td>').html('<button type=\"button\"class=\"borda\" onclick=\"visualizar('+ dados.id +')\"  href="#"><img src="visu2.png" width="16" height="16"  /> </button><button type=\"button\"class=\"borda\" onclick=\"editar('+ dados.id +')\"  href="#"><img src="editar.png" width="16" height="16"  /> </button><button type=\"button\" class=\"borda\" onclick=\"excluir('+ dados.id +')\"  href="#"><img src="delete3.png" width="16" height="16"  /> </button>'));
                // cria 3  tags do tipo button no grid com a classe borda do arquivo proprietaroo css imagens e funções onclick; visualizar, editar e excluir
            }
        })
        .fail(function(erro, mensagem, excecao) { 
            alert(mensagem + ': ' + excecao);
            //em caso de erro exibi a msg acima
        });
    }

        function cadastrar(){
            //ao clicar no botão salvar essa função cadastrar todos os dados digitados pelo usuario e salva em suas respectivas colunas das 
            // tabelas proprieatrios e imovel do banco de dados e atualiza o grid com o novoProprietario cadastrado


            var nome1 = $('#nome').val();
            var endereco1 = $('#endereço').val();
           var telefone1 = $('#telefone').val();
           var imovel1 =  $('#tipoImo ').val();
           var fin1 =  $('#fin').val();
           var preco1 =  $('#preço ').val();
           var campos = [];

    if (nome1 == 0){
        
        campos.push('Nome');
    }
    if (endereco1 == 0){
        
        campos.push('Endereço');
    }
    if (telefone1 == 0){
        
        campos.push('Telefone');
    }
    if (imovel1 == 0){
        
        campos.push('Imovel');
    }
    if (fin1 == 0){
        
        campos.push('Finalidade');
    }
    if (preco1 == 0){
        
        campos.push('Preço');
    }

    if (campos.length > 0){
        alert('Preencha o(s) campo(s): ' + campos.join(', ') + '!');
    }
   // validação if (se) dos campos nome , endereço, telefone, tipoImovel e preço. Se um dos campos ou todos
    // nao estiverem preenchidos, vai aparecer uma msg indicando o preenchimento se todos estiverem preenchidos 
    // vai ser executado o tratamento else (se não)
    else {
           var nome = $('#nome').val();
           var endereco = $('#endereço').val();
           var telefone = $('#telefone').val();
           var imovel =  $('#tipoImo ').val();
           var fin =  $('#fin ').val();
           var preco =  $('#preço ').val();
           //foi criadas variaveis pra pega o valor dos campos nome, endereço, telefone, tipo imovel, finalidade e preço
           var metodo;
           var url;
           var id;
           
           if($('#salvar').html() == 'Editar'){
               id = $('#id').val();
               metodo = 'PUT';
               url = 'http://40.114.30.110/Proprietario/Alterar';
               
         // se o botão com id do nome salvar  for editar pegar o valor do campo id do formulario hmtl e executar
         //o serviço Alterar do tipo PUT da controller Proprietario
           }
           else{
              id = 0;
               metodo = 'POST';
               url = 'http://40.114.30.110/Proprietario/Cadastrar';
           }
           // se o botão for salvar executar o serviço Cadsatrar2 do tipo POST da controller Proprietario
           var novoProprietario = {
            id : parseInt(id),
               nome: nome,
               endereco:endereco ,
               telefone: telefone,
               imovel: imovel,
               finalidade: fin,
               preco :parseFloat( preco),
               
               // aqui foi associado os valores dos campos digitados pelo usuário às sua respectivas colunas 
               // do banco de dados exemplo: var = nome com attributo nome do arquivo Proprietario.cs e cadastrados no banco
               };
           
             $.ajax({
                type: metodo,
                url: url,
                //é chamado o serviço Cadastrar2 do tipo POST da controller Proprietario 
                contentType: "application/json; charset=utf-8",
                data: JSON.stringify(novoProprietario),
                success: function(resposta) { 

                    if($('#salvar').html() == 'Editar')
                    {
                    alert('Proprietário alterado com sucesso !')
                    }
                    else{
                        alert('Proprietário cadastrado com sucesso !')
                    }

                    $("#grid tr").remove();
                    listarGrid();
                    $('#id').val('');
                    $('#nome').val('');
                    $('#endereço').val('');
                    $('#telefone').val('');
                    $('#tipoImo').val('');
                    $('#fin').val('');
                    $('#preço').val('');
                    $('#salvar').html('Salvar');
                    //remove o grid e atualiza com as novas informações
                },
                error: function(erro, mensagem, excecao) { 
                    alert(mensagem + ': ' + excecao);
             }});
            }}
            


            function visualizar(id){
                // ao clicar no botão visualizar criado pela função listarGrid irá aparecer um alert com todos os 
                // dados do proprietario cadastrado no banco 
                $.ajax({
                    type: 'GET',
                    url: 'http://40.114.30.110/Proprietario/Visualizar?id='+id,
                    // chama o serviço Visualizar do tipo GET da controller Proprietario
                    contentType: "application/json; charset=utf-8",
                    success: function(resposta) { 
                        let visualizacao = resposta.id;
                        visualizacao += '\n';
                        visualizacao += resposta.nome;
                        visualizacao += '\n';
                        visualizacao += resposta.endereco;
                        visualizacao += '\n';
                        visualizacao += resposta.telefone;
                        visualizacao += '\n';
                        visualizacao += resposta.imovel;
                        visualizacao += '\n';
                        visualizacao += resposta.finalidade;
                        visualizacao += '\n';
                        visualizacao += formatarPreco( resposta.preco);
                        //visualizacao += formatarSalario(resposta.salario);
                        // foi criadas variaveis para armazenar os valores das tabelas proprietarios e imovel

                        alert(visualizacao);
                    },
                    error: function(erro, mensagem, excecao) { 
                        alert(mensagem + ': ' + excecao);
                    }
                });
            }
            function formatarPreco(preco){
                return 'R$ ' + preco.toFixed(2).toString().replace('.', ',');
                // função para formatar preço com texto e dois numeros depois da virgula
            
            }
        
            function editar(id){
                $.ajax({
                    type: 'GET',
                    url: 'http://40.114.30.110/Proprietario/Visualizar?id='+id,
                    contentType: "application/json; charset=utf-8",
                    success: function(resposta) { 
                        $('#id').val(resposta.id);
                        $('#nome').val(resposta.nome);
                        $('#endereço').val(resposta.endereco);
                        $('#telefone').val(resposta.telefone);
                        $('#tipoImo').val(resposta.imovel);
                        $('#fin').val(resposta.finalidade);
                        $('#preço').val(resposta.preco);
                        $('#salvar').html('Editar');
                    },
                    error: function(erro, mensagem, excecao) { 
                        alert(mensagem + ': ' + excecao);
                    }
                });
            }
            // função editar que chama o serviço Visualizar do tipo GET da controller Proprietario onde
            // é passado os valores das colinas do banco de dados e passa para os campos do formulario pelo
            // id de cada campo do formulario html
            
function excluir(id) {
    // ao clicar no botão excluir criado pela função listarGrid irá excluir os dados da linha 
    // do grid e os dados nas tabelas proprietario e imovel do banco.
    
    $.ajax({
        type: 'DELETE',
        url: 'http://40.114.30.110/Proprietario/Excluir',
        //chama o serviço Excluir do tipo DELETE da controller Proprietario
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify(id),
        success: function(resposta) { 
            alert(resposta);
            $("#grid tr").remove(); 
            listarGrid();
            // remove o grid e atualiza com os novos dados
        },
        error: function(erro, mensagem, excecao) { 
            alert(mensagem + ': ' + excecao);
        }
    });
}
    function filtrarGrid(){
        // ao clicar no botão filtrar será filtrados 
        var inicial = parseFloat($('#inicial').val().replace(',', '.'));
        var final = parseFloat($('#final').val().replace(',', '.'));
        var inicial2 = $('#inicial').val();
        var final1 = $('#final').val();
        if (inicial2 == 0 || final1 == 0   ){
            alert('Preencha os campos !');
        }
    
        else if (inicial2 >= final1){
            alert('O valor do primeiro campo deve ser menor que o valor do segundo campo !');
        }
        // os campos deverão ser preenchidos, se não ,aparecerá uma msg indicando seu preenchimento, se o valor
        // do primeiro campo for menor que o segundo uma msg vai aparecer sinalizando o modo correto do preenchimento
        // com os dois campos preenchidos corretamente vai ser executado o tratamento else (se nao)
        else {
        
            $.ajax({
                type: 'GET',
                url:'http://40.114.30.110/Proprietario/ComParametro?valorInicial='+inicial+'&valorFinal='+final,
                contentType: "application/json; charset=utf-8",
                crossDomain: true,
                 success: function(resposta) {
                $("#grid tr").remove();
                 
                for(i = 0; i < resposta.length; i++) {
                 let dados = resposta[i];
                
                $('#grid').append($('<tr></tr>').attr('id', dados.id));
                $('#' + dados.id).append($('<td></td>').html(dados.id));
                $('#' + dados.id).append($('<td></td>').html(dados.nome));
                $('#' + dados.id).append($('<td></td>').html(dados.endereco));
                $('#' + dados.id).append($('<td></td>').html(dados.telefone));
                $('#' + dados.id).append($('<td></td>').html(dados.imovel));
                $('#' + dados.id).append($('<td></td>').html(dados.finalidade));
                $('#' + dados.id).append($('<td></td>').html('R$ ' + dados.preco.toFixed(2).toString().replace('.', ',')));
               // $('#' + dados.id).append($('<td></td>').html(dados.cargo));
               $('#' + dados.id).append($('<td></td>').html('<button type=\"button\"class=\"borda\" onclick=\"visualizar('+ dados.id +')\"  href="#"><img src="visu2.png" title="Mensagem aqui!" width="16" height="16"  /> </button><button type=\"button\"class=\"borda\" onclick=\"visualizar('+ dados.id +')\"  href="#"><img src="editar.png" width="16" height="16"  /> </button><button type=\"button\" class=\"borda\" onclick=\"excluir('+ dados.id +')\"  href="#"><img src="delete3.png" width="16" height="16"  /> </button>'));
               // remove o grid com as informações antigas e carrega com as informações filtradas do banco
                }},
            error: function(erro, mensagem, excecao) { 
                alert(mensagem + ': ' + excecao);
            }
        });
    }
        
    }
    
    

