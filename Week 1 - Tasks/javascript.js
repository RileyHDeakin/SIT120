function display_success_msg() {
	document.getElementById("message").innerHTML = "The picture shows how to unlock classes";
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

