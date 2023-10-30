  var numberOfButtons = document.querySelectorAll(".drum").length;
  var i = 0;
  
  while (i < numberOfButtons) {
      document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        playSound(this.innerHTML)
        animation(this.innerHTML)
      });
      i++;
  }

  document.addEventListener("keydown", function(event) {
    playSound(event.key)
    animation(event.key)
  });

  function playSound(letter) {

    switch (letter) {
      case "w":
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
        break;
  
      case "a":
        var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
        break;
      
      case "s":
        var tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
        break;
  
      case "d":
        var tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
        break;
  
      case "j":
        var snare = new Audio("sounds/snare.mp3");
        snare.play();
        break;
  
      case "k":
        var crash = new Audio("sounds/crash.mp3");
        crash.play();
        break;
  
      case "l":
        var kick = new Audio("sounds/kick-bass.mp3");
        kick.play();
        break;
    
      default: console.log(letter);
    }
  }

  function animation(letter) {
    var activeButton = document.querySelector("." + letter);
    activeButton.classList.add("pressed")
    setTimeout(function () {
      activeButton.classList.remove("pressed")}, 100)
  }