let botao = document.querySelector("#botaoEnviar")
let data = document.querySelector("#data")


botao.addEventListener("click", function(event){
    console.log("botao ok")
    let dataEscolhida = data.value
    requisicao(dataEscolhida)
    console.log("data escolhida foi " + dataEscolhida)
})

function requisicao (dataEscolhida){
    let titulo = document.querySelector("#titulo")
    let data = document.querySelector("#dataEscolhida")
    let fotoDia = document.querySelector("#fotoDoDia")
    let descricao = document.querySelector("#descricao")

    //inicio requisicao

    //intanciando o XML
    let request = new XMLHttpRequest

    //abrindo a requisicao
    request.open("GET", `https://api.nasa.gov/planetary/apod?api_key=8AdSyi1c78fLbtHfz8eo0Nfdk9C7hiRQ7XMQfPAy&date=${dataEscolhida}`, false)

    //tratando a requisicao
    request.addEventListener("load", ()=>{
        if (request.status == 200){
            let dados = JSON.parse(request.responseText)
            titulo.innerText = dados.title
            data.innerText = dados.date
            descricao.innerText = dados.explanation
            fotoDia.src = dados.hdurl

            console.log(dados.title)
            console.log(titulo)
        }
    })
    

    //enviando requisicao
    request.send()
}