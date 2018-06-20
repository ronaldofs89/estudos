class Funcionario {
    constructor(nome) {
        this._nome = nome;
    }

    get nome() {
        return this._nome;
    }

    set nome(nome) {
        this._nome = nome;
    }
}

class Secretaria extends Funcionario {

    constructor(nome, funcionario) {
        super(nome); // tem que ser a primeira instrução!
        this._funcionario = funcionario;
    }

    atenderTelefone() {
        console.log(`${this._nome} atendendo telefone`);
    }
}

let secretaria = new Secretaria('Suzete', new Funcionario('Barney'));