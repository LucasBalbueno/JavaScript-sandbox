const formRest = document.querySelector('#formRest');
const outTotal =document.querySelector('#outTotal');

formRest.addEventListener('submit', (event) => {
    event.preventDefault();

    const preco = parseFloat(formRest.inPreco.value);
    const peso = parseFloat(formRest.inPeso.value);

    const precoGrama = preco / 1000;

    const total = precoGrama * peso;

    outTotal.innerText = `Valor a pagar R$: ${total.toFixed(2)}`
})