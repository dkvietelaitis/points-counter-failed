//Mygtukas zaidejas 1
var addPlayerOne = document.getElementById("one");
//Mygtukas zaidejas 2
var addPlayerTwo = document.getElementById("two");
// Zaidejas 1 tasku rodymas
var displayOne = document.getElementById("playerOne")
//Zaidejas 2 tasku rodymas
var displayTwo = document.getElementById("playerTwo")
//Tasku nuresetinimas
var reset = document.getElementById("reset");
//Ivesties laukelio reiksme
var pointAmount = document.querySelectorAll("input");
//Rodo iki kokio tasku kiekio zaidziama
var displayAmount = document.getElementById("toPoints");
//Skaitines reiksmes
var numberOne = 0;
var numberTwo = 0;
var numberThree = 0;
var numberZero = 0;

//Input'o reiksme i "Playing to:" eilute - NEVEIKIA 

/*pointAmount.oninput = function(){
    displayAmount.innerHTML = pointAmount.value
}*///Nesuveikia
/*displayAmount.addEventListener("oninput", function(){
    displayAmount.innerHTML = pointAmount
})*///Sitas Neveikia

//Skaiciuoja Zaidejas 1 taskus
addPlayerOne.addEventListener("click", function(){
    numberOne++
    displayOne.innerText = numberOne
})
//Skaiciuoja Zaidejas 2
addPlayerTwo.addEventListener("click", function(){
    numberTwo++
    displayTwo.innerText = numberTwo
})
//Nuresetina Zaidejas 1 2 taskus, istrina input laukeli
reset.addEventListener("click", function(){
    displayOne.innerText = numberZero
    displayTwo.innerText = numberZero
    pointAmount.forEach(input => input.value = "");
})



