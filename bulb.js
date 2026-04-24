
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
