
class cadastro {
    nome;
    endereco;
    sexo;
    renda;
    numeroRg;
    numeroCpf;

    constructor (nome, endereco, sexo, renda, numeroRg, numeroCpf) {
        this.nome = nome;
        this.endereco = endereco;
        this.sexo = sexo;
        this.renda = renda;
        this.numeroRg = numeroRg;
        this.numeroCpf = numeroCpf;
    }    
}

const Joao = new cadastro('Joao Augusto', 'Rua Bragança 25 bairro: Bosque', 'Masculino', 2000, 34678290, 3752993450);
console.log(Joao);

const Jaqueline = new cadastro('Jaqueline Aparecido da Silva', 'Rua Brigadeiro Faria Lima 349 bairro: Centro', 'Feminino', 5000, 242342572, 4056790358)
console.log(Jaqueline)



/*criarCadastro.nome = 'Joao Augusto';
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

console.log(criarCadastro);    */


