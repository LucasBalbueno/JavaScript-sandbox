const formCarro = document.getElementById('formCarro');
const outModelo = document.getElementById('outModelo');
const outEntrada = document.getElementById('outEntrada');
const outParcela = document.getElementById('outParcela');

formCarro.addEventListener('submit', (event) => {
    event.preventDefault();

    const modelo = formCarro.inModelo.value
    const preco = Number(formCarro.inPreco.value);
    

    const entrada = preco / 2;
    const parcela = entrada / 12;

    outModelo.innerText = `Promoção: ${modelo}`;
    outEntrada.innerText = `Entrada de R$ ${entrada}`
    outParcela.innerText = `+12x de R$ ${parcela}`

})