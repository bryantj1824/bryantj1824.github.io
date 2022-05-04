var canvas = document.getElementById('main-canvas');

// Automatically setting width according to window dimensions
canvas.width 	= window.innerWidth;
canvas.height  	= window.innerHeight;

var ctx = canvas.getContext('2d');

// Sets background color
ctx.fillStyle = "lightblue";

// Path to images of numbers
let number_images_path = '../Assets/images/Numbers/';

/**
 * number_images will associate each number image source with an index
 * 
 * Example:
 * number_images[0] will reference the image source for number 0
 * number_images[1] will reference the image source for number 1
 * and so on
 * 
 * Note: Images must be saved in following format: 
 * number-1.png, number-2.png, number-3.png etc...
 * and must be placed in image path defined in variable number_images_path
 */
let number_images = {};

// Populates number_images object
for( let i = 0; i < 10; i++ ){
	number_images[i] = number_images_path + 'number-'+i+'.png';
}

/**
 * Will start the number counter and stop at max_num
 * if max_num is omitted then it will stop at 10 by default
 */
function start_counter( max_num = 10){

	let number = 0;
	
	let the_interval = setInterval(function(){

		drawNumber(number);
		number++;

		// Will stop drawing numbers after 10
		if (number > max_num) { 
			clearInterval(the_interval); 
		}

	}, 500);

}

/**
 * Draws number in center of canvas
 * 
 * @param  int number - A number ( 0 - 9) to draw in center of screen 
 * @param  number timeout - defer image draw in milleseconds
 * 
 */
function drawNumber(number){

	// Clears canvas
	ctx.fillRect(0, 0, canvas.width, canvas.height);

	let image_width = 300;
	let image_height = 300;
	let number_string = number.toString();
	let digit_count = number_string.length;

	// Gets the vertical center of the canvas 
	// then subtracts half of the height of an image 
	// In order to place the image at the center
	let y = canvas.height/2 - (image_height/2);

	let x = 0;

	/**
	 * If number is a single digit we set the x starting point
	 * to be center of canvas minus half of the image width
	 * to place digit at center
	 *
	 * If the number has more then one digit we calculate 
	 * the x starting point to be the center of the canvas 
	 * minuse half of the combined width of all digits
	 */
	if (digit_count > 1) { 
		x = canvas.width/2 - ((image_width*digit_count)/2);
	}else{
		x = canvas.width/2 - (image_width/2);
	}

	for(let i = 0; i < digit_count; i++){

		let digit = number_string[i];

		let image = new Image();

		image.src = number_images[digit];

		image.onload = function(){
			// Draws number in center
			ctx.drawImage(image, x+(i*image_width), y, image_width, image_height);
		}

	}

};