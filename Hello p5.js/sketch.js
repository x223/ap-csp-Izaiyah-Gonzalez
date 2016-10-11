var xpos =50;
var ypos =50;
var xdir =10;
var ydir =10;

function setup() { 
  createCanvas(windowWidth, windowHeight);
} 

function draw() { 
  background('black');
	noStroke();
	ellipse(xpos, ypos, 50, 50);
	fill(random(255));
	triangle(0, windowHeight, xpos, ypos, windowWidth, windowHeight);
	xpos = xpos + xdir;
	ypos = ypos + ydir;
	if (xpos>= windowWidth || xpos<= 25){
		xdir = xdir * -1;
	}
	if (ypos>= windowHeight || ypos<= 25){
		ydir = ydir * -1;
	}
	
	
	
}