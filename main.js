

function fazGet(url) {
    //parametros para uma busca de API
    let request = new XMLHttpRequest()
    request.open('GET', url, false)
    request.send()
    return request.responseText
}

function criaLinhasISS(dados){
    //monta um paragrafo para mostar na tela as infos trazidas da requisição
    const paragrafo = document.createElement("p")
    const node = document.createTextNode("Posiçoes: Longitude: " + dados.longitude + " Latitude: " + dados.latitude)
    paragrafo.appendChild(node)
    document.getElementById("divRespISS").appendChild(paragrafo)

}
function getISS(){
    // vem como um objeto, se converte para JSON
    const issPosition = fazGet("http://api.open-notify.org/iss-now")
    const response = JSON.parse(issPosition)
    let latitude = response.iss_position.latitude
    let longitude = response.iss_position.longitude
    const infos = {
        longitude : latitude,
        latitude : longitude
    }
    criaLinhasISS(infos)
}

function getNumbers(){
    let numero = document.getElementById("idCuriosidadeNum").value
    //vem como string, não é preciso converter para JSON
    const numberCurious = fazGet(`http://numberapi.com/${numero}`) 
    criaLinhasNumbers(numberCurious)
}

function criaLinhasNumbers(infoNumero){
    //monta um paragrafo para mostar na tela as infos trazidas da requisição
    const paragrafo = document.createElement("p")
    const node = document.createTextNode("Curiosidade sobre o numero: " + infoNumero )
    paragrafo.appendChild(node)
    document.getElementById("divRespNum").appendChild(paragrafo)

}

function getData(){
    let data = document.getElementById("idDataCuriosidade").value
    console.log(data)
    const dateCurious = fazGet(`http://numberapi.com/${data}/date`)
    console.log(dateCurious)
    criaLinhasData(dateCurious)
}

function criaLinhasData(dateCurious){
    //monta um paragrafo para mostar na tela as infos trazidas da requisição
    const paragrafo = document.createElement("p")
    const node = document.createTextNode("Um fato sobre a data: " + dateCurious )
    paragrafo.appendChild(node)
    document.getElementById("divRespData").appendChild(paragrafo)
}



function getStarWars(){

    let numPersonagem = document.getElementById("idStarWars").value
    const response = fazGet(`https://swapi.dev/api/people/${numPersonagem}/`)
    personagem = JSON.parse(response)
    const nome       = personagem.name  
    const nascimento = personagem.birth_year 
    const corCabelo   = personagem.hair_color
    const genero     = personagem.gender

    personagemDados = {
        nome : nome,
        nascimento : nascimento,
        corCabelo  : corCabelo,
        genero     : genero
    }
    criaLinhasSW(personagemDados)

}


function criaLinhasSW(dados){
    //monta um paragrafo para mostar na tela as infos trazidas da requisição
    const paragrafo = document.createElement("p")
    const node = document.createTextNode( "Nome: " + dados.nome +", Nascimento: " + dados.nascimento + ", Genero: " + dados.genero)
    paragrafo.appendChild(node)
    document.getElementById("divRespWS").appendChild(paragrafo)

}