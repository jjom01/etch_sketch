document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('#container');
    const fragment = document.createDocumentFragment();
    const NumberDivs = 256;
    for (let i = 1; i <= NumberDivs; i++){
        const newDiv = document.createElement("div");
        newDiv.className = "box"
        newDiv.style.border = "2px solid red"
        newDiv.textContent = "#${i}"
        fragment.appendChild(newDiv)
    }
    container.appendChild(fragment)
});