let temCarta = false
let temCarro = false
let nome = (prompt("Qual o seu nome ?"))
let idade = (prompt("Qual a sua idade ?"))
//Obtendo informaões do usuário 
let opcaoCarta = (prompt("Você possui carteira de motorista? Sim/Não "))
if (opcaoCarta == "Sim") {
    temCarta = true
}
let opcaoCarro = prompt ("Você tem carro  ? Sim/ Não") 
if (opcaoCarro == "Sim") {
    temCarro = true
}
//Exibindo mensagem no console
if (idade < 18 || !temCarta) {
    console.log (nome + ", você ainda não pode dirigir")
} else if (idade >= 18 && temCarta && !temCarro) {
    console.log (nome + ", você pode dirigir mas não tem um carro")
} else {
    console.log(nome + ", você será o motorista!")
}
