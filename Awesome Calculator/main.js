const numInput = document.querySelector('#numInput');
const buttons = document.querySelectorAll('.button');
const buttonsCount = buttons.length
let i = 0

numInput.value = "0"

numInput.addEventListener('click', (e) => {
    numInput.style.width = "300px";
    buttons.forEach(button => button.style.background = "none")
});

numInput.addEventListener('mouseout', function() {
    numInput.style.width = "230px"    
});

for(let i = 0; i < buttonsCount; i++) {
    buttons[i].onclick = function() {

        buttons[i].style.transform = "scale(1.3)"
        buttons[i].style.background = "#CC4F43"
        buttons[i].style.opacity = "0.9"

        if(!(i == 0 || i == 1 || i == 2 || i == 18)) {
            numInput.value += buttons[i].value
        }
        if(i == 18) {
            numInput.value = eval(numInput.value)
        }
        if(i == 0) {
            numInput.value = numInput.value.slice(0, 0)
            buttons.forEach(button => button.style.background = "none")
        }
        if(i == 1) {
            numInput.value = "0"
            buttons.forEach(button => button.style.background = "none")
        }
        if(i == 2) {
            numInput.value = numInput.value.slice(0, numInput.value.length - 1)
        }
    }

    buttons[i].onmouseout = function() {
        buttons[i].style.transform = "scale(1)"
    }
}

