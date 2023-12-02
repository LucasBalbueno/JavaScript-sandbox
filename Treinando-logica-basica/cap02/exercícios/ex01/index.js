const formFarm = document.getElementById('formFarm');
const outMed = document.getElementById('outMed');
const outPromo = document.getElementById('outPromo');

formFarm.addEventListener('submit', (event) => {
    event.preventDefault();

    const remedio = formFarm.inMed.value;
    const preco = parseFloat(formFarm.inPreco.value);

    outMed.innerText = `Promoção de ${remedio}`;
    outPromo.innerText = `Leve 2 por R$ ${Math.trunc(preco)}`
})