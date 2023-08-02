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

//slice lenght upper lower
var name = prompt("Please write your name below");
var nameCorrect = name.slice(0,1).toUpperCase() + name.slice(1,name.length).toLowerCase();
alert("Hello, " + nameCorrect + " !");

//math
var dogAge = prompt("Please write your dog's age below.");
alert("Your dog is " + ((dogAge-2)*4+21) + " human years old.");

