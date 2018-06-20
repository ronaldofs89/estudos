class Transaction {

    constructor(date, quantity, value) {
        this._date = new Date(date.getTime());
        this._quantity = quantity;
        this._value = value;
        Object.freeze(this);
    }

    get date() {
        return new Date(this._date.getTime());
    }

    get quantity() {
        return this._quantity;
    }

    get value() {
        return this._value;
    }

    get volume() {
        return this._quantity * this._value;
    }

    get transaction() {
        return {
            date: new Date(this._date.getTime()),
            quantity: this._quantity,
            value: this._value,
            volume: (this._quantity * this._value)
        }
    }
}