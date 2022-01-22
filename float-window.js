let button = document.getElementByClassName('button-next');
let fadeout = document.getElementByClassName('alert');
button.addEventListener('click', function MyClick() {
    fadeout.style.display = "none"
})
