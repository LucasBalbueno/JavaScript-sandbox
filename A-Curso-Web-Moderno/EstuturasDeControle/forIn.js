// COMO O WHILE, FOR TAMBÉM É UM LAÇO DE REPETIÇÃO, ENTRETANDO ELE NÃO É EXECUTADO INFINITAMENTE, ELE TEM UM CONTADOR LIMITE

// ESTRUTURA FOR:
for (let i = 0; i <=10; i++) {
    console.log(`i= ${i}`);
}

// NA ESTRUTURA FOR TEMOS O CONTADOR, O LIMITADOR E O INCREMENTO, RESPECTIVAMENTE

// JÁ O FOR IN, SÃO ESTRUTURAS QUE PERMITAM RECORRER TODOS OS INDICES DE ARRAYS E CHAVES DE OBJETOS, APESAR DE HAVER MÉTODOS MELHORES DE FAZER ISSO (EM ARRAYS)

// ESTRUTURA FOR/IN COM ARRAYS:
const notas = [6.7, 7.4, 9.8, 7.7]
for (let i in notas) {
    console.log(i, notas[i])
}

// ESTRUTURA FOR/IN COM OBJETOS:
const pessoa = {
    nome: 'claudio',
    idade: 16,
    cidade: 'Porto Alegre'
}

for (let atributo in pessoa) {
    console.log(atributo, pessoa[atributo])
}

// APENAS O ATRIBUTO NAVEGA PELO INDICE E A CHAVE DE ARRAYS E OBJETOS
// QUANDO INSERIMOS ARRAY[atributo] OU objeto[atributo] ELE TAMBÉM PERCORRE POR SEUS VALORES
