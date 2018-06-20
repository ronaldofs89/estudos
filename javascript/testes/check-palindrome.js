Array.prototype.equals = function (array) {
    if (!array)
        return false;

    if (this.length != array.length)
        return false;

    for (var i = 0; i < this.length; i++) {
        if (this[i] instanceof Array && array[i] instanceof Array) {
            if (!this[i].equals(array[i]))
                return false;
        } else if (this[i] != array[i])
            return false;
    }
    return true;
}

Object.defineProperty(Array.prototype, "equals", {
    enumerable: false
});

function createArray(string) {
    return string.toLowerCase().replace(/\s/g, '').split('');
}

function checkPalindrome(inputString) {
    var a = createArray(inputString);
    var b = createArray(inputString).reverse();
    return a.equals(b);
}