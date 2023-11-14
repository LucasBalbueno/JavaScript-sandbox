const frase = "passarinho";

console.log(frase.charAt(2));                // RETORNA UM INDICE DA STRING. PRIMEIRO INDICE É 0.
console.log(frase.charAt(10));
console.log(frase.charAt(9));
console.log(frase.charCodeAt(2));            // RETORNA O VALOR DO INDICE NA TABELA UNICODE.
console.log(frase.indexOf('h'));             // RETORNA O INDICE ONDE ESTÁ LOCALIZADO ESSE VALOR.

console.log(frase.substring(2));             // RETORNA O INDICE 2 A SEGUIR
console.log(frase.substring(2, 6));          // RETORNA DO INDICE 2 AO 5 (SEM INCLUIR O INDICE 6)

console.log(frase.concat("!"))               // CONCATENA
console.log(frase.replace('a', 'Z'))                 // SUBISTITUI O VALOR 'a' POR 'Z'.
console.log('Ana,Carolina,Lucas'.split(','))         //TRANSFORMA ESSA STRING EM ARRAY TENDO CADA ELEMENTO SEPARADO PELA ','
