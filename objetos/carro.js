function Carro (marca, modelo, peso, cor, quantidadePortas, velocidade, velocidadeMax, statusCarro) {
    this.marca = marca;
    this.modelo = modelo;
    this.peso = peso;
    this.cor =cor;
    this.quantidadePortas = quantidadePortas;
    this.velocidade = velocidade;
    this.velocidadeMax = velocidadeMax;
    this.statusCarro = statusCarro;
}

const novoCarro = new Carro ("Ford", "Ranger", 2.000, "amarelo", 4, 265, 270, "ligado")

function ligar (carro) {
    if (carro.statusCarro == "ligado") {
        console.log("O carro já está ligado");
    } else {
        carro.statusCarro = "ligado"
        carro.velocidade = 0;
        console.log(`Agora o carro ligou e a sua velocidade atual é ${carro.velocidade}`);
    }
}

ligar(novoCarro);

function acelerar (carro) {
    if (carro.statusCarro == "ligado" && carro.velocidade <= (carro.velocidadeMax - 10)) {
        carro.velocidade = carro.velocidade + 10;
        console.log(`Você acelerou o carro e agora ele está a ${carro.velocidade}Km/h`);
        
    } else if (carro.statusCarro == "ligado" && carro.velocidade > (carro.velocidadeMax - 10)){
        console.log(`Você já está na velocidade máxima, não pode acelar mais!!`);

    } else if (carro.statusCarro == "desligado"){
        console.log("O Carro está desligado, primeiro ligue ele!");
    }
}

acelerar(novoCarro);

function frear (carro) {
    if (carro.statusCarro == "desligado") {
        console.log("O carro já está desligado e parado");
    } else if (carro.statusCarro = "ligado" && carro.velocidade > 0) {
        carro.velocidade = carro.velocidade - 10;
        console.log(`Você freiou o carro e agora ele está a ${carro.velocidade}`);
    }
}

frear(novoCarro);

function desligar (carro) {
    if (carro.statusCarro == "desligado") {
        console.log("O carro já está desligado");
    } else {
        carro.velocidade = 0;
        console.log(`Você desligou o carro e o carro voltará para a velocidade ${carro.velocidade}`);
    }
}

desligar(novoCarro);