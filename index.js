let h1 = document.querySelector("h1");
let number = document.querySelector(".number");
let decrease = document.querySelector(".btn-decrease");
let increase = document.querySelector(".btn-increase");
let reset = document.querySelector(".btn-reset");
let radomColor = ["tomato", "gray", "doggerblue", "green", "black"];

setInterval(randomColorChanging, 50);
function randomColorChanging() {
    let index = Math.floor(Math.random() * radomColor.length);
    h1.style.color = radomColor[index];
}
decrease.addEventListener("click", changeNumber);
increase.addEventListener("click", changeNumber);
reset.addEventListener("click", changeNumber);
function changeColor() {
    if (Number(number.textContent) == 0) {
        number.style.color = "#102A42";
    } else if (Number(number.textContent) < 0) {
        number.style.color = "red";
    } else if (Number(number.textContent) > 0) {
        number.style.color = "green";
    }
}
function changeNumber(e) {
    if (e.type == "click") {
        // let classIndex=e.target.classList.length-1;
        if (Array.from(e.target.classList).includes("btn-decrease")) {
            number.textContent = Number(number.textContent) - 1;
            changeColor();
        } else if (Array.from(e.target.classList).includes("btn-increase")) {
            number.textContent = Number(number.textContent) + 1;
            changeColor();
        } else if (Array.from(e.target.classList).includes("btn-reset")) {
            number.textContent = 0;
            number.style.color = "#102A42";
        }
    }
}
