const container = document.getElementById("container");


function divMaker(){
    for (let i=0; i<256; i++){
    const squares = document.createElement("div");
    squares.classList.add("grid-square");
    container.appendChild(squares)
    }
};

divMaker();