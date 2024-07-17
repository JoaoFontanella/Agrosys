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

function cadastro() {
  window.location.href = '../index.html';
}

function cadastroUsuario() {
  var nome = document.getElementById('user').value;
  var cpf = document.getElementById('cpf').value;
  var senha = document.getElementById('password').value;

  if (nome === '' || cpf === '' || senha === '') {
    alert('Por favor, preencha todos os campos.');
    return;
  }

  // Verificar se o usuário já existe por meio do nome de usuario
  var usuarios = JSON.parse(localStorage.getItem('usuarios_login')) || [];
  var usuarioExistente = usuarios.find(function (usuario) {
    return usuario.nome === nome;
  });

  if (usuarioExistente) {
    alert('Usuário já existe.');
    return;
  }

  alert('Usuário cadastrado');
  var usuario = {
    nome: nome,
    cpf: cpf,
    senha: senha,
  };

  var usuarios = JSON.parse(localStorage.getItem('usuarios_login')) || [];
  usuarios.push(usuario);
  localStorage.setItem('usuarios_login', JSON.stringify(usuarios));
  // Limpar campos
  document.getElementById('user').value = '';
  document.getElementById('cpf').value = '';
  document.getElementById('password').value = '';

  window.location.href = '../index.html';
}
