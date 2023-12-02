const formSuper = document.getElementById('formSuper');
const outProd = document.getElementById('outProd');
const outPromo = document.getElementById('outPromo');

formSuper.addEventListener('submit', (event) => {
    event.preventDefault();

    const produto = formSuper.inProd.value;
    const valor = parseFloat(formSuper.inPreco.value);

    const terceiroProd = valor / 2;

    outProd .innerText = `${produto} - Promoção: Leve 3 por R$ ${((valor * 2) + terceiroProd).toFixed(2)}`
    outPromo.innerText = `O 3º produto custa apenas R$ ${terceiroProd.toFixed(2)}`;
})