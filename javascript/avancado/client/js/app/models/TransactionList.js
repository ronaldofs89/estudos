class TransactionList {
    constructor(update) {
        this._transactions = [];
        this._update = update;
    }

    get transactions() {
        return [].concat(this._transactions);
    }

    addTransaction(transaction) {
        this._transactions.push(transaction);
        this._update(this);
    }

    removeTransactions() {
        this._transactions = [];
        this._update(this);
    }
}