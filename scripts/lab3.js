var title_input = document.getElementById('notes-title');
var text_textarea = document.getElementById('notes-text');

restore_saved_notes();

/**
 * Saves user text areanotes 
 */
function save_notes(){

	let title = title_input.value;
	let text = text_textarea.value;

	// Sets title and text
	localStorage.setItem("notes_title", title);
	localStorage.setItem("notes_text", text);
}

/**
 * Restores saved notes from localStorage and updates text area and input field
 */
function restore_saved_notes(){
	title_input.value = localStorage.getItem("notes_title");
	text_textarea.value = localStorage.getItem("notes_text");
}

/**
 * Clears text area and input field
 */
function clear_notes(){

	// Clears input/textarea fields
	title_input.value = '';	
	text_textarea.value = '';	

	// Overwrites localStorage variables to be empty
	localStorage.setItem("notes_title", "");
	localStorage.setItem("notes_text", "");
}