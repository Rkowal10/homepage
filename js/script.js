function welcome () {
    console.log("Hej, to moja pierwsza strona, którą stworzyłem... na dodatek o sobie :)");
}

welcome();

let buttonElement = document.querySelector(".js-button");
let photoElement = document.querySelector(".js-image");
let changeButtonElement = document.querySelector(".js-changeBackgroundButton");
let bodyElement = document.querySelector(".js-body");
let nextColorNameElement = document.querySelector(".js-nextColorName");

buttonElement.addEventListener("click", () => {
    photoElement.classList.toggle("photoRemove");
    if (buttonElement.innerText === "Ukryj zdjęcie") {
        buttonElement.innerText = "Pokaż zdjęcie";
    } else {
        buttonElement.innerText = "Ukryj zdjęcie";
    }
});

changeButtonElement.addEventListener("click", () => {
    bodyElement.classList.toggle("body--lighter");
    if (nextColorNameElement.innerText === "jasne") {
        nextColorNameElement.innerText = "ciemne";
    } else {
        nextColorNameElement.innerText = "jasne";
    }
});