const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao)       // O THIS SE REFERE AO OBJETO DO QUAL É DONO DA FUNÇÃO
    }
}

pessoa.falar()       // PARA QUE O PROGRAMA SEJA EXECUTADO, DEVEMOS OBRIGATORIAMENTE DO THIS

const falar = pessoa.falar;      // PODEMOS ARMAZENAR ESSA OBJETO DENTRO DE UMA VARIAVEL, ENTRETANDO, CAUSARÁ UM CONFLITO NO THIS, POIS ELE NÃO APONTARÁ MAIS PARA O OBJETO PESSOA, E SIM PARA O SCOPO GLOBAL.
falar()      // SAÍDA: UNDEFINED

// É AÍ QUE ENTRA O BIND, POIS ASSIM PODEMOS RESOLVER ESSE CONFLITO

// O método bind() cria uma nova função que, quando chamada, tem sua palavra-chave this definida com o valor fornecido, com uma sequência determinada de argumentos precedendo quaisquer outros que sejam fornecidos quando a nova função é chamada.

// OU SEJA, COM BIND, PASSAMOS UM OBJETO COMO PARAMETRO NO QUAL VOCE QUER QUE SEJA REFERENCIA PARA A CRIAÇÃO DA NOVA FUNÇÃO

const falarDePessoa = pessoa.falar.bind(pessoa)      // APESAR DE NOVAMENTE ARMAZENARMOS O OBJETO NUMA VARIAVEL, O BIND CRIA UMA FUNÇÃO CHAMADA falarDePessoa E ATRIBUI ESSA FUNÇÃO AO OBJETO pessoa. COM ISSO, DENTRO DA FUNÇÃO CRIADA falarDePessoa O THIS IRÁ APONTAR EXCLUSIVAMENTE PARA O OBJETO CITADO (PESSOA)
falarDePessoa()

// EM RESUMO, O BIND TEM A FUNÇÃO DE "VINCULAR" UM DETERMINADO OBJETO PARA ELE SER O DONO DA FUNÇÃO QUE CRIAMOS



// OUTRO MÉTODO QUE PODE "DRIBLAR" AS VARIEDADES DO USO DO THIS É ATRIBUIR ELE A UMA VARIAVEL QUE ESTÁ DENTRO DA FUNÇÃO CONSTRUTORA DE UM OBJETO:

function Pessoa1 () {
    this.idade = 0;

    const self = this            // GERALMENTE CHAMA DE self, ESSA É A VARIAVEL QUE ARMAZENARÁ O THIS QUE REFERENCIA O OBJETO, POIS ENTÃO, POSTERIORMENTE NO CÓDIGO, AO INVÉS DE USAR O THIS (PROPENSO A CONFLITOS) USAMOS A VARIAVEL.

    setInterval(function () {
        self.idade++           // AO INVÉS DE this.idade++
        console.log(self.idade)        // AO INVÉS DE this.idade
    }, 1000)
}

new Pessoa1