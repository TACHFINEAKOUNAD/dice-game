var randomnum1 = Math.floor(Math.random()*6)+1;//it gives you random number bet 1 & 6

var wishimage1 = "dice" + randomnum1 + ".png"; // ex dice1.png

var randomsource1 = "images/" + wishimage1;

var duduu = document.querySelectorAll("img")[0];

duduu.setAttribute("src", randomsource1);

var randomnum2  = Math.floor(Math.random()*6)+1;//it gives you random number bet 1 & 6

var  wishimage2 = "dice" + randomnum2 + ".png "; // ex dice1.png

var randomsource2 = " images/" + wishimage2;

document.querySelectorAll("img")[1].setAttribute("src", randomsource2);


if (randomnum1 > randomnum2){
  document.querySelector("h1").innerHTML= "Player 1 wins";
}
else if (randomnum2 > randomnum1){
  document.querySelector("h1").innerHTML= "Player 2 wins";

}
else{
  document.querySelector("h1").innerHTML= "it's a drow";

}
