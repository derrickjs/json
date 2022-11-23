const rURL = "https://raw.githubusercontent.com/derrickjs/json/main/stuff.json"
const pokemon = "https://pokeapi.co/api/v2/pokemon/charizard";



var request = new XMLHttpRequest();

var getPokemon = new XMLHttpRequest();

request.open("GET", rURL);
request.responseType = "json";

getPokemon.open("GET", pokemon)
getPokemon.responseType = "json";


getPokemon.send();


getPokemon.onload = () => {
    console.log(getPokemon.response);
    document.querySelector("body").innerHTML += `<img src = "${getPokemon.response.sprites.front_default}"/> `
}

request.send();

request.onload = () => {
    classInfo(request.response);

}

function classInfo(data) {
    for( let d of data){
        document.querySelector("body").innerHTML += "<h1>" + d.product + ": " + d.price + "</h1>";
    }
}
