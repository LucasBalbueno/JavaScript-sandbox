// FUNÇÕES SÃO TRATADAS COMO DADOS NO JAVASCRIPT, ISSO PERMITE QUE ELAS SEJAM PASSADAS COMO PARAMETROS, QUE TENHA FUNÇÕES DENTRO DE FUNÇÕES E ABRE UM LEQUE DE POSSIBILIDADES

// FORMA LITERAL:

function fun1 () {}


// PODE SER ARMAZENADA EM UMA VARIÁVEL:
const nome = function () {}        // ISSO SE CHAMA FUNÇÃO ANÔNIMA


// PODE SER ARMAZENADA EM UM ARRAY:
const lista = [function nom2 () {}, fun1, nome]


// PODE SE ARMAZENADA COMO VALOR DE UM OBJETO:
const obj = {}
obj.falar = function falando () {}


// FUNÇÃO COMO PARAMETRO DE OUTRA FUNÇÃO:
function fun2 (fun3) {
    fun3()
}

fun2(function () {console.log('executando...')})


// FUNÇÃO DENTRO DE FUNÇÃO:
function soma (a, b) {
    return function (c) {
        console.log( a + b + c)
    }
}

// soma(5,5)(10)
// OU const LetraC = soma (5, 5) \n LetraC(10)



// PARAMETROS E RETORNOS SÃO OPCIONAIS DENTRO DE UMA FUNÇÃO
// NA AUSENCIA DE UM RETORNO, RETORNA UNDEFINED POR PADRÃO
// NA AUSENCIA DE PARAMETROS, RETORNA NaN


// TAMBÉM É POSSIVEL ADICIONAR PARAMETROS DE DENTRO DA FUNÇÃO

function soma() {
    let soma = 0
    for (i in arguments) {             // O arguments É UMA PALAVRA RESERVADA PARA SE REFERIR AOS PARAMETROS
        soma += arguments[i]
    }
    return soma
}

console.log(soma(5, 10))

// ASSIM COMO, TAMBÉM TEMOS UM PARAMETRO PADRÃO, CASO NENHUM SEJA CITADO. <= LANÇADO NO ES2015
function soma2 (a = 1, b = 1, c = 1) {       // DESSA FORMA, CASO NENHUM PARAMETRO SEJA DECLARADO, ELE ASSUMIRA O VALOR PADRÃO 1
    return a + b + c
}
