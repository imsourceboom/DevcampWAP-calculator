
var aInput = document.querySelector('#a-input');
var bInput = document.querySelector('#b-input');
var select = document.querySelector('select');
var total = document.querySelector('#total');

function calcul() {
    if (select.value == "1") {
        total.value = parseInt(aInput.value) + parseInt(bInput.value);
    } else {
        total.value = parseInt(aInput.value) - parseInt(bInput.value);
    }
}
