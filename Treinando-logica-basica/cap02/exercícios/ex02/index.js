const form = document.getElementById('formLanHouse');
const outTotal = document.getElementById('outTotal');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const valor = parseFloat(form.inValor.value);
    const tempo = parseInt((form.inTempo.value));

    if (tempo % 15 <= 0) {
        outTotal.innerText = `Valor a Pagar R$ ${Math.trunc(valor * (tempo / 15))}`;
    } else {
        outTotal.innerText = `Valor a Pagar R$ ${Math.trunc((valor * (tempo / 15)) + valor)}`;
    }
})