// O SWITCH É UMA ESTRUTURA DE CONTROLE PARECIADA COM IF/ELSE. POIS ELA EXECUTA UMA SENTENÇA DE CÓDIGO LEVANDO COMO BASE MULTIPLAS SELEÇÕES
// OU SEJA, DAMOS DIVERSAS SELEÇÕES PARA O SWITCH QUE SERÁ EXECUTADO SE UMA DELAS FOR VERDADEIRA. EXEMPLO:

const imprimirResultado = (nota) => {
    switch (Math.floor(nota)) {
        case 9:
            console.log("Aprovado!")
            break
        case 10:
            console.log("O melhor da turma!")
            break
    }
}

imprimirResultado(9);

// ALGUMAS DIFERENÇAS ENTRE SWITCH/CASE E IF/ELSE:
// 1. O SEU PARÂMETRO NÃO RETORNA BOOLEAN, E SIM UM VALOR
// 2. PODEMOS EXECUTAR UMA SENTENÇA DE CÓDIGO ESPECÍFICA PARA CADA CASO (case)

// SE QUISERMOS EXECUTAR A MESMA SENTENÇA DE CÓDIGO EM DOIS CASOS OU MAIS, BASTA DEIXAR O ANTERIOR VAZIO E COLOCAR A SENTENÇA APENAS NO ULTIMO. EXEMPLO:

const imprimirResultado2 = (nota) => {
    switch (Math.floor(nota)) {
        case 8: case 9:
        case 10:
            console.log("Aprovado com sucesso!")
            break
    }
}

imprimirResultado2(8);


// É EXTREMAMENTE IMPORTANTE ADICIONARMOS A PALAVRA RESERVADA BRAKE, POIS POR PADRÃO JS, O SWITCH/CASE EXECUTA TODAS AS LINHAS DE CÓDIGO SEGUINTES APÓS UMA VERDADEIRA!!!
// AO POR brake, O SWITCH SAI DO SEU BLOCO.

// NO SWITCH NÃO PODEMOS COLOCAR CONDIÇÕES E INTERVALOS

const imprimirResultado3 = (nota) => {
    switch (Math.floor(nota)) {
        case 8: case 9:
        case 10:
            console.log("Aprovado com sucesso!")
            break
        default:
            console.log('Nota inválida!')
    }
}

imprimirResultado3(-1);

// POR ÚLTIMO, TAMBÉM É IMPORTANTE CITAR QUE O SWITCH TEM UM CASE DEFAULT, OU SEJA, UM COMPORTAMENTO PADRÃO CASO O VALOR DO PARAMETRO NÃO CAIA DENTRO DE NENHUM DOS CASES ACIMA.

// EM RESUMO, O SWITCH/CASE É UMA ESTRUTURA PARECIDA COM IF/ELSE MAS AINDA COM OPÇÕES MUITO EXCASSAS.