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
function criarPessoa2 (nome, idade) {
    return {
        nome,
        idade,
        profissão: 'Programador (a)'       // PERCEBA QUE PODEMOS MISTURAR DADOS PERSONALIZAVEIS COM DADOS FIXOS
    }
}

console.log(criarPessoa2('Maria', 25))

// FUNÇÃO FACTORY x FUNÇÃO CONSTRUTORA:

// FUNÇÃO FACTORY NÃO USA A PALAVRA RESERVADA NEW
// Factory cria um novo objeto, seta seus atributos e o retorna., enquanto os Constructors apenas instanciam um novo objeto
// quando usamos o operador new, por debaixo dos panos, é criado um novo objeto vazio e depois feita uma chamada para a função call passando o objeto que acabou de ser criado. No Factory, chamamos a função com o objeto já é criado com seu conteúdo dentro.


// CLASSES X FUNÇÃO FACTORY:
// UMA FUNÇÃO FACTORY PODE POSSUIR UM OBJETO E MÉTODOS, UMA CLASSE TAMBÉM.

// EXEMPLO DE CLASS COM UMA FUNÇÃO CONSTRUTORA:
class Pessoa {
    constructor (nome, idade) {         //FUNÇÃO CONSTRUTORA
        this.nome = nome;
        this.idade = idade;
    }

    falar () {                   // FUNÇÃO NORMAL
        console.log(`Olá meu nome é ${this.nome} e eu tenho ${this.idade} ano(s)`)
    }
}

const p1 = new Pessoa('Lucas', 20);        //INSTANCIANDO O OBJETO A PARTIR DO constructor
p1.falar();          // CHAMANDO UM MÉTODO DO OBJETO INSTANCIADO p1

// EXEMPLO DE FUNÇÃO FACTORY:

const criarPessoa3 = (nome, idade) => {
    return {
        falar: () => {
            console.log(`Olá meu nome é ${nome} e eu tenho ${idade} ano(s)`)
        }
    }
}

const p2 = criarPessoa3 ('Maria', 21);
p2.falar();

// A PRINCIPAL DIFERENÇA ENTRE CLASS E UMA FUNÇÃO FACTORY É QUE COMO NA CLASS USAMOS O THIS, O THIS PODE VARIAR DE ACORDO COM QUEM CHAMOU. LOGO, SE CHAMAMOS THIS NO NODEJS ELE APONTA PARA O ESCOPO GLOBAL, AGORA, SE CHAMAMOS COM O window NO NAVEGADOR WEB, O THIS NÃO APONTA MAIS PARA O OBJETO, CAUSANDO ERRO.

// EM RESUMO, A PRINCIPAL VATAGEM DA FUNÇÃO FECTORY É QUE NÃO PRECISAMOS USAR O THIS, ASSIM EVITANDO VARIAÇÕES DO THIS

// HÁ 3 FORMAS DE CRIAR UM OBJETO EM JAVASCRIPT. A PARTIR DE UMA CLASS, A PARTIR DE UMA FUNÇÃO CONSTRUTORA, E A PARTIR DE UMA FUNÇÃO FACTORY.