var bubbles = [];

function Bubble(img) {

	this.x = mouseX;
	this.y = mouseY;

	this.xspeed;
	this.yspeed;

	this.img = img;

	this.show = function() {

		if (this.y <= 0) { this.y *= 0; }
		if (this.y >= height) { this.y = height; }

		if (this.x <= 0) { this.x = 0; }
		if (this.x >= width) { this.x = width; }

		imageMode(CENTER);
		image(this.img, this.x, this.y, 25, 25);


	}

	this.move = function() {

		this.xspeed = random(-1, 1);
		this.yspeed = random(-1, 1);

		this.x += this.xspeed;
		this.y += this.yspeed;

	}

}

function preload() {

	img = loadImage("Images/bubble.png");
	song = loadSound("Sounds/song.mp3");

}

function setup() {

	createCanvas(windowWidth, windowHeight);
	background(0);

}

function draw() {

	if (!song.isPlaying()) {

		song.play();

	}

	background(0);
	frameRate(60);

	if (mouseIsPressed) {

		bubbles.push(new Bubble(img));

	}

	for (var i = 0; i < bubbles.length; i++) {

		bubbles[i].move();
		bubbles[i].show();

	}

	if (bubbles.length >= 2147483646) {

		for (var i = 0; i < bubbles.length; i++) {

			bubbles.splice(i, bubbles.length);

		}

	}

	if (keyIsDown(27)) {

		for (var i = 0; i < bubbles.length; i++) {

			bubbles.splice(i, bubbles.length);

		}

	}

}