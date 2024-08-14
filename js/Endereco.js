// Função para preencher os dados com base no CEP
function buscarEndereco() {
  let cep = document.getElementById('cep').value.replace(/\D/g, '');

  if (cep.length !== 8) {
    alert('CEP inválido. Por favor, insira um CEP válido.');
    return;
  }

  fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(response => response.json())
    .then(data => {
      document.getElementById('rua').value = data.logradouro;
      document.getElementById('bairro').value = data.bairro;
      document.getElementById('cidade').value = data.localidade;
      document.getElementById('estado').value = data.uf;
      document.getElementById('pais').value = 'Brasil';
      document.getElementById('rua').focus();
    })
    .catch(error => {
      console.error('Erro ao buscar CEP:', error);
      alert('Erro ao buscar CEP. Por favor, tente novamente.');
    });
}

document.getElementById('cep').addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    buscarEndereco();
  }
});

  
  //Mascara CEP
  const handleZipCode = (event) => {
    let input = event.target
    input.value = zipCodeMask(input.value)
  }
  
  const zipCodeMask = (value) => {
    if (!value) return ""
    value = value.replace(/\D/g,'')
    value = value.replace(/(\d{5})(\d)/,'$1-$2')
    return value
  }

  function inserirEndereco() {
    var cep = document.getElementById('cep').value;
    var rua = document.getElementById('rua').value;
    var bairro = document.getElementById('bairro').value;
    var cidade = document.getElementById('cidade').value;
    var estado = document.getElementById('estado').value;
    var pais = document.getElementById('pais').value;
  
    if (
      cep === '' ||
      rua === '' ||
      bairro === '' ||
      cidade === '' ||
      estado === '' ||
      pais === ''
    ) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }
    alert('Endereço cadastrado');
    var endereco = {
      cep: cep,
      rua: rua,
      bairro: bairro,
      cidade: cidade,
      estado: estado,
      pais: pais,
    };
  
    var enderecos = JSON.parse(localStorage.getItem('enderecos')) || [];
    enderecos.push(endereco);
    localStorage.setItem('enderecos', JSON.stringify(enderecos));
    // Limpar campos
    document.getElementById('cep').value = '';
    document.getElementById('rua').value = '';
    document.getElementById('bairro').value = '';
    document.getElementById('cidade').value = '';
    document.getElementById('estado').value = '';
    document.getElementById('pais').value = '';
  }
  
  function listagem() {
    window.location.href = '../screens/Lista_Endereco.html';
  }