const num1 = document.querySelector('#num1')
const num2 = document.querySelector('#num2')
const botao = document.querySelector('#btn')

const operacao_soma = document.querySelector('#operacao_soma')
const operacao_multiplicacao = document.querySelector('#operacao_multiplicacao')
const operacao_divisao = document.querySelector('#operacao_divisao')
const operacao_resto = document.querySelector('#operacao_resto')

const resultado_soma = document.querySelector('#resultado_soma')
const resultado_multiplicacao = document.querySelector('#resultado_multiplicacao')
const resultado_divisao = document.querySelector('#resultado_divisao')
const resultado_resto = document.querySelector('#resultado_resto')

botao.addEventListener( 'click' , function(event){
    event.preventDefault();
    operacao_soma.innerHTML = `${num1.value} + ${num2.value}`
    operacao_multiplicacao.innerHTML = `${num1.value} * ${num2.value}`
    operacao_divisao.innerHTML = `${num1.value} / ${num2.value}`
    operacao_resto.innerHTML = `${num1.value} % ${num2.value}`

    resultado_soma.innerHTML = `${Number(num1.value) + Number(num2.value)}`
    resultado_multiplicacao.innerHTML = `${num1.value * num2.value}`
    resultado_divisao.innerHTML = `${num1.value / num2.value}`
    resultado_resto.innerHTML = `${num1.value % num2.value}`

})