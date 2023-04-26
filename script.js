1. //Leia o código abaixo
    
  //  function minhaFuncao(variavel) {
    //	return variavel * 5
    //}
    
    //console.log(minhaFuncao(2));
    //console.log(minhaFuncao(10));
    
    
    //a) O que vai ser impresso no console?
    //console.log(minhaFuncao(2)) //Retorna resultado 10;
    //console.log(minhaFuncao(10))//Retorna resultado 50;
    
    //b) O que aconteceria se retirasse os dois `console.log` e simplesmente invocasse a função `minhaFuncao(2)` e `minhaFuncao(10)`? O que apareceria no console?*/
    // Não retorna nada no console, mas a function constinua funcionando;

    //2. Leia o código abaixo
    
    //let textoDoUsuario = prompt("Insira um texto");
    
    //const outraFuncao = function(texto) {
    //	return texto.toLowerCase().includes("cenoura")
    //}
    
    //const resposta = outraFuncao(textoDoUsuario)
    //console.log(resposta)
    
    //a. Explique o que essa função faz e qual é sua utilidade
    //Essa função faz com que o texto digitado pelo usuário esteja com todas as letras minúsculas, e verifica se "cenoura" esta no texto.
    
    //b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
         //i.   `Eu gosto de cenoura` = Retona true no console;
         //ii.  `CENOURA é bom pra vista` = Retona true no console;
         //iii. `Cenouras crescem na terra` = Retona true no console.


         

  //1.Escreva as funções explicadas abaixo:
  //a) A função não deve receber nenhum parâmetro e deve imprimir uma mensagem falando algumas informações sobre você, como: 
  //"Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante."
  //Troque o nome, idade, cidade e se é estudante ou não por informações sobre você. Lembrando que a função não possui entradas, apenas imprime essa mensagem.

  //function infoUser(){
  //  console.log("Eu sou Felipe, tenho 28 anos, moro em São Leopoldo e sou estudante.");
  //}
    


  //b) Agora escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa: o nome (string), a idade (number), a cidade (string) e 
  //uma profissão (string). Ela deve retornar uma string que unifique todas as informações da pessoa em uma só mensagem com o template:
  //Eu sou [NOME], tenho [IDADE] anos, moro em [ENDEREÇO] e sou [PROFISSÃO].

    //function infoUser(nome, idade, endereço, profissão){
    //   console.log("Eu sou " + nome + ", tenho " + idade + " anos" + ", moro em " + endereço + " e sou " + profissão + ".");
//}

//infoUser(prompt("Digite seu nome:"), prompt("Digite sua idade: "), prompt("Digite seu endereço: "), prompt("Digite sua profissão: "));




//2. Escreva as funções explicadas abaixo:
//a) Escreva uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e retorne o resultado. Invoque a função e imprima no console o resultado.

//function numeros(num1, num2){
//   return num1 + num2
//}

//let resultado = numeros(5,10);
//console.log(resultado);

//ou pode ser feito sem declaração de nova variavel.
//console.log(numeros(5,10));




//b) Faça uma função que recebe 2 números e retorne um booleano que informa se o primeiro número é maior ou igual ao segundo.

//function numeros(num1, num2){
//    return num1 >= num2
//}

//console.log(numeros(2, 5));




//c) Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não

//function number(num1){
//    return num1%2 === 0
//}

//console.log(number(10));


//d) Faça uma função que recebe uma mensagem (string) como parâmetro e imprima o tamanho dessa mensagem, juntamente com uma versão dela em letras maiúsculas.

//function mensagem(texto){
//   tamanho = texto.length
//   maiusculo = texto.toUpperCase()
//    return tamanho + ", " + maiusculo
//}

//console.log(mensagem(prompt("Digite uma mensagem: ")));




//3.Crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão). 
//Em seguida, peça para o usuário inserir dois números e chame essas 4 funções com esses valores inputados pelo usuário sendo o argumento. 
//Por fim, mostre no console o resultado das operações:

//Números inseridos: 30 e 3
//Soma: 33
//Diferença: 27
//Multiplicação: 90
//Divisão: 10

