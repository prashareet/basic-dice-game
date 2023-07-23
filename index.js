var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomNumber2 = Math.floor(Math.random()*6)+1;


function changeDice1(randomNumber1){
    var dice1 = "./images/dice1.png"
    var dice2 = "./images/dice2.png"
    var dice3 = "./images/dice3.png"
    var dice4 = "./images/dice4.png"
    var dice5 = "./images/dice5.png"
    var dice6 = "./images/dice6.png"
    if(randomNumber1===1){
        return dice1;
    }
    else if(randomNumber1===2){
        return dice2;
    
    }
    else if(randomNumber1===3){
        return dice3;
    
    }
    else if(randomNumber1===4){
        return dice4;
    
    }
    else if(randomNumber1===5){
        return dice5;
        
    }
    else{
        return dice6;
    }
    
}
function changeDice2(randomNumber2){
    var dice1 = "./images/dice1.png"
    var dice2 = "./images/dice2.png"
    var dice3 = "./images/dice3.png"
    var dice4 = "./images/dice4.png"
    var dice5 = "./images/dice5.png"
    var dice6 = "./images/dice6.png"
    if(randomNumber2===1){
        return dice1;
    }
    else if(randomNumber2===2){
        return dice2;
    
    }
    else if(randomNumber2===3){
        return dice3;
    
    }
    else if(randomNumber2===4){
        return dice4;
    
    }
    else if(randomNumber2===5){
        return dice5;
        
    }
    else{
        return dice6;
    }

}
var dice_real1 = changeDice1(randomNumber1);
var dice_real2 = changeDice2(randomNumber2);

document.querySelectorAll("img")[0].setAttribute("src", dice_real1);
document.querySelectorAll("img")[1].setAttribute("src", dice_real2);
if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML = "🚩Player One wins!";
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML = "Player Two wins!🚩";
}
else{
    document.querySelector("h1").innerHTML = "Its a draw!";
}

