const gridSize = document.getElementById('gridSize');
const container = document.getElementById('container');

function buildGrid(size){
    container.innerHTML = ""
    container.style.display = "grid"
    container.style.alignContent = "center"
    /*container.style.borderRadius = "100px"(might fix this later lol)*/
    container.style.border = "1px solid red"
    container.style.width = "640px"
    container.style.height = "640px"
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`

    const fragment = document.createDocumentFragment();
    for (let i = 1; i <= size * size; i++){
        const box = document.createElement("div");
        box.className = "box"
        box.style.boxSizing = "border-box"
        box.style.border = "1px solid red"
        box.style.textAlign = "center"

        box.addEventListener("mouseover", () => {
            box.style.transitionDelay = "0s";
            box.style.backgroundColor = "red";
        });
        box.addEventListener("mouseout", () => {
            box.style.transitionDelay = "1s";
            box.style.backgroundColor = "";
        })
        fragment.appendChild(box);
    }
    container.appendChild(fragment);
};

gridSize.addEventListener('click', () =>{
    let size;
    let message = "How big should we make this canvas?"
    do{ 
        const input = prompt(message, "between 1 and 100");
        if (input === null) return;
        size = parseInt (input, 10);
        message = "We cannot use that as a canvas size. Try again";
    }
    while(isNaN(size) || size < 1 || size > 100)

    buildGrid(size)
})

container.addEventListener("mouseover", (e) => {
    if (e.target.classList.contains("box")) e.target.style.backgroundColor = "red";
});