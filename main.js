var player1 = "Player 1";
var player2 = "Player 2";

function editNames() {
    player1 = prompt("Enter Player 1 Name:");
    player2 = prompt("Enter Player 2 Name:");

    document.querySelector('p.Player1').innerHTML = player1;
    document.querySelector('p.Player2').innerHTML = player2;
};

function rollTheDice(){
    setTimeout(function(){
     var randomNumber1 = Math.floor(Math.random()*6)+1;
     var randomNumber2 = Math.floor(Math.random()*6)+1;

     document.querySelector(".img1").setAttribute("src","dice" + randomNumber1 + ".svg");

     document.querySelector(".img2").setAttribute("src","dice" + randomNumber2 + ".svg");


     if(randomNumber1 === randomNumber2){
         document.querySelector('h1').innerHTML = "Draw! Play Again"
     }
     else if(randomNumber1 < randomNumber2){
         document.querySelector('h1').innerHTML = (player2 + ' Wins The Game!');
     }
     else{
         document.querySelector('h1').innerHTML = (player1 + ' Wins The Game!');
     }
         
    }, 2500);
};