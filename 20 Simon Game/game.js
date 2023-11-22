var colors = ["green", "red", "yellow", "blue"];
var gameList = [];
var playerList = [];
var startKey = true;
var level = 0;

$(".btn").click(function() {
    var click = $(this).attr("id");
    playerList.push(click);
    sound(click);
    animateClick(click);
    control();
})

function control() {

    var pLength = playerList[(playerList.length)-1] === gameList[(playerList.length)-1]

    if (pLength && gameList.length == playerList.length) {
        setTimeout(function() {newColor();}, 500);
    }
    else if (pLength && gameList.length != playerList.length) {
        return;
    }
    else {
        gameOver();
    }
}

function newColor() {
    var color = colors[Math.floor(Math.random()*4)];
    gameList.push(color);
    $("." + color).fadeOut(100).fadeIn(100);
    sound(color);
    level++;
    $("#level-title").text("Level " + level);
    playerList.length = 0;
}

function sound (name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function animateClick(name) {
    $("#" + name).addClass("pressed");
    setTimeout(function() {
        $("#" + name).removeClass("pressed")
    }, 100);
}

$(document).keydown(function() {
    if (startKey) {
        $(".btn").removeClass("pressed");
        newColor();
        startKey = false;
    };
})

function gameOver() {
    $("body").addClass("game-over");
    setTimeout(function() {
        $("body").removeClass("game-over")
    }, 500);
    $("#level-title").text("Game Over at Level " + (level-1));
    $(".btn").addClass("gameover");
    var audio = new Audio("sounds/wrong.mp3");
    audio.play();
    setTimeout(function() {window.location.reload();}, 4000);
}