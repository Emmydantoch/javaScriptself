const paragraph = document.getElementById("text");
const hideButton = document.getElementById("hidebutton");
const showButton = document.getElementById("showbutton");

function hideText() {
    paragraph.style.display = "none";  // Hide paragraph
    hideButton.style.display = "none"; // Hide "Hide Text" button
    showButton.style.display = "block"; // Show "Show Text" button
}

function showText() {
    paragraph.style.display = "block"; // Show paragraph
    showButton.style.display = "none"; // Hide "Show Text" button
    hideButton.style.display = "block"; // Show "Hide Text" button
}

// Attach event listeners
hideButton.addEventListener("click", hideText);
showButton.addEventListener("click", showText);
