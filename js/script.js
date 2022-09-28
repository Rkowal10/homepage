console.log("Hej, to moja pierwsza strona, którą stworzyłem... na dodatek o sobie :)");

let buttonElement = document.querySelector(".js-button");
let photoElement = document.querySelector(".js-image");
buttonElement.addEventListener("click", () => {
    photoElement.classList.toggle("photoRemove");
    if (buttonElement.innerText === "Ukryj zdjęcie") {
        buttonElement.innerText = "Pokaż zdjęcie";
    } else {
        buttonElement.innerText = "Ukryj zdjęcie";
    }
});