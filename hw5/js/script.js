var caught = 0;
var goal = 0;
var progress = 0;

function myFunction() {
	do{
	    goal = parseInt(window.prompt("Please enter how many Cubones you want to catch:", ""));
	}while(isNaN(goal) || goal < 1);

    document.getElementById("msg").innerHTML="Cubones Caught: " + caught + " Goal: " + goal + "<div class='progress progress-striped active'><div class='progress-bar progress-bar-success' role='progressbar' aria-valuenow='" + progress.toString() + "' aria-valuemin='0 aria-valuemax='100' style='width:" + progress.toString() + "%'><span class='sr-only'>" + progress.toString() + "% Complete (success)</span></div></div>";
	// Create canvas
	var canvas = document.createElement("canvas");
	var ctx = canvas.getContext("2d");
	canvas.width = 480;
	canvas.height = 440;
	myCanvas = document.getElementById("myCanvas");
	myCanvas.appendChild(canvas);

	// Background image
	var bgReady = false;
	var bgImage = new Image();
	bgImage.onload = function () {
		bgReady = true;
	};
	bgImage.src = "images/grass.png";

	// trainer image
	var trainerReady = false;
	var trainerImage = new Image();
	trainerImage.onload = function () {
		trainerReady = true;
	};
	trainerImage.src = "images/trainer.png";

	// cubone image
	var cuboneReady = false;
	var cuboneImage = new Image();
	cuboneImage.onload = function () {
		cuboneReady = true;
	};
	cuboneImage.src = "images/cubone.png";

	// Game objects
	var trainer = {
		speed: 400, // movement in pixels per second
		x: 0,
		y: 0
	};
	var cubone = {
		x: 0,
		y: 0
	};

	// Handle keyboard controls
	var keysDown = {};

	addEventListener("keydown", function (e) {
		keysDown[e.keyCode] = true;
	}, false);

	addEventListener("keyup", function (e) {
		delete keysDown[e.keyCode];
	}, false);

	// Reset the game when the player catches a cubone
	var reset = function () {
	    if (caught == goal) {
	    	alert('You caught ' + caught + ' Cubones! Congratulations, you won!');
			window.location.reload();
	    }

		trainer.x = canvas.width / 2;
		trainer.y = canvas.height / 2;

		// Throw the cubone somewhere on the screen randomly
		cubone.x = (Math.random() * (canvas.width - 64));
		cubone.y = (Math.random() * (canvas.height - 64));
	};

	// Update game objects
	var update = function (modifier) {
		if (38 in keysDown) { // Player holding up
			trainer.y -= trainer.speed * modifier;
		}
		if (40 in keysDown) { // Player holding down
			trainer.y += trainer.speed * modifier;
		}
		if (37 in keysDown) { // Player holding left
			trainer.x -= trainer.speed * modifier;
		}
		if (39 in keysDown) { // Player holding right
			trainer.x += trainer.speed * modifier;
		}

		// Are they touching?
		if (
			trainer.x <= (cubone.x + 40)
			&& cubone.x <= (trainer.x + 40)
			&& trainer.y <= (cubone.y + 40)
			&& cubone.y <= (trainer.y + 40)
		) {
			++caught;
			progress = (caught / goal) * 100;
		    document.getElementById("msg").innerHTML="Cubones Caught: " + caught + " Goal: " + goal + "<div class='progress progress-striped active'><div class='progress-bar progress-bar-success' role='progressbar' aria-valuenow='" + progress.toString() + "' aria-valuemin='0 aria-valuemax='100' style='width:" + progress.toString() + "%'><span class='sr-only'>" + progress.toString() + "% Complete (success)</span></div></div>";
		    reset();
		}
	};

	// Draw everything
	var render = function () {
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

	// The main game loop
	var main = function () {
		var now = Date.now();
		var delta = now - then;

		update(delta / 1000);
		render();

		then = now;
	};

	// Let's play this game!
	reset();
	var then = Date.now();
	setInterval(main, 1); // Execute as fast as possible
}