class TransactionController {
    constructor() {
        let $ = document.querySelector.bind(document);
        this._inputDate = $('#data');
        this._inputQuantity = $('#quantidade');
        this._inputValue = $('#valor');

        this._transactionList = new TransactionList(model => this._transactionView.update(model));
        this._transactionView = new TransactionView($('#TransactionsTable'));
        this._transactionView.update(this._transactionList);

        this._message = new Message();
        this._messageView = new MessageView($('#Message'));
        this._messageView.update(this._message);
    }

    addTransaction(event) {
        event.preventDefault();

        this._transactionList.addTransaction(this._createTransaction());
        this._message.text = 'Transação adicionada com sucesso!';
        this._messageView.update(this._message);
        this._cleanForm();
    }

    removeTransactions() {
        this._transactionList.removeTransactions();
        this._message.text = 'Transações apagadas com sucesso!';
        this._messageView.update(this._message);
    }

    _createTransaction() {
        return new Transaction(
            DateHelper.dateCreate(this._inputDate.value),
            this._inputQuantity.value,
            this._inputValue.value
        );
    }

    _cleanForm() {
        this._inputDate.value = '';
        this._inputQuantity.value = 1;
        this._inputValue.value = 0.0;
        this._inputDate.focus();
    }
}
