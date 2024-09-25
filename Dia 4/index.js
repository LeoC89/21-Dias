// Operadores, == Igual, != Diferente, > < Menor ou igual , >= maior igual, <= menor igual
let idade = Number(prompt("Qual a sua idade ? "))
if (idade <= 10){
console.log ("Você tem menos ou 10 anos") 
}else{ 
console.log ("Você tem mais de 10 anos")
}
//Praticando IF/ ELSE e OU || e &&
const fome = (prompt("Você está com fome ? Sim / Não"))
const  dinheiro = (prompt("Você está com dinheiro? Sim / Não"))
const restauranteAberto = (prompt("O restaurante está aberto ? Sim/ Não"))
if (fome === "Não" || dinheiro == "Não" ) {
console.log ("A janta será em casa.")
} else if (dinheiro === Sim && restauranteAberto === Sim ){
    console.log ("Hoje a janta será no seu restaurante favorito !")
}else{ 
    console.log ("Peça um delivery")
}
