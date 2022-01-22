let fadeout = document.getElementByClassName('alert');
let button = document.getElementByClassName('button-next');
button.addEventListener('click', function MyClick() {
    fadeout.style.display = "none"
})
