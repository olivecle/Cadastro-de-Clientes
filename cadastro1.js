
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

const Jaqueline = new cadastro('Jaqueline Aparecido da Silva', 'Rua Brigadeiro Faria Lima 349 bairro: Centro', 'Feminino', 5000, 242342572, 4056790358);
console.log(Jaqueline);

const Fabio = new cadastro('Fabio Carlos de Andrade', 'Rua Antonio Figueiredo 98 bairro: São Benedito', 'Masculino', 1200, 345876346, 3490982348);
console.log(Fabio);


if (this.renda >= 1500) {
    console.log('Crédito Liberado');
}

else {
    console.log('Crédito não liberado');
}