/* Abbiamo preso i due bottoni di generazione e annullamento
dei biglietti*/
var price = 0.21;
var priceT = 0;
var genBtn = document.getElementById("genera");
var annBtn = document.getElementById("annulla");

//Aggiunta di evento, se clicco il pulsante genera succede qualcosa
genBtn.addEventListener("click", function(){
  //Prende quello che c'è all'interno del campo di testo
  //Parse Int trasforma una stringa in un intero
  var name = document.getElementById("name").value;
  var km = parseInt(document.getElementById("km").value);
  var age = document.getElementById("age").value;

  if ((name !== "") && (km > 0) && (age != "")) {
    priceT = price * km;
    if (age == 1) {
    priceT = priceT - (priceT * 0.2);
    } else if (age == 3) {
    priceT = priceT - (priceT * 0.4);
  }
  document.getElementById("total-price").innerHTML = priceT;
  var cp = Math.floor(Math.random() * 100000 - 90000) + 90000;
  document.getElementById("bgt-code").innerHTML = cp;
});
annBtn.addEventListener("click", function(){
  console.log("Ho cliccato annulla");
});
