
const altura = document.getElementById("altura")
const peso = document.getElementById("peso")
const calcular = document.getElementById("calcular")
const resultado = document.getElementById("resultado")

function calcularImc() {
   const imc = parseFloat(peso.value) / (parseFloat(altura.value) ** 2);
   resultado.textContent = imc.toFixed(2)
}

// if (valorImc < 18.5) {
//    IMC = 'abaixo do peso'
//    } else if (valorImc >= 18.5 && valorImc < 25) {
//    IMC = 'com o peso ideal!'
//    } else if (valorImc >= 25 && valorImc < 30) {
//    IMC = 'acima do peso.'
//    } else if (valorImc >= 30 && valorImc < 35) {
//    IMC = 'com obesidade grau I.'
//    } else if (valorImc >= 35 && valorImc < 40) {
//    IMC = 'com obesidade grau II.'
//    } else {
//    IMC = 'com obesidade grau III.'
//    }
//    resultado.textContent = `${nome}, seu IMC é ${valorImc} e você está
//    ${IMC}`


calcular.addEventListener("click" ,calcularImc)

   

