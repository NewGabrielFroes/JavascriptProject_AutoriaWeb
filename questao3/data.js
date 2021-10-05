const btn = document.querySelector("#btn")
const data = document.querySelector("#data")
const resultado = document.querySelector("#resultado")

function formatarData(str) {
    const partes = str.split('/').map(Number)
    if (partes[0] < 0 || partes[0] > 31 || partes[1] > 12 || partes[1] < 1 || partes[2] < 0) {
        return "Data inválida"
    }
    const data = new Date(partes[2], partes[1] - 1, partes[0])
    return data.toLocaleString([], {year: 'numeric', month: 'long', day: 'numeric' })
}

btn.addEventListener( 'click' , function(event){
    event.preventDefault()
    resultado.innerHTML = formatarData(data.value)
})