var canvas = document.getElementById('main-canvas');

canvas.width 	= window.innerWidth - 100;
canvas.height  	= window.innerHeight - 200;

var ctx = canvas.getContext("2d");

// Draws a light blue sky on the left half side of the canvas
draw_rectangle(0, 0, canvas.width/2, canvas.height, 'lightblue');

// Draws a dark blue sky on the right half side of the canvas
draw_rectangle(canvas.width/2, 0, canvas.width/2, canvas.height, 'darkblue');	

// Draws Grass
draw_rectangle(0, canvas.height - canvas.height/4, canvas.width, canvas.height/4, '#27ae60');

// Draws random rocks
for (var i = 0; i < 100; i++) {
	let x = Math.random() * canvas.width + canvas.width/4;
	let y = Math.random() * 200 + canvas.height-(canvas.height/6);
	let size = Math.random() * 5;
	draw_circle(x, y, size,'grey');
}

// Draws Line down the middle of canvas
draw_line( canvas.width / 2 , 0, canvas.width / 2, canvas.height);

// Draws 10 clouds behind sun and moon
for(let i = 0 ; i < 20; i++){
	let x = Math.random() * canvas.width;
	let y = Math.random() *100 + 100;

	draw_clouds( x , y);
}

// Drawing Mountains
draw_triangle(canvas.width-750, canvas.height - (canvas.height/4), 700, '#7f8c8d');
draw_triangle(canvas.width-500, canvas.height - (canvas.height/4), 500, '#95a5a6');
draw_triangle(canvas.width-250, canvas.height - (canvas.height/4), 600, '#7f8c8d');
draw_triangle(canvas.width, canvas.height - (canvas.height/4), 800, '#95a5a6');

// Drawing the sun
draw_circle(100, 100, 100, 'yellow');

// Drawing the moon
draw_circle(canvas.width - 100, 100, 100, 'lightgrey');

// Drawing a pond
draw_circle(200, canvas.height, 250, '#3498db');
draw_circle(50, canvas.height-20, 250, '#3498db');

// Draws 10 random trees on right side of cartoon
for( let i =0; i < 10; i++){
	let x = Math.random() * canvas.width + canvas.width/4;
	let y = Math.random() * 200 + canvas.height-(canvas.height/6);
	draw_a_tree(x, y, 40, 300);
}

// Draws a home
draw_a_home(canvas.width/2 - 150, canvas.height-100, 300);

function draw_a_tree(x, y, width, height){

	// Draws trunks
	draw_line(x, y-height, x, y, 'brown', width);

	// Draws leaves
	draw_circle(x-width, y-height+width, width, 'green');
	draw_circle(x+width, y-height+width, width, 'green');
	draw_circle(x-width, y-height-width, width, 'green');
	draw_circle(x+width, y-height-width, width, 'green');

}

// Draws a simple three circle cloud
function draw_clouds(x, y, color = 'white'){
	draw_circle(x+50, y, 75, color);
	draw_circle(x-25, y, 60, color);
	draw_circle(x+125, y, 60, color);
}

function draw_a_home(x, y, size=100){

	// Roof
	draw_triangle(x + (size/2), y-size, size, color='red');

	// House
	draw_rectangle(x, y-size, size, size, '#cc8e35');

	// Draw Left Window
	draw_rectangle(x+(size/10), y-(size/1.5), size/4, size/4, 'white');

	// Draw window borders
	draw_line(x+(size/4.5), y-(size/1.5), x+(size/4.5), y-(size/2.4), color ='black', lineWidth = 2);
	draw_line(x+(size/10), y-(size/1.9), x+(size/2.8), y-(size/1.9), color ='black', lineWidth = 2);

	// Draws a door
	draw_rectangle(x+(size/2), y-(size/1.5), size/3, size/1.5, 'brown');

	ctx.fillStyle = 'black';
	ctx.font = (size/15)+'px Arial';
	ctx.fillText( 'Home Sweet Home', x + (size/5), y-size + (size/10));
}

// Function to draw a triangle
function draw_triangle(x, y, size=200, color='grey'){
	ctx.fillStyle = color;
	ctx.beginPath();
    ctx.moveTo(x, y-size);
    ctx.lineTo(x-(size/2), y);
    ctx.lineTo(x+(size/2), y);
    ctx.fill();
}

// Function to draw rectangle
function draw_rectangle(x, y, width, height, color='black'){
	ctx.fillStyle = color;
	ctx.fillRect(x, y, width, height);
}

// Function to draw circle
function draw_circle(x, y, size = 10, color = 'black'){

	ctx.beginPath();
	ctx.arc(x, y, size, 0, 2 * Math.PI, false);

	ctx.fillStyle = color;
	ctx.fill();

	ctx.lineWidth = 0;
    ctx.strokeStyle = color;
    ctx.stroke();

	ctx.stroke();
}

/**
 * Takes a start x position and start y position then draws a line to 
 * end X position and end y position
 */
function draw_line(startX, startY, endX, endY, color ='black', lineWidth = 1){

	ctx.lineWidth = lineWidth;
	ctx.strokeStyle = color;
	ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.lineTo(endX, endY);
    ctx.stroke();

}