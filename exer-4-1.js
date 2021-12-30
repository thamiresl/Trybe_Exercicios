// 1
let a = 5;
let b = 9;

let operacaoSoma = a + b;
let operacaoSubtração = a - b;
let operacaoMultiplicação = a * b;
let operacaoDivisão = a / b;
let operacaoModulo = a % b;

console.log (operacaoModulo);

// 2
const x = 15;
const y = 8;
let resultado;

if (x > y){
    resultado = x;
} else {
    resultado = y;
 return resultado; 
}

// 3
const n = 18;
const j = 24;
const h = 2;

let resposta;

if (n > j && n > h){
    resposta = n;
} else if ( j > n && j > h){
    resposta = j;
} else {
    resposta = h;
    return resposta;
}

// 4 
const valor = -5;

let resultadoValor;

if (valor > 0){
    resultadoValor = "positivo";
} else if ( valor < 0){
    resultadoValor = "negativo";
} else if ( valor === 0){
    resultadoValor = "zero";
    return resultadoValor;
}
