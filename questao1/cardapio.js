const codigo = document.querySelector('#codigo')
const quantidade = document.querySelector('#quantidade')
const botao = document.querySelector('#btn')


botao.addEventListener( 'click' , function(event){
    let valor;

    event.preventDefault();
    if(codigo.value == 100 || codigo.value == 103){
        valor = quantidade.value * 1.2
        console.log(valor)
    } 
    else if(codigo.value == 101 || codigo.value == 104){
        valor = quantidade.value * 1.3
    } 
    else if(codigo.value == 102){
        valor = quantidade.value * 1.5
    } 
    else if(codigo.value == 105){
        valor = quantidade.value * 1  
    }
    else {
        document.getElementById('resultado').innerText = "Código Invalido"
        return;
    }

    valor = valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    document.getElementById('resultado').innerText = `O valor a ser pago é de ${valor}`

})