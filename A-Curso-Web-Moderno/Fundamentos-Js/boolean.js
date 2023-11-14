let ativo = true;
console.log(ativo);

ativo = false;
console.log(ativo);

ativo = 1
console.log(ativo)       // MOSTRA 1
console.log(!ativo)      // "!" REPRESENTA A FALSA AFIRMAÇÃO, LOGO, SE TEMOS UM VALOR TRUE E USAMOS "!" O VALOR É CONVERTIDO PARA FALSE.
console.log(!!ativo)     // NA LÓGICA, 2 FALSO AFIRMATIVOS SE ANULAM, LOGO, SE TEMOS TRUE E USAMOS "!!" O VALOR É CONVERTIDO DUAS VEZES VOLTANDO PARA TRUE NOVAMENTE.

console.log("OS QUE RETORNAM TRUE:")
console.log(!!3)                         // NÚMERO POSITIVO
console.log(!!-2)                        // NÚMERO NEGATIVO
console.log(!!' ')                       // STRING COM ESPAÇO
console.log(!!'texto')                   // STRING NORMAL
console.log(!![])                        // ARRAY
console.log(!!{})                        // OBJETO
console.log(!!Infinity)                  // INFINITY
console.log(!!(ativo = true))            // RETORNA O VALOR BOOLEANO DA AFIRMAÇÃO, NO CASO, SE A AFIRMAÇÃO FOR FOR TRUE, ELE RETORNA TRUE. SE A AFIRMAÇÃO FOR FALSE ELE RETORNA FALSE
console.log(!(ativo = false))            // SE A AFIRMAÇÃO FOR FALSE ELE RETORNA TRUE, SE A AFIRMAÇÃO FOR TRUE ELE RETORNA FALSE

console.log("OS QUE RETORNAM FALSE:")
console.log(!!0)                         // NÚMERO ZERO
console.log(!!'')                        // STRING VAZIA
console.log(!!null)                      // TYPE NULL
console.log(!!NaN)                       // NOT A NUMBER
console.log(!!undefined)                 // TYPE UNDEFINED
console.log(!!(ativo = false))
console.log(!(ativo = true))

console.log("Então...")
console.log(!!('' || null || 0 || 'teste'))         // RETORNA TRUE POIS POSSUI UM VALOR VERDADEIRA DENTRO DISSO
console.log(('' || null || 0 || 'teste'))           // RETORNA O 'teste' POIS É O UNICO VALOR VERDADEIRO
console.log(!!('' || 0 || NaN))                     // RETORNA FALSE POIS TODAS OS VALORES SÃO FALSOS

console.log("GRANDE UTILIDADE!")
let nome = 'Lucas'
console.log((nome || 'você não definiu um nome'))   // NESSE CASO O console.log RETORNA O VALOR VERDADEIRO (SENDO ELE O nome OU 'você não definiu um nome'). COMO O nome é VERDADEIRO (POIS APRESENTA UMA STRING NORMAL) E ELE ESTÁ EM PRIMEIRO LUGAR, ELE É PRIORIZADO, LOGO, RETORNA 'Lucas'.
let nome2 = ''
console.log((nome2 || 'você não definiu um nome'))  // O console.log CONTINUA RETORNANDO O VALOR VERDADEIRO, PORÉM, AGORA O nome2 É FALSE (POIS POSSUI UMA STRING VAZIA), ENTÃO RETORNA O PRÓXIMO VALOR true. RETORNA 'você não definiu um nome'