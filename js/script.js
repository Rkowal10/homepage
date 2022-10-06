{
    const welcome = () => {
        console.log("Hej, to moja pierwsza strona, którą stworzyłem... na dodatek o sobie :)");
    }

    const backgroundToggle = () => {
        const bodyElement = document.querySelector(".js-body");
        const nextColorNameElement = document.querySelector(".js-nextColorName");
        bodyElement.classList.toggle("body--lighter");
        if (nextColorNameElement.innerText === "jasne") {
            nextColorNameElement.innerText = "ciemne";
        } else {
            nextColorNameElement.innerText = "jasne";
        }
    };

    const removePhotoClick = () => {
        const photoElement = document.querySelector(".js-image");
        const changeTextElement = document.querySelector(".js-changeText");
        photoElement.classList.toggle("photoRemove");
        if (changeTextElement.innerText === "Ukryj") {
            changeTextElement.innerText = "Pokaż";
        } else {
            changeTextElement.innerText = "Ukryj";
        }
    };

    const init = () => {
        welcome();

        const buttonElement = document.querySelector(".js-button");
        const changeButtonElement = document.querySelector(".js-changeBackgroundButton");
        
        buttonElement.addEventListener("click", removePhotoClick);

        changeButtonElement.addEventListener("click", backgroundToggle);
    }

    init();


}