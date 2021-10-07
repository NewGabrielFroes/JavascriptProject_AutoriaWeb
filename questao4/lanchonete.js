const calcular = document.querySelector('#calcular')
const limpar = document.querySelector('#limpar')

limpar.addEventListener('click', function(event) {
    event.preventDefault()
    const nomeCliente = document.querySelector('#nomecliente')
    const bebida = document.querySelector('input[name="bebida"]:checked')
    const comida = document.querySelectorAll('[name="comida"]:checked')
    const p = document.querySelector('#resultado')
    p.textContent = ""
    nomeCliente.value = ""
    bebida.checked = false
    for(let i in comida) {
        comida[i].checked = false
    }
    
})

calcular.addEventListener( 'click' , function(event){
    event.preventDefault()
    const nomeCliente = document.querySelector('#nomecliente')
    const bebida = document.querySelector('input[name="bebida"]:checked')
    const comida = document.querySelectorAll('[name="comida"]:checked')
    const p = document.querySelector('#resultado')
    let valor = 0

    if (bebida.value == 'suco') {
        valor += 5.00
    }

    else if (bebida.value == 'refrigerante'){
        valor += 4.50
    }

    else if (bebida.value == 'agua')
    {
        valor += 1.50
    }

    for(let i in comida) {
        if (comida[i].value == 'bolo'){
            valor += 4.50
        }
        else if (comida[i].value == 'pastel'){
            valor += 5.00
        }
        else if (comida[i].value == 'torta') {
            valor += 6.00
        }
    }

    valor = valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    p.textContent = valor
})