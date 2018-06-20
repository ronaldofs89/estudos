class DateHelper {
    constructor() {
        throw new Error('DateHelper can\'t be instantiated.');
    }

    static dateCreate(value) {
        if (!/^\d{4}-\d{2}-\d{2}$/.test(value))
            throw new Error('The date format should be "yyyy-mm-dd"');

        return new Date(...value.split('-').map((item, index) => item - index % 2));
    }

    static dateFormat(value) {
        return `${value.getDate()}/${value.getMonth() + 1}/${value.getFullYear()}`;
    }
}