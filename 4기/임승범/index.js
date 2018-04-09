
const aInput = document.querySelector('#a-input');
const bInput = document.querySelector('#b-input');
const select = document.querySelector('select');
const total = document.querySelector('#total');

const calcul = () => {
    if (select.value == "1") {
        total.value = parseInt(aInput.value) + parseInt(bInput.value);
    } else {
        total.value = parseInt(aInput.value) - parseInt(bInput.value);
    }
}
