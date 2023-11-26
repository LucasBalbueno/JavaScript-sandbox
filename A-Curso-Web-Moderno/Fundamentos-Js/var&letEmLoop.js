// CRIAR UMA LAÇO DE REPETIÇÃO COM VAR IRÁ PERMITIR ACESSAR A VARIAVEL FORA DO BLOCO
for (var i = 0; i < 10; i++) {
    console.log(i);
}

console.log("====================================")
console.log(i);           // E NESSE CASO, IRÁ APRESENTAR O NÚMERO QUE FEZ O FOR TERMINAR O LAÇO, OU SEJA, 10. DA ERRO!

console.log("====================================")

// AGORA, CRIAR UM LAÇO DE REPETIÇÃO COM LET IRÁ PERMITIR ACESSAR A VARIAVEL APENAS DENTRO DO BLOCO.

for (let j = 0; j < 15; j++) {
    console.log(j);
}

console.log("====================================")

// VAR TAMBÉM APRESENTA ERROS QUANDO TENTAMOS REFERENCIA-LA DENTRO DE UM ARRAY

const funcs = [];

for (var e = 0; e < 10; e++) {
    funcs.push(function() {
        console.log(e);
    })
}

funcs[2]()            // SAÍDA: 10
funcs[8]()            // SAÍDA: 10         O VAR IMPRIMIU SAIDA 10 POIS COMO VAR NÃO TEM ESCOPO, ELE APENAS MOSTRA O FIM DO LAÇO

// AGORA, AO FAZER A MESMA COISA COM LET:

const func = []

for (let f = 0; f < 10; f++) {
    func.push(function() {
        console.log(f);
    })
}

func[2]()            // SAÍDA: 2
func[8]()            // SAÍDA: 8              COM LET A SAÍDA CORRETA É OBSERVADA. ISSO OCORRE PELA IMPORTANCIA DE SE TER ESCOPO.


// A IMPORTANCIA DO ESCOPO SE DA POIS VARIAVEIS COMO VAR, PODEM SOFRER DE HOISTING, QUE É O IÇAMENTO, A AÇÃO DE "JOGAR PRA CIMA"
// AO DECLARAR UMA VAR E RODAR JS O PRÓPRIO INTERPRETADOR DA LINGUAGEM IDENTIFICA O VAR E JOGAR ELE PARA AS PRIMEIRAS LINHAS DO CÓDIGO, FAZENDO COM QUE O ESCOPO SEJA SEMPRE GLOBAL, SENDO POSSIVEL ACESSAR DE QUALQUER PARTE DO CÓDIGO
// NO CASO, DENTRO DE UMA FUNÇÃO, MESMO A VAR NÃO PODE SER ACESSADA DE FORA. MAS, AINDA SIM SOFRERÁ O HOISTING DENTRO DA PRÓPRIA FUNÇÃO
// POR ISSO, NÇAO USE VAR!