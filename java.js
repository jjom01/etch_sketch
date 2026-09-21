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
        fragment.appendChild(newDiv)
    }
    container.appendChild(fragment)
});