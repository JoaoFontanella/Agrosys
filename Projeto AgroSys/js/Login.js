function logar() {
  var username = document.getElementById('user').value;
  var password = document.getElementById('password').value;

  if (username === '' || password === '') {
    alert('Por favor, preencha todos os campos.');
    return;
  }

  var usuarios = JSON.parse(localStorage.getItem('usuarios_login')) || [];

  var usuarioEncontrado = usuarios.find(function (usuario) {
    return usuario.nome === username && usuario.senha === password;
  });

  if (usuarioEncontrado) {
    window.location.href = '../screens/Cadastro_Clientes.html';
  } else {
    alert('Usuário ou senha incorretos.');
  }
}

function Register() {
  window.location.href = '../screens/Cadastro_Users.html';
}
