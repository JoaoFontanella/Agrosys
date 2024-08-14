//Listagem de Endereços Cadastrados
function exibirEndereco() {
    var enderecos = JSON.parse(localStorage.getItem('enderecos')) || [];
    var listaEnderecos = document.getElementById('lista-enderecos');
    listaEnderecos.innerHTML = '';
    enderecos.forEach(function(endereco) {
        var enderecoHtml = document.createElement('div');
        enderecoHtml.innerHTML = `
            <p><strong>CEP:</strong> ${endereco.cep}</p>
            <p><strong>Rua:</strong> ${endereco.rua}</p>
            <p><strong>Bairro:</strong> ${endereco.bairro}</p>
            <p><strong>Cidade:</strong> ${endereco.cidade}</p>
            <p><strong>Estado:</strong> ${endereco.estado}</p>
            <p><strong>País:</strong> ${endereco.pais}</p>
            <hr>
        `;
        listaEnderecos.appendChild(enderecoHtml);
    });
}

function limparEnderecos() {
    localStorage.removeItem('enderecos');
    exibirEndereco();
    }