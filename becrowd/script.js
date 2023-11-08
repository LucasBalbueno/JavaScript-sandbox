var input = require("fs").readFileSync("dev/stdin", "utf8");
var lines = input.split("\n");

const pi = 3.14159;
let raio = Number(lines[0]);

let volume = 4/3.0 * pi * (raio * raio * raio)

console.log(`VOLUME = ${area.toFixed(3)}`);