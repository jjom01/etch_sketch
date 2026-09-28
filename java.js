const gridSize = document.getElementById('gridSize');
document.addEventListener('click', () =>{
    let userInput = prompt ("How big should we make this canvas?", "between 1-100");
    if ((userInput === null) || (userInput > 100) || (userInput < 1)) {
        prompt ("We cannot use that as a canvas size. Try again", "between 1-100");
    }
    else {
        return userInput;
    }
})

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('container');
    container.style.justifyContent = "center";
    container.style.alignItems = "center";
    container.style.display = "flex"
    container.style.flexWrap = "wrap"
    container.style.width = "640px"
    container.style.height = "640px"
    const fragment = document.createDocumentFragment();
    const NumberDivs = 256;
    for (let i = 1; i <= NumberDivs; i++){
        const newDiv = document.createElement("div");
        newDiv.className = "box"
        newDiv.style.height = "36px"
        newDiv.style.width = "36px"
        newDiv.style.border = "2px solid red"
        newDiv.textContent = `#${i}`
        newDiv.style.textAlign = "center"
        newDiv.addEventListener("mouseover", () => {
            newDiv.style.transitionDelay = "0s";
            newDiv.style.backgroundColor = "red";
        });

        newDiv.addEventListener("mouseout", () => {
            newDiv.style.transitionDelay = "1s";
            newDiv.style.backgroundColor = "";
        })
        fragment.appendChild(newDiv)
    }
    container.appendChild(fragment)
});