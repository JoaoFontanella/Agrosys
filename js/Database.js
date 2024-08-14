var db = new alasql.Database();

db.exec(
  'CREATE TABLE clientes (id INT IDENTITY, nome STRING, cpf STRING, data_nascimento DATE, telefone STRING, celular STRING, senha STRING)',
  'CREATE TABLE usuarios_login (id INT IDENTITY, user STRING, cpf STRING, senha STRING)',
  'CREATE TABLE enderecos (id INT IDENTITY, cep STRING, rua STRING, bairro STRING, cidade STRING, estado STRING, pais STRING)'
);

window.myApp = {
  db: db,
};
