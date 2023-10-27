var number1 = Math.floor (Math.random() * 6)+1;
var number2 = Math.floor (Math.random() * 6)+1;
document.querySelector(".img1").setAttribute("src", "images/dice"+number1+".png");
document.querySelector(".img2").setAttribute("src", "images/dice"+number2+".png");
if (number1>number2)
{
    document.querySelector("h1").innerHTML = "🚩Player1 Wins!";
}
else if (number1<number2)
{
    document.querySelector("h1").innerHTML = "Player2 Wins!🚩";
}
else
{
    document.querySelector("h1").innerHTML = "Draw!";
}