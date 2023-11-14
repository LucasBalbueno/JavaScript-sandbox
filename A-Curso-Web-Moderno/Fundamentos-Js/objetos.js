const o1 = {}                 // OBJETO É UMA COLEÇÃO DE PARES CHAVE E VALOR
o1.nome = 'Lucas'             // AQUI CRIAMOS UMA CHAVE CHAMADA nome E O SEU VALOR Lucas
o1.preco = 59
o1['Desconto'] = 10            // É POSSIVEL CRIAR UM PAR ASSIM, POREM DEVEMOS EVITAR

console.log(o1);

const o2 = {                   // SINTAXE BÁSICA DO OBJETO
    nome: 'Larissa',
    idade: 21,
    genero: 'feminino',
    endereco: {                // PODEMOS CRIAR OBJETO DENTRO DE OBJETOS
        rua: 'Palmeira',
        numero: 233,
        Obs: 'casa'
    }
}

// JSON É UM FORMATO TEXTUAL DO OBJETO JAVASCRIPT. SERVE PARA FACILITAR A TROCA DE DADOS ENTRE SISTEMAS

console.log(o2);