
/*Javascript with the DOM

DOM stands for Document Object Model

DOM is a tree representation of our HTML document, 
making it easy for programming languages 
like Javascript to make changes on the document

Javscript can change the text, the css, atrributes
*/

/* Javascript changing text
These changes do not just occur, 
they occur when something happens, 
this is what we know as events 
e.g when a button is clicked,
when the moves over an element 

We use Javascript functions to attach 
changes when these events occurs 
*/
const light = document.getElementById("light");
const nolight = document.getElementById("nolight");

const switchOnButton = document.getElementById("switchOnButton");
const switchOffButton = document.getElementById("switchOffButton");

function switchOffLight() {
    light.style.display = "none";  // Hide light image
    nolight.style.display = "block"; // Show nolight image
    switchOffButton.innerHTML = "Light Off";
}

function switchOnLight() {
    nolight.style.display = "none"; // Hide nolight image
    light.style.display = "block";  // Show light image
    switchOnButton.innerHTML = "Light On";
}

// Attach event listeners to buttons
switchOnButton.addEventListener("click", switchOnLight);
switchOffButton.addEventListener("click", switchOffLight);
