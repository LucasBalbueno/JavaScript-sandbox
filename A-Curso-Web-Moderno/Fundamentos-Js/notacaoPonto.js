// A NOTAÇÃO PONTO SERVE PARA ACESSAR ATRIBUTOS E MÉTODOS(FUNÇÕES) DE OBJETOS:

console.log(Math.ceil(6.1))       // FAZ O ARREDONDAMENTO PARA CIMA

const obj1 = {}
obj1.nome = 'Lucas';              // O OBJETO PODE SER INSTANCIADO DESSA FORMA DESDE QUE O OBJETO TENHA SIDO CRIADO, MESMO QUE VAZIO
console.log(obj1.nome)

function Obj (nome) {             // ISSO É UMA FUNÇÃO CONSTRUTORA, SERVE PARA INSTANCIAR O OBJETO DE FORMA MAIS FÁCIL
    this.nome = nome;             // THIS FAZ REFERENCIA AO OBJETO CRIADO, OU SEJA, this.nome REFERENCIA O ATRIBUTO nome DAQUELE OBJETO, ENQUANTO O '= nome' É O PARAMETRO DA FUNÇÃO.
}

const obj2 = new Obj ('Maria')    // INSTANCIADO UM OBJETO A PARTIR DE UMA FUNÇÃO CONSTRUTORA
const obj3 = new Obj ('Paulo')

console.log(obj2.nome)
console.log(obj3.nome)