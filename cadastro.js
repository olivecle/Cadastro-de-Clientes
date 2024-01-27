
const criarCadastro = {};

criarCadastro.nome = 'Joao Augusto';
criarCadastro.endereco = 'Rua Bragança 25 bairro: Bosque';
criarCadastro.sexo = 'M'
criarCadastro.renda = 1300;
criarCadastro.numeroRg = 34678290;
criarCadastro.numeroCpf = 3752993450;

if (criarCadastro.renda > 1500) {
    console.log('Crédito Liberado');
}

else {
    console.log('Crédito não liberado');
}

console.log(criarCadastro);    


