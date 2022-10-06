{
    const welcome = () => {
        console.log("Hej, to moja pierwsza strona, którą stworzyłem... na dodatek o sobie :)");
    }
    
    const onChangeBackgroundClick = () => {
        bodyElement.classList.toggle("body--lighter");
        if (nextColorNameElement.innerText === "jasne") {
            nextColorNameElement.innerText = "ciemne";
        } else {
            nextColorNameElement.innerText = "jasne";
        }
    };
    
    const removePhotoClick = () => {
        photoElement.classList.toggle("photoRemove");
        if (buttonElement.innerText === "Ukryj zdjęcie") {
            buttonElement.innerText = "Pokaż zdjęcie";
        } else {
            buttonElement.innerText = "Ukryj zdjęcie";
        }
    };
    
    welcome();
    
    const buttonElement = document.querySelector(".js-button");
    const photoElement = document.querySelector(".js-image");
    const changeButtonElement = document.querySelector(".js-changeBackgroundButton");
    const bodyElement = document.querySelector(".js-body");
    const nextColorNameElement = document.querySelector(".js-nextColorName");
    
    buttonElement.addEventListener("click", removePhotoClick);
    
    changeButtonElement.addEventListener("click", onChangeBackgroundClick);
}