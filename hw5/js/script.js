var caught = 0;
var goal = 0;
var percent = 0;
var progress = "success";

function myFunction() {
    do {
        goal = parseInt(window.prompt("Please enter how many Cubones you want to catch:", "10"));
    } while (isNaN(goal) || goal < 1);
    document.getElementById("msg").innerHTML = "Caught: " + caught + " Goal: " + goal + "<div class='progress progress-striped active'><div class='progress-bar progress-bar-" + progress + "' role='progressbar' aria-valuenow='" + percent.toString() + "' aria-valuemin='0 aria-valuemax='100' style='width:" + percent.toString() + "%'><span class='sr-only'>" + percent.toString() + "% Complete (success)</span></div></div>";
    //Create canvas
    var canvas = document.createElement("canvas");
    var ctx = canvas.getContext("2d");
    canvas.width = 600;
    canvas.height = 300;
    myCanvas = document.getElementById("myCanvas");
    myCanvas.appendChild(canvas);
    //Upload background image
    var bgReady = false;
    var bgImage = new Image();
    bgImage.onload = function () {
        bgReady = true;
    };
    bgImage.src = "images/grass.png";
    //Upload trainer image
    var trainerReady = false;
    var trainerImage = new Image();
    trainerImage.onload = function () {
        trainerReady = true;
    };
    trainerImage.src = "images/trainer.png";
    //Uploading cubone image
    var cuboneReady = false;
    var cuboneImage = new Image();
    cuboneImage.onload = function () {
        cuboneReady = true;
    };
    cuboneImage.src = "images/cubone.png";
    //In-game objects
    var trainer = {
        speed: 600,
        x: 0,
        y: 0
    };
    var cubone = {
        x: 0,
        y: 0
    };
    //Handle keyboard controls
    var keysDown = {};
    addEventListener("keydown", function (e) {
        keysDown[e.keyCode] = true;
    }, false);
    addEventListener("keyup", function (e) {
        delete keysDown[e.keyCode];
    }, false);
    //Restart game when user catches a cubone
    var restart = function () {
        if (caught == goal) {
            alert('Whoa, you caught all ' + caught + ' Cubones!\nCongratulations, you are a true Pokemon Master!');
            window.location.reload();
        }
        trainer.x = canvas.width / 2;
        trainer.y = canvas.height / 2;
        //Randomly place cubone on the canvas
        cubone.x = (Math.random() * (canvas.width - 64));
        cubone.y = (Math.random() * (canvas.height - 64));
    };
    //Draw background, trainer, and cubone
    var draw = function () {
        if (bgReady) {
            ctx.drawImage(bgImage, 0, 0);
        }
        if (trainerReady) {
            ctx.drawImage(trainerImage, trainer.x, trainer.y);
        }
        if (cuboneReady) {
            ctx.drawImage(cuboneImage, cubone.x, cubone.y);
        }
    };
    var progressChange = function (percent) {
        if (percent <= 25) {
            progress = "success";
        } else if (percent <= 50) {
            progress = "info";
        } else if (percent <= 75) {
            progress = "warning";
        } else {
            progress = "danger";
        }
    }
    //Update in-game objects
    var update = function (modifier) {
        if (38 in keysDown) { //Up ke
            trainer.y -= trainer.speed * modifier;
        }
        if (40 in keysDown) { //Down key
            trainer.y += trainer.speed * modifier;
        }
        if (37 in keysDown) { //Left key
            trainer.x -= trainer.speed * modifier;
        }
        if (39 in keysDown) { //Right key
            trainer.x += trainer.speed * modifier;
        }
        //Check if trainer touches cubone
        if (
            trainer.x <= (cubone.x + 40) && cubone.x <= (trainer.x + 40) && trainer.y <= (cubone.y + 40) && cubone.y <= (trainer.y + 40)
        ) {
            ++caught;
            percent = (caught / goal) * 100;
            progressChange(percent);
            document.getElementById("msg").innerHTML = "Caught: " + caught + " Goal: " + goal + "<div class='progress progress-striped active'><div class='progress-bar progress-bar-" + progress + "' role='progressbar' aria-valuenow='" + percent.toString() + "' aria-valuemin='0 aria-valuemax='100' style='width:" + percent.toString() + "%'><span class='sr-only'>" + percent.toString() + "% Complete (success)</span></div></div>";
            restart();
        }
    };
    //Main game loop
    var main = function () {
        var now = Date.now();
        var timeDifference = now - prev;
        update(timeDifference / 1000);
        draw();
        prev = now;
    };
    //Start game
    restart();
    var prev = Date.now();
    setInterval(main, 1);
}