var random1=Math.floor( Math.random()*6)+1;;
var random2=Math.floor( Math.random()*6)+1;
console.log(random1);

var randomImage = "./images/dice"+ random1 + ".png";
var randomImage2 = "./images/dice"+ random2 + ".png";
document.querySelectorAll("img")[0].setAttribute("src",randomImage);
document.querySelectorAll("img")[1].setAttribute("src",randomImage2);

if(random1 > random2){
  document.querySelector("h1").textContent = "Player1 win!!!";
}
else if( random1 < random2){
  document.querySelector("h1").textContent = "Player2 win!!!";
}
else if (random1 === random2){
  document.querySelector("h1").textContent = "Draw";
}
