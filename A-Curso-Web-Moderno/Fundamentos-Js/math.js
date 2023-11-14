let raio = 2.00;

let calculo = Math.PI * Math.pow(raio, 2);    ///Math é um objeto onde possui vários métodos: PI guarda o valor de pi, e pow (potenciação) onde o primeiro parametro é o valor base e o segundo é o expoente

console.log(calculo.toFixed(2));

console.log(Number.isInteger(calculo));      // Number.isInteger retorna um valor booleano para caso o (parametro) seja um número inteiro