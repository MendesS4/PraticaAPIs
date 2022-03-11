


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
    document.getElementById("divResp").appendChild(paragrafo)

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
    console.log(numero)
    //vem como string, não é preciso converter para JSON
    const numberCurious = fazGet(`http://numberapi.com/${numero}`) 
    console.log(numberCurious)

}

function getData(){

    let data = document.getElementById("idDataCuriosidade").value
    console.log(data)
    const dateCurious = fazGet(`http://numberapi.com/${data}/date`)
    console.log(dateCurious)

}

function getStarWars(){

    let numPersonagem = document.getElementById("idStarWars").value
    console.log(numPersonagem)
    const starWarsPeople = fazGet(`https://swapi.dev/api/people/${numPersonagem}/`)
    personagem = JSON.parse(starWarsPeople)
    console.log(personagem)

    criaLinhas(a)

}


