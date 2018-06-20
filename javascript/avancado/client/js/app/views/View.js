class View {
    constructor(elem) {
        this._element = elem;
    }

    template() {
        throw new Error('The method or operation is not implemented.');
    }

    update(model) {
        this._element.innerHTML = this.template(model);
    }
}