// A FUNÇÃO CONSTRUTORA É UMA FUNÇÃO RESPONSÁVEL POR INSTANCIAR OBJETOS
// DENTRO DELA PODEMOS TER MÉTODOS PÚBLICOS E MÉTODOS PRIVADOS
// PARA CRIAR UMA FUNÇÃO CONSTRUTORA DEVEMOS USAR A SINTAXE PADRÃO, E NÃO A ARROW FUNCTION.

// PARA MÉTODOS PRIVADOS, BASTA CRIARMOS UMA let/const

// PARA MÉTODOS PÚBLICOS, BASTA UTILIZARMOS O this. POR ISSO, NÃO PODEMOS CRIAR UMA FUNÇÃO CONSTRUTURA COM ARROW FUNCTION, POIS NA ARROW FUNCTION O this APONTA PARA A PRÓPRIA FUNÇÃO, O QUE TORNARIA UM MÉTODO PRIVADO TAMBÉM.

function Carro (velocidadeMaxima = 200, delta = 5) {
    // método privado
    let velocidadeAtual = 0;

    // método público
    this.acelear = function () {
        if(velocidadeMaxima + delta <= velocidadeAtual) {
            velocidadeAtual =+ delta;
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }

    // tornando um método privado para público
    this.getVelocidadeAtual = function () {
        return velocidadeAtual
    }
}

const uno = new Carro           // AQUI INSTANCIAMOS O OBJETO A PARTIR DA FUNÇÃO CONSTRUTORA


// AS FUNÇÕES CONSTRUTORA SERVEM PARA CRIARMOS UM MOLDE PARA O OBJETO, ASSIM TODO O OBJETO INSTANCIADO A PARTIR DESSA FUNÇÃO SERÁ CRIAR COM AQUELES PADRÕES E MÉTODOS.