var speak_btn = document.getElementById("speak-btn");
var speech_content = document.getElementById("speech-content");

var canvas = document.getElementById('img-canvas');

var ctx = canvas.getContext("2d");

var SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
var SpeechGrammarList = window.SpeechGrammarList || webkitSpeechGrammarList;
var SpeechRecognitionEvent = window.SpeechRecognitionEvent || webkitSpeechRecognitionEvent;

var recognition = new SpeechRecognition();

recognition.continuous = true;

// When user clicks button it triggers speak/stop speech functionality
speak_btn.addEventListener( 'click', function(){
	
	if (speak_btn.textContent == "Speak") {
		speak_btn.innerText = "Stop";
		speak_btn.classList.remove("btn-primary");
		speak_btn.classList.add("btn-danger");
		recognition.start();
	}else{
		speak_btn.innerText = "Speak";
		speak_btn.classList.remove("btn-danger");
		speak_btn.classList.add("btn-primary");
		recognition.stop();
		search_image(speech_content.textContent);
	}


} );

/**
 * Speech recognition api, when result is provided and parsed, adds text to #speech-content element
 */
recognition.addEventListener("result", function(e){

	let text = "";
	
	for( let i = 0 ; i < e.results.length; i++ ){
		text += e.results[i][0].transcript;
	}
	speech_content.innerText = text;

});

/**
 * This function searches for random images from pixabay and displays them on the canva or otherwise console logs error
 */
function search_image(search_text){

	let url = "https://pixabay.com/api/?key=27171523-2e5e4d655865673807ad2149b&q="+ encodeURI(search_text);

	fetch(url).then(function(response) {
	  return response.json();
	}).then(function(data) {

		if (data.hits && data.hits.length > 0 ) {

			let index = getRandomInt(1, data.hits.length-1);

			let image = new Image();

			image.src = data.hits[index].largeImageURL;

			image.onload = function () { 

				ctx.clearRect(0, 0, canvas.width, canvas.height);

				ctx.drawImage(image, 0, 0, canvas.width, canvas.height); 
			};

		}


	}).catch(function(data) {
		console.log('Error');
	});

}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
