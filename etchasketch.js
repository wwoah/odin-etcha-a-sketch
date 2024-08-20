//Main Section
//query container for squares to reside, then loop through how many squares are needed and render them
let container = document.querySelector(".grid-container");

//We want to generate (16 x 16) so 256 squares
for(let i = 0; i < 256; i++){
    let div = document.createElement("div");
    div.classList.add("grid-box");
    div.addEventListener("mouseover", () =>{
        div.style = "background-color: black;";
    });
    container.appendChild(div);
}

let button = document.querySelector("button");

button.addEventListener("click", () => {
    let newGridSize = 101;
    while(newGridSize > 100){
        newGridSize = prompt("Select a size for the new grid. MUST be <= 100px");
    }
    console.log(newGridSize);

    //Delete current grid.
    let grid = document.querySelectorAll(".grid-box");
    grid.forEach(box => box.remove());
 
    //Rerender new grid size
    for(let i = 0; i < newGridSize*2; i++){
        let div = document.createElement("div");
        div.classList.add("grid-box");
        div.addEventListener("mouseover", () =>{
            div.style = "background-color: black;";
        });
        container.appendChild(div);
    }
});
