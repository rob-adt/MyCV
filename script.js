const buttons = document.querySelectorAll("#Navbutt");
const hoverSound = document.getElementById("hoverSound");

buttons.forEach((button) => {
    button.addEventListener("mouseenter", () => {
        hoverSound.currentTime = 0;
        hoverSound.play()
    });
});