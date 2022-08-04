function display_success_msg() {
	 document.getElementById("message").innerHTML = "this is a message";
}


function MouseDown() {
	document.getElementById("paragraph_1").style.color = "pink";
}

function Mouseup() {
	document.getElementById("paragraph_1").style.color = "black";
	}
	
	
function popup() {
	let text;
  let person = prompt("Please enter your name:");
  if (person == null || person == "") {
    text = "cancelled";
  } else {
    text = "Hello " + person;
  }
  document.getElementById("text_stuff").innerHTML = text;
}