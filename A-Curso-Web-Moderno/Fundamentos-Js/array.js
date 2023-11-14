             //   0    1    2    3
const valores = [7.7, 8.9, 6.3, 9.2];
console.log(valores[0], valores[3]);       // MOSTRA OS VALORES DO INDICE 0 E 3.
console.log(valores[4]);                  // RETORNA UNDEFINED QUANDO O INDICE NÃO ESTÁ DEFINIDO

valores[4] = 10.2     // ATRIBUI AO INDICE 4 UM NOVO VALOR
valores[10] = 12.3    // ATRIBUI AO INDICE 10 UM NOVO VALOR E OS 6 DO MEIO FICAM VAZIO

console.log(valores)
console.log(valores.length)     // RETORNA O TAMANHO DA ARRAY

valores.push(3, 5, 6)           // ADICIONA ESSES ELEMENTOS NA ARRAY, NO FINAL DA FILA
valores.push('teste');
console.log(valores);           // O ARRAY EM JAVASCRIPT ACEITA DIVERSOS TIPOS DE VALORES, MAS É UMA BOA PRÁTICA CRIAR O ARRAY DE UM SÓ TIPO

valores.pop()                   // TIRA O ULTIMO VALOR DO ARRAY
console.log(valores)

delete valores [2]              // TIRA O VALOR ESPECIFICO DO ARRAY
console.log(valores);

console.log(typeof valores);      // TODO O ARRAY É DO TIPO OBJECT