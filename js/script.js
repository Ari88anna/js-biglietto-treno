//Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
//Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole: 
//il prezzo del biglietto è definito in base ai km (0.21 € al km) va applicato uno sconto del 20% per i minorenni va applicato uno sconto del 40% per gli over 65.
//L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).


//Chiedere all'utente il numero di km che vuole percorrere
var chilometriDaPercorrere = prompt ("Quanti chilometri vuoi percorrere");
var chilometriDaPercorrereNumero = parseInt (chilometriDaPercorrere);
console.log(chilometriDaPercorrereNumero);

//Chiedere all'utente l'età del passeggero
var etaPasseggero = prompt ("Quanti anni hai?");
var etaPasseggeroNumero = parseInt (etaPasseggero);
console.log(etaPasseggeroNumero);

if ( isNaN(chilometriDaPercorrereNumero + etaPasseggeroNumero ) ) {
    alert('Quello che hai iserito non è un numero');
}

// prezzo biglietto al km 
var prezzoPerKm = 0.21;
// console.log(prezzoPerKm);

//prezzo in base ai km
var prezzoChilometri = chilometriDaPercorrereNumero * prezzoPerKm;
console.log(prezzoChilometri);

//sconto minorenni
var valoreScontoMinorenni = 20;

var scontoMinorenni = prezzoChilometri * valoreScontoMinorenni / 100;
console.log(scontoMinorenni);

var prezzoMinorenni = prezzoChilometri - scontoMinorenni;
console.log(prezzoMinorenni);

//sconto over 65
var valoreScotOver = 40;

var scontOver = prezzoChilometri * valoreScotOver / 100;
console.log(scontOver);

var prezzOver = prezzoChilometri - scontOver;
console.log(prezzOver);

//al prezzo del biglietto va applicato uno sconto del 20% per i minorenni e del 40% per gli over 65.

var prezzoFinale = prezzoChilometri;



if (etaPasseggero > 65) {
    prezzoFinale = prezzOver;
} else if (etaPasseggero < 18 ) {
    prezzoFinale = prezzoMinorenni;
}  

//output
alert("il prezzo per te è: " + prezzoFinale.toFixed(2) + "€");




