// A FUNÇÃO FACTORY NÃO É UM PADRÃO DO ECMA SCRIPT MAS É UM ESTRUTURA MUITO UTILIZADA.

// A FACTORY É UMA FUNÇÃO QUE SEMPRE RETORNA UM NOVO OBJETO

// DE FORMA SIMPLES, QUANDO TEMOS UM OBJETO DENTRO DE UMA FUNÇÃO E ESSE OBJETO É RETORNADO, ESSA FUNÇÃO É UMA FUNÇÃO FACTORY


// FUNÇÃO FACTORY COM OS VALORES DO OBJETO FIXOS:
function criarPessoa () {
    return {
        nome: 'Lucas',
        idade: 20
    }
}

console.log(criarPessoa())

// FUNÇÃO FACTORY COM OS VALORES DOS OBJETOS PERSONALIZADOS (PASSADOS COMO PARÂMETRO)
function criarPessoa2 (nome, idade, profissão) {
    return {
        nome,
        idade,
        profissão: 'Programador (a)'       // PERCEBA QUE PODEMOS MISTURAR DADOS PERSONALIZAVEIS COM DADOS FIXOS
    }
}

console.log(criarPessoa2('Maria', 25))

// FUNÇÃO FACTORY x FUNÇÃO CONSTRUTORA
// FUNÇÃO FACTORY NÃO USA A PALAVRA RESERVADA NEW
// Factory cria um novo objeto, seta seus atributos e o retorna., enquanto os Constructors apenas instanciam um novo objeto
// quando usamos o operador new, por debaixo dos panos, é criado um novo objeto vazio e depois feita uma chamada para a função call passando o objeto que acabou de ser criado. No Factory o objeto já é criado com seu conteúdo dentro.
