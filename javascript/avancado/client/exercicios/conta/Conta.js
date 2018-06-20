class Conta {
    constructor(saldo) {
        this._saldo = saldo;
    }

    get saldo() {
        return this._saldo;
    }

    atualiza(taxa) {
        throw new Error('The method or operation is not implemented.');
    }
}

class ContaCorrente extends Conta {
    atualiza(taxa) {
        this._saldo = this._saldo + taxa;
    }
}

class ContaPoupanca extends Conta {
    atualiza(taxa) {
        this._saldo = this._saldo + taxa * 2;
    }
}
