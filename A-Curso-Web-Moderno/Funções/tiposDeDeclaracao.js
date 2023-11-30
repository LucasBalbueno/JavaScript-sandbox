// function declaration - Função padrão
function soma () {};
// Vantagem: Podemos chamar a função padrão antes de criarmos ela. O interpretador JS le primeiramente as funções. Ao contrário da funções anonimas e named functions.
// declaração muito usada



// function expression - Função anõnima
const soma2 = function (x, y) {}
// Desvantagem: Não podemos chamar a função antes de criamos ela. Apenas depois.
// declaração muito usada



// named function expression - Função nomeada
const soma3 = function soma3 (x, y) {}
// Vantagem: quando estiver debugando o código, o erro apontará para o nome da função. Ao contrário de função anonima que não é apontada
// Desvantagem: Não podemos chamar a função antes de criamos ela. Apenas depois.
// declaração pouca usada
