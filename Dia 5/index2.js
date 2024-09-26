let number1 = parseInt(prompt("Digite o primeiro número:")) 
let number2 = parseInt(prompt("Digite o segundo número :"))
let operacao = prompt("Qual será a operação ? + / - / / ou *")

switch (operacao) {
    case "+" :
        console.log ("Você escolheu a soma entre os números, SOMA = ", number1 + number2)
        break
        case "-" :
            console.log ("Você escolheu a dimunuição, DIMINUIÇÃO = ", number1 - number2)
            break
            case "/" :
                console.log ("Você escolheu a divisão, DIVISÃO = ", number1 / number2)
                break
                case "*" :
                    console.log ("Você escolheu a multiplicação, MULTIPLICAÇÃO = ", number1 * number2)
                    break
                    default :
                    console.log ("Você digitou valores indefinidos")
                    break


    
}