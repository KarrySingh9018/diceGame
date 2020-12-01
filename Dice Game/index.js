/*----- For Dice #1 -----*/
var randomNumber1 = Math.random();
randomNumber1 = Math.floor(randomNumber1 * 6) + 1;
//console.log(randomNumber1);

var randomDiceImage = "dice" + randomNumber1 + ".png"; //creating the image file-name for Dice #1

var randomImageSource = "images/" + randomDiceImage; //extracting the image source for Dice #2

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);

/*----- For Dice #2 -----*/
var randomNumber2 = Math.random();
randomNumber2 = Math.floor(randomNumber2 * 6) + 1;
console.log(randomNumber2);

var randomDiceImage = "dice" + randomNumber2 + ".png"; //creating the image file-name for Dice #1

var randomImageSource = "images/" + randomDiceImage; //extracting the image source for Dice #2

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource);

/*----- Comparison between both die and displaying the winner -----*/
if(randomNumber2 > randomNumber1) {
	document.querySelector("h1").innerHTML = "Player2 Wins";
} else if(randomNumber1 > randomNumber2) {
	document.querySelector("h1").innerHTML = "Player1 Wins";
} else {
	document.querySelector("h1").innerHTML = "It's a Draw!!";
}
