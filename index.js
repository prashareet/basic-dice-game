var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomNumber2 = Math.floor(Math.random()*6)+1;

var random_dice_1 = "./images/dice" + randomNumber1 +".png";
var random_dice_2 = "./images/dice" + randomNumber2 +".png";


document.querySelectorAll("img")[0].setAttribute("src", random_dice_1);
document.querySelectorAll("img")[1].setAttribute("src", random_dice_2);
if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML = "🚩Player One wins!";
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML = "Player Two wins!";
}
else{
    document.querySelector("h1").innerHTML = "Its a draw!";
}

