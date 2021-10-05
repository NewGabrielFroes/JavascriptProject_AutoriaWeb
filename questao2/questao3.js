const botaoEnviar = document.querySelector("#btnEnviar")
const data = document.querySelector("#data")
const dataExtenso = document.querySelector("#dataExtenso")

function formatarData(str) {
    const partes = str.split('/').map(Number)
    const data = new Date(partes[2], partes[1] - 1, partes[0])
    return data.toLocaleString([], {year: 'numeric', month: 'long', day: 'numeric' })
}

botaoEnviar.addEventListener( 'click' , function(event){
    event.preventDefault()
    dataExtenso.innerHTML = formatarData(data.value)
})