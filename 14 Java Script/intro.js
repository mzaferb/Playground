//var alert prompt
var myName = "Zafer";
var yourName = prompt("What is your name")
alert("Hello " + yourName + ", my name is " + myName + ". Welcome to my web page.")

//String Concatenation
var message = "Hello";
var name = "Zafer";
//Hello there, this is Zafer.
alert(message + " there, this is " + name + ".")

//length
var tweet =prompt("Write your 140 characters tweet below");
alert("You have written " + (tweet.length) + " characters, you have " + (140-tweet.length) + " characters left.")

//slice length upper lower
var name = prompt("Please write your name below");
var nameCorrect = name.slice(0,1).toUpperCase() + name.slice(1,name.length).toLowerCase();
alert("Hello, " + nameCorrect + " !");

//math
var dogAge = prompt("Please write your dog's age below.");
alert("Your dog is " + ((dogAge-2)*4+21) + " human years old.");

//Stanford Karel (https://stanford.edu/~cpiech/karel/ide.html) 5x5 Chess Board
function main(){
    go1();
    move();
    turnLeft();
    go2();
    turnRight();
    go1();
    move();
    turnLeft();
    go2();
    turnRight();
    go1();
 }
 
 function go1(){
    putBeeper();
    move();
    move();
    putBeeper();
    move();
    move();
    putBeeper();
    turnLeft();
 }
 function go2(){
    move();
    putBeeper();
    move();
    move();
    putBeeper();
    move();
    turnRight();
    move();
 }

 //Create function
 function getMilkRobot(money, price) {
    console.log("go to supermarket")
    var bottle = Math.floor (money/price)
    console.log("buy " + bottle + " bottles of milk")
    console.log("pay $" + bottle*price + " to supermarket")
    console.log("turn back to house")
}
getMilk(5, 1.5);
    /*go to supermarket
    buy 3 bottles of milk
    pay $4.5 to supermarket
    turn back to house*/