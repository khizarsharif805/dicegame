//giving random numbers to both players.
var p1 = Math.floor(Math.random()*6)+1;
console.log(p1);

var p2 = Math.floor(Math.random()*6)+1;
console.log(p2);

//replacing image same as random number.
document.getElementById("p1").setAttribute("src", "images/dice"+ p1 +".png");

document.getElementById("p2").setAttribute("src", "images/dice"+ p2 + ".png");

//Using InnerHTML Change the Big H1 with some text.
if(p1>p2){
    document.getElementById("win").innerHTML=("Player 1 wins:)");
}else if(p2>p1){
    document.getElementById("win").innerHTML="Player 2 wins :O";
}else{
    document.getElementById("win").innerHTML="Draw hai bhai";
}

//refresh button for page
const btn = document.querySelector("#refresh");
console.log("page refresh");

btn.addEventListener("click", function(){
    location.reload();
});
