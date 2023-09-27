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
    console.log("Go to supermarket")
    var bottle = Math.floor (money/price)
    console.log("Buy " + bottle + " bottles of milk")
    console.log("Pay $" + bottle*price + " to supermarket")
    console.log("Turn back to house")
    return (money%price)
}
var change = getMilkRobot(5, 1.5);
console.log("Here is your $"+change+" change master.");
    /*Go to supermarket
    Buy 3 bottles of milk
    Pay $4.5 to supermarket
    Turn back to house
    Here is your $0.5 change master.*/

 //Body Mass Index Calculator
 function bmiCalculator(weight, height) {
    var bmi = Math.round(weight/Math.pow(height, 2))
    return (bmi)
}
bmiCalculator(87, 1.83)
    /*20*/

// //Body Mass Index Calculator (IF)
function bmiCalc(weight,height) {

    var bmi = Math.round(weight / Math.pow(height,2));
    var result;
    
    if (bmi < 18.5) {
        result = "Your BMI is " + bmi + ", so you are underweight.";
    }
    else if (bmi >= 18.5 && bmi < 24.9) {
        result ="Your BMI is " + bmi + ", so you have a normal weight.";
    }
    else {
        result ="Your BMI is " + bmi + ", so you are overweight.";
    }
    return result;
}
bmiCalc(82,1.83);
    /*Your BMI is 24, so you have a normal weight.*/

//Leap Year Function
function leapYear(year) {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return "Leap year.";
            } else {
                return "Not leap year.";
            }
        } else {
            return "Leap year.";
        }
    } else {
        return "Not leap year.";
    }
}
leapYear(2096);
    /*Leap year.*/

//Arrays
var guestList = ["Angela", "Jack", "Pam", "James", "Lara", "Jason"];

var guest = prompt("Write your name");
if (guestList.includes (guest)) {
    alert("Welcome "+guest);
} else {
    alert("Maybe next time "+ guest);
}

//Arrays Fizzbuzz
var output = [];
var number = 1;

function fizzbuzz() {
    if (number % 3 === 0 && number % 5 === 0) {
        output.push ("fizzbuzz");
    }
    else if (number % 3 === 0) {
        output.push ("fizz");
    }
    else if (number % 5 === 0) {
        output.push ("buzz");
    }
    else {
        output.push (number);
    }
    console.log (output);
    number++;
}

//Who is Paying (Random)
function whosPaying() {
    var names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"]
    var number = Math.floor (Math.random() * names.length);
    return names[number]+" is going to buy lunch today!"
}
whosPaying()
    /*Ben is going to buy lunch today!*/