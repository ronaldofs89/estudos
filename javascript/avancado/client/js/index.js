var fields = [
    document.querySelector('#data'),
    document.querySelector('#quantidade'),
    document.querySelector('#valor')
];
var tbody = document.querySelector('table tbody');

function cleanForm() {
    fields[0].value = '';
    fields[1].value = 1;
    fields[2].value = 0.0;

    fields[0].focus();
}

function createTd(tr) {
    fields.forEach(field => {
        var td = document.createElement('td');
        td.textContent = field.value;
        tr.appendChild(td);
    });

    var tdVolume = document.createElement('td');
    tdVolume.textContent = (fields[1].value * fields[2].value);
    tr.appendChild(tdVolume);
}

function createTr() {
    var tr = document.createElement('tr');
    createTd(tr);
    return tr;
}

document.querySelector('.form').addEventListener('submit', function (event) {
    event.preventDefault();
    tbody.appendChild(createTr());
    cleanForm();
});