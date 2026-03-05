// Primeira questão ============================================

let idade = Number(prompt('Digite sua idade:'));

if(idade >= 18) {
    alert("Maior de idade");
} else {
    alert("Menor de idade");
}

// Segunda questão ============================================

let numero = parseInt(prompt('Insira seu número:'));

if(numero %2 == 0){
console.log('Seu número é par.');
} else {
    console.log('Seu número é ímpar.');
}

// Terceira questão ============================================

let num1 = parseFloat (prompt('Digite o primeiro número:'));
let num2 = parseFloat (prompt('Digite o segundo número:'));

let operacao = prompt('Escolha a operação: (+, -, *, /)');

let calculo
    if (operacao === "+") {
        resultado = num1 + num2;
    } else if (operacao === "-"){
        resultado = num1 - num2;
    } else if (operacao === "*") {
        resultado = num1 * num2;
    } else if (operacao === "/") {
        resultado = num1 / num2;
    } else {
        resultado = "Erro, selecione uma operação válida."
}

console.log ("Resultado: \n" + resultado);

// Quarta questão ============================================

let numero = parseInt(prompt("Digite um número: \n"));

for (let i = 1; i <= 10; i++) {
    console.log(numero + "x" + i + "=" + (numero * i));
}

// Quinta questão ============================================

let nota1 = parseFloat(prompt("Digite a primeira nota:"));
let nota2 = parseFloat(prompt("Digite a segunda nota:"));
let nota3 = parseFloat(prompt("Digite a terceira nota:"));

let media = (nota1 + nota2 + nota3) / 3;

if (media >= 7) {
    console.log("Média: " + media.toFixed(2) + " - Aprovado");
} else if (media >= 5 && media < 7) {
    console.log("Média: " + media.toFixed(2) + " - Recuperação");
} else {
    console.log("Média: " + media.toFixed(2) + " - Reprovado");
}

// Sexta questão ============================================

let numero = parseInt(prompt("Digite um número inteiro positivo:"));

if (numero > 0) {
    let resultado = "";

    for (let i = 1; i <= numero; i++) {
        resultado += i + " ";
    }

    console.log("Números de 1 até " + numero + ":\n" + resultado);
} else {
    console.log("Erro, inválido.");
}

// Sétima questão ============================================

let soma = 0;
let numero;

do {
  numero = Number(prompt("Digite um número (digite 0 para parar):"));
  soma += numero;
} while (numero !== 0);

alert("A soma total é: " + soma);

// Oitava questão ============================================

let positivos = 0;

for (let i = 1; i <= 5; i++) {
  let numero = Number(prompt("Digite um número:"));
  
  if (numero > 0) {
    positivos++;
  }
}

alert("Quantidade de números positivos: " + positivos);

// Nona questão ============================================

let usuarioCorreto = "admin";
let senhaCorreta = "1234";

let tentativas = 0;

while (tentativas < 3) {
  let usuario = prompt("Digite o usuário:");
  let senha = prompt("Digite a senha:");

  if (usuario === usuarioCorreto && senha === senhaCorreta) {
    alert("Login efetuado com sucesso");
    break;!
  } else {
    tentativas++;
    alert("Usuário e senha incorretos");
  }
}

if (tentativas === 3) {
  alert("Acesso bloqueado.");
}

// Décima questão ============================================

let numero = Number(prompt("Digite um número inteiro positivo:"));
let fatorial = 1;

for (let i = 1; i <= numero; i++) {
  fatorial *= i;
}

alert("O fatorial de " + numero + " é: " + fatorial);


