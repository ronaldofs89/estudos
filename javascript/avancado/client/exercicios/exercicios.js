
let dataString = '17-05-2016';
let dataTeste = dataString.split('-').reverse().join('/');

console.log('Transação adicionada com sucesso!', dataTeste);

// --------------------------------------------------

let numeros = [3, 2, 11, 20, 8, 7];
let novosNumeros = numeros.map(item => item % 2 ? item * 2 : item);
// ou 
let novosNumeros = numeros.map((item) => (item % 2 + 1) * item);

// --------------------------------------------------

class Aluno {
    constructor(matricula, nome) {
        this.matricula = matricula;
        this.nome = nome;
    }
}

class Prova {
    constructor(aluno, nota) {
        this.aluno = aluno;
        this.nota = nota;
    }
}

var avaliacoes = [
    new Prova(new Aluno(1, 'Luana'), 8),
    new Prova(new Aluno(2, 'Cássio'), 6),
    new Prova(new Aluno(3, 'Barney'), 9),
    new Prova(new Aluno(4, 'Bira'), 5)
];

var aprovados = avaliacoes
    .filter(prova => prova.nota >= 7)
    .map(prova => prova.aluno.nome);

console.log(aprovados);

// --------------------------------------------------

class Code {
    constructor(code) {
        if (!this._test(code))
            throw new Error(`O código ${code} não é válido!`);

        this._code = code;
    }
    get code() {
        return this._code;
    }
    _test(code) {
        return /\D{3}-\D{2}-\d{2}/.test(code);
    }
}

let test1 = new Code('GWZ-JJ-12');
let test2 = new Code('1X1-JJ-12');

// --------------------------------------------------

let listaDeNomes1 = ['Flávio', 'Rogers', 'Júlia'];
let listaDeNomes2 = ['Vieira', 'Fernanda', 'Gerson'];
let lista = [];

listaDeNomes1.forEach(item => lista.push(item));
listaDeNomes2.forEach(item => lista.push(item));

exibeNoConsole(lista);
// ou 
let listaDeNomes1 = ['Flávio', 'Rogers', 'Júlia'];
let listaDeNomes2 = ['Vieira', 'Fernanda', 'Gerson'];
let lista = listaDeNomes1.concat(listaDeNomes2);

exibeNoConsole(lista);
// ou 
let listaDeNomes1 = ['Flávio', 'Rogers', 'Júlia'];
let listaDeNomes2 = ['Vieira', 'Fernanda', 'Gerson'];

exibeNoConsole([].concat(listaDeNomes1, listaDeNomes2, 'Rômulo'));

// --------------------------------------------------

numeros.reduce((total, num) => total * num, 1);

// --------------------------------------------------

let dobro = numeros.map(num => num * 2);
let metade = numeros.map(num => num / 2);
let raiz = numeros.map(num => Math.sqrt(num));

// --------------------------------------------------
class Relogio {
    constructor() {
        let self = this; // guardando o this que é a instância da classe `Relogio`
        this._segundos = 0;

        setInterval(function () {
            console.log(++self._segundos); // acessando a variável self, que é a instância de `Relogio` 
        }, 1000);
    }
}
// ou
class Relogio {
    constructor() {
        this._segundos = 0;
        setInterval(() => console.log(++this._segundos), 1000); // usando arrow function. O this é o this de `Relogio`, e não `window`. 
    }
}

var relogio = new Relogio();