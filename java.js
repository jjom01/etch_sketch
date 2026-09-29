const gridSize = document.getElementById('gridSize');
const container = document.getElementById('container');

document.addEventListener('click', () =>{
    let userInput = prompt ("How big should we make this canvas?", "between 1-100");
    if (userInput === null) return;
    size = parseInt (InputDeviceInfo, 10);
    message = "We cannot use that as a canvas size. Try again";
    
})

document.addEventListener('DOMContentLoaded', () => {
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