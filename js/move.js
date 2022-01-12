alert("Hello! I am an alert box!!");

const circle = document.querySelector(".circle");
let xAxis = 0;
let yAxis = 0;

function control(e) {

    switch(e.key) {
        case 'ArrowLeft':
            console.log("Pressed Left");
            xAxis -= 50;
            circle.style.left = xAxis + 'px';
            break;
        case 'ArrowRight':
            console.log("Pressed Right");
            xAxis += 50;
            circle.style.left = xAxis + 'px';
            break;
        case 'ArrowUp':
            console.log("Pressed Up");
            yAxis -= 50;
            circle.style.top = yAxis + 'px';
            break;
        case 'ArrowDown':
            console.log("Pressed Down");
            yAxis += 50;
            circle.style.top = yAxis + 'px';
            break;
        default: console.log("key not recognise");
    }

}

document.addEventListener("keydown", control);