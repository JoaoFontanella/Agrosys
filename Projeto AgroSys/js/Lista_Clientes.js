//Listagem de Clientes Cadastrados
function exibirClientes() {
  var clientes = JSON.parse(localStorage.getItem('clientes')) || [];
  var listaClientes = document.getElementById('lista-clientes');
  listaClientes.innerHTML = '';
  clientes.forEach(function (cliente) {
    var clienteHtml = document.createElement('div');
    clienteHtml.innerHTML = `
            <p><strong>Nome:</strong> ${cliente.nome}</p>
            <p><strong>CPF:</strong> ${cliente.cpf}</p>
            <p><strong>Data de Nascimento:</strong> ${cliente.dataNascimento}</p>
            <p><strong>Telefone:</strong> ${cliente.telefone}</p>
            <p><strong>Celular:</strong> ${cliente.celular}</p>
            <hr>
        `;
    listaClientes.appendChild(clienteHtml);
  });
}

function limparClientes() {
  localStorage.removeItem('clientes');
  exibirClientes();
}
