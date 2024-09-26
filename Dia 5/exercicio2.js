//Criando variáveis
let opcao = prompt("Escolha uma dessas opções : Abastecer com Gasolina, Álcool ou calibrar os pneus.")
let litroGasolina = 5
let litroAlcool = 3
//Criando switchcase
switch (opcao) {
    case "Gasolina" :
        let valorG = prompt ("Qual o valor desejado? ")
        let totalG = (valorG * litroGasolina)
        console.log ("A quantidade de litros foi : ", totalG , " litros.")
        break
        case "Álcool" :
            let valorA = prompt ("Qual o valor desejado? ")
            let totalA = (valorA * litroAlcool)
            console.log ("A quantidade de litros foi : ", totalA , " litros.")
            break
            case "Calibrar" :
                console.log ("Pneus calibrados com sucesso.")
                break
                default :
                break


}