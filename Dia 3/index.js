//Declaração de variaveis
let nome = ""
let idade = 0
let altura = 0
let peso = 0
//Solicitando informações ao usuario e atribuindo os valores às variaveis
nome = prompt ("Digite o seu nome: ")
idade = parseInt(prompt("Digite sua idade :"))
altura = parseFloat(prompt("Digite sua altura: "))
peso = parseInt (prompt("Digite seu peso : "))
//Calculando o ano que a pessoa nasceu e o IMC
let anoNasc = 0
anoNasc = 2023 - idade

let imc = 0
imc = peso / (altura * altura)

//Exibindo as informações no console
console.log ("Olá " + nome + ", você tem " + idade + " anos, nasceu em " + anoNasc + ", tem " + altura + " de altura, e pesa "+ peso + "kg e seu IMC é " + imc + " kg/m")



