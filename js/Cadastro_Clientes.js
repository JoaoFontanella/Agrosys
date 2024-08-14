function inserirCliente() {
  var nome = document.getElementById('user').value;
  var cpf = document.getElementById('cpf').value;
  var dataNascimento = document.getElementById('date').value;
  var telefone = document.getElementById('tel').value;
  var celular = document.getElementById('cell').value;
  var senha = document.getElementById('password').value;

  if (
    nome === '' ||
    cpf === '' ||
    dataNascimento === '' ||
    telefone === '' ||
    celular === '' ||
    senha === ''
  ) {
    alert('Por favor, preencha todos os campos.');
    return;
  }

  var clientes = JSON.parse(localStorage.getItem('clientes')) || [];

  // Verificar se o CPF já existe
  var clienteExistente = clientes.find((cliente) => cliente.cpf === cpf);
  if (clienteExistente) {
    alert('Cliente com este CPF já cadastrado.');
    return;
  }

  alert('Cliente cadastrado');
  var cliente = {
    nome: nome,
    cpf: cpf,
    dataNascimento: dataNascimento,
    telefone: telefone,
    celular: celular,
    senha: senha,
  };

  var clientes = JSON.parse(localStorage.getItem('clientes')) || [];
  clientes.push(cliente);
  localStorage.setItem('clientes', JSON.stringify(clientes));
  // Limpar campos
  document.getElementById('user').value = '';
  document.getElementById('cpf').value = '';
  document.getElementById('date').value = '';
  document.getElementById('tel').value = '';
  document.getElementById('cell').value = '';
  document.getElementById('password').value = '';
}

function listagem() {
  window.location.href = '../screens/Lista_Clientes.html';
}

//Mascaras CPF e Telafone/Celular
function mascaracpf(i) {
  var v = i.value;

  if (isNaN(v[v.length - 1])) {
    i.value = v.substring(0, v.length - 1);
    return;
  }

  i.setAttribute('maxlength', '14');
  if (v.length == 3 || v.length == 7) i.value += '.';
  if (v.length == 11) i.value += '-';
}

const handlePhone = (event) => {
  let input = event.target;
  input.value = phoneMask(input.value);
};

const phoneMask = (value) => {
  if (!value) return '';
  value = value.replace(/\D/g, '');
  value = value.replace(/(\d{2})(\d)/, '($1) $2');
  value = value.replace(/(\d)(\d{4})$/, '$1-$2');
  return value;
};

function ender() {
  window.location.href = '../screens/Endereco.html';
}
