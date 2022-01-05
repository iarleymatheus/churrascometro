var adulto = document.getElementById("adul");
var criancas = document.getElementById("cria");
var tempo = document.getElementById("hora");

var Meet = document.getElementById("meet");

var beer = document.getElementById("cerveja");

var Refrig = document.getElementById("refri");


function Calc(){
    let adul = adulto.value;
    let cri = criancas.value;
    let temp = tempo.value;

    let carne = (adul * 0.500 + cri * 0.250) * temp;
    Meet.innerHTML =  carne + " Kg de Carne";

    let cerveja = adul * 4 * temp;
    beer.innerHTML = cerveja + " Latas de cerveja";

    let refrigerante = (adul * 2 + cri * 1) *temp;
    Refrig.innerHTML = refrigerante + " Litros de Refrigerante" ;

    
    console.log(carne)
 



}

