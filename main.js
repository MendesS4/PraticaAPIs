console.log("chegou")
function fazGet(url) {
    let request = new XMLHttpRequest()
    request.open('GET', url, false)
    request.send()
    return request.responseText
}

function criaLinha(usuario) {

}

function main(){
    issPosition = getISSPosition("http://api.open-notify.org/iss-now")
    issPositionJson = JSON.parse(issPosition)
    console.log(issPositionJson)
}