'use scrict'
const display = document.getElementById('display');
const numeros = document.querySelectorAll('[id*=tecla]')
const operadores = document.querySelectorAll('[id*=operador]')
let novoNumero = true;
let operador;
let numeroanterior;
const atualizarDisplay = (texto) => {
    if (novoNumero) {
        display.textContent = texto;
        novoNumero = false;
    } else {
        display.textContent += texto;
    }
    
}
const inserirNumero = (evento) => atualizarDisplay(evento.target.textContent);
numeros.forEach(numero => numero.addEventListener('click', inserirNumero));
const selecionarOperador = (evento) => {
    novoNumero = true;
    operador = evento.target.textContent;
    numeroanterior = display.textContent;
}
operadores.forEach(operador => operador.addEventListener('click', selecionarOperador));