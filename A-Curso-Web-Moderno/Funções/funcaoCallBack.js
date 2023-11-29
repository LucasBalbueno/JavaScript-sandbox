// UMA FUNÇÃO CALLBACK É QUANDO A PARTIR DE UM EVENTO, ESSE EVENTO DISPARA DE VOLTA OU ("CHAMA DE VOLTA") UMA FUNÇÃO.
// OU SEJA, A FUNÇÃO CALL BACK NÃO É EXECUTADA IMEDIATAMENTE, PRECISA ACONTECER ALGO OU O NOSSO CÓDIGO CHEGAR EM UM CERTO ESTADO, PARA ATIVA-LA
// NA MAIORIA DAS VEZES A CALLBACK É PASSADA COMO PARAMETRO DE OUTRA FUNÇÃO. ASSIM, QUANDO UMA FUNÇÃO FOR EXECUTADA, ELA CHAMA DE VOLTA A FUNÇÃO CALLBACK
// A MAIORIA DOS FRAMEWOKS UTILIZAM FUNÇÕES CALLBACK, MUITAS VEZES PARA ANIMAÇÕES


// PODEMOS OBSERVAR UMA FUNÇÃO CALLBACK QUANDO USAMOS addeventlistenner. POIS GERALMENTE, A PARTIR DE UM EVENTO QUE IRÁ SER DISPARADO PELO addeventlistenner IREMOS ATRIBUIR UMA FUNÇÃO. ESSA FUNÇÃO SERIA UMA CALL BACK
 const elementoHTML = document.getElementById('exemplo');

 const funcaoNormal = elementoHTML.addEventListener('click', (event) => {
    console.log("Você clicou no elemento, o evento foi diparado e com isso uma função callback foi chamada de volta. Por causa dessa função, essa mensagem está aparecendo!");
})

// OUTRO EXEMPLO É QUANDO USAMOS O .forEach POIS A CADA EVENTO DE LOOP DO forEach, ALGO SERÁ EXECUTADO, RETORNANDO UMA FUNÇÃO CALL BACK
const arrCarros = ['carro1', 'carro2', 'carro3', 'carro4'];

arrCarros.forEach((carro) => {                      // PARA CADA LOOP FINALIZADO DO forEach, A FUNÇÃO FOI CHAMADA DE VOLTA == FUNÇÃO CALLBACK
    console.log(`O ${carro} foi ativiado!`);
})

