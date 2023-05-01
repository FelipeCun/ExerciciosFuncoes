//1.Escreva as funções explicadas abaixo:
//a) A função não deve receber nenhum parâmetro e deve imprimir uma mensagem falando algumas informações sobre você, como: 
//"Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante."

/*function infoUser() {
    alert("Eu sou Felipe, tenho 28 anos, moro em São Leopoldo e sou estudante de javascript.");
}

alert(infoUser());*/



//b) Agora escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa: o nome (string), a idade (number), a cidade (string) e uma profissão (string). 
//Ela deve retornar uma string que unifique todas as informações da pessoa em uma só mensagem com o template:
//Eu sou [NOME], tenho [IDADE] anos, moro em [ENDEREÇO] e sou [PROFISSÃO].

/*function infoUser() {
    nome = prompt("Qual é seu primeiro nome?");
    idade = prompt("Qual a sua idade?");
    endereço = prompt("Qual é seu endereço?");
    profissao = prompt("Qual é a sua profissão?");
    return ["Eu sou " + nome + ", tenho " + idade + " anos, moro em " + endereço + " e sou " + profissao + "."]
}

alert(infoUser());*/



//2.Escreva as funções explicadas abaixo:
//a) Escreva uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e retorne o resultado. Invoque a função e imprima no console o resultado.

/*function soma(num1, num2) {
    resultado = num1 + num2;
    return resultado;
}

console.log(soma(10, 5));*/

//b) Faça uma função que recebe 2 números e retorne um booleano que informa se o primeiro número é maior ou igual ao segundo.

/*function compara(num1, num2) {
    return num1 >= num2;
}

console.log(compara(2, 1));
console.log(compara(0, 1));*/

//c) Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não.

/*function par(num1) {
    return num1 % 2 === 0 
}

console.log(par(2));
console.log(par(1));*/

//d) Faça uma função que recebe uma mensagem (string) como parâmetro e imprima o tamanho dessa mensagem, juntamente com uma versão dela em letras maiúsculas.

/*function mensagem(texto) {
    texto = prompt("Deixe sua mensagem: ");
    return texto.toUpperCase() + texto.length;
}

console.log(mensagem());*/



//3. Crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão). Em seguida, peça para o usuário inserir dois números e chame essas 4 funções com esses valores inputados pelo usuário sendo o argumento. 
//Por fim, mostre no console o resultado das operações:

//Números inseridos: 30 e 3
//Soma: 33
//Diferença: 27
//Multiplicação: 90
//Divisão: 10

/*function somar(num1, num2) {
    return parseFloat(num1) + parseFloat(num2);
}

function subtrair(num3, num4) {
    return num3 - num4;
}

function multiplicar(num5, num6) {
    return num5 * num6;
}

function dividir(num7, num8) {
    return num7 / num8;
}

let valor1 = prompt("insira o primeiro número por favor: ");
let valor2 = prompt("insira o segundo número por favor: ");

console.log(somar(valor1, valor2));
console.log(subtrair(valor1, valor2));
console.log(multiplicar(valor1, valor2));
console.log(dividir(valor1, valor2));*/



//Desafios:

//1. Funções são trechos de códigos como quaisquer outros mas que podemos acessá-los mais de uma vez ao longo do código através de invocações/chamadas. 
//Então, funções podem chamar/invocar outras funções também. Sua tarefa é escrever duas funções
//a) Escreva uma arrow function que recebe um parâmetro e imprime no console esse parâmetro
//b) Escreva outra arrow function que recebe dois valores como parâmetros mas nenhum retorno. 
//Faça a soma entre esses valores e chame a sua primeira função mandando este resultado da soma como entrada para imprimi-lo

/*const parametro1 = (valor1) => {
    return valor1;
}

console.log(parametro1(15));


const parametro2 = (valor2, valor3) => {
    valor2 = prompt("Digite um número: ");
    valor3 = prompt("Digite outro número: ");
    resultado = parseFloat(valor2) + parseFloat(valor3);
    return parametro1(resultado);
}

console.log(parametro2());*/

//Forma correta.
/*const imprimirparametro = (valor1) => {
    console.log(valor1);
    }

const somaParametro = (valor2, valor3) => {
    let resultado = valor2 + valor3;
    imprimirparametro(resultado);
        }

somaParametro(12,13);*/



//2. Faça uma função que execute o teorema de Pitágoras, recebendo dois catetos e calculando o valor da hipotenusa. Retorne este valor, invoque a função e imprima o resultado no console.
// Dica: A fórmula do teorema é: hip² = a² + b² , onde hip é a hipotenusa e a e b são os catetos. 
//É necessário isolar a hipotenusa, então ao final temos: hip = √(a² + b²)

/*function teorema(cat1, cat2) {
    const hipotenusa = Math.sqrt(cat1 ** 2 + cat2 ** 2);
    return hipotenusa;
} 

let cat3 = prompt("Digite o valor do primeiro cateto: ");
let cat4 = prompt("Digite o valor do segundo cateto: ");

const resultado = teorema(cat3, cat4);
console.log("O valor da hipotenusa é: " + resultado);*/