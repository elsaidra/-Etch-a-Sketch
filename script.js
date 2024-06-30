 function newColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let color = `rgb(${r},${g},${b})`;
    return color;
    
}


const sliderBar = document.querySelector('.sliderBar');
const output = document.querySelector(".output");
const grid = document.querySelector('#grid');

output.innerHTML = sliderBar.value


sliderBar.oninput = function () {
    output.innerHTML = this.value
    createGrid(this.value); 
}

function createGrid(n) {
    // Clear previous grid
    grid.innerHTML = '';

    grid.style.display = 'flex'
    grid.style.flexWrap = 'wrap'; 

    const gridSize = grid.clientWidth / n;

    for (let i = 0; i < n * n; i++) {
     const gridElement = document.createElement('div');
     gridElement.classList.add('gridElement');
     gridElement.style.flex = `1 0 ${gridSize}px`;
     gridElement.style.height = `${gridSize}px`; 

     gridElement.addEventListener("mouseenter", function() {
            gridElement.style.background = newColor();
        });
     gridElement.addEventListener("mouseleave", function() {
            gridElement.style.background = newColor();
        });
        grid.appendChild(gridElement);
     
        
    }
}

createGrid(sliderBar.value);






