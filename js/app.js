const Typewriter = {

    isUpperCase: false,

    init: function() {

        const letters = document.querySelectorAll(".letter");
        for ( const letter of letters ) {
            letter.addEventListener("click", handleClickOnLetter);
        }

        const caracters = document.querySelectorAll(".other");
        for ( const caracter of caracters ) {
            caracter.addEventListener("click", handleClickOnCaracter);
        }

        const maj = document.querySelector('.maj');
        maj.addEventListener('click', upperCase);

        const eraser = document.querySelector('.backspace');
        eraser.addEventListener('click', handleEraser);

        const retour = document.querySelector('.return');
        retour.addEventListener("click", handleLineWrap)
    },
};


function handleClickOnLetter(event) {
    let letter = event.currentTarget;
    addLetter(letter.textContent);
    handleButtonActivation(letter);
};

function handleClickOnCaracter(event) {
    let caracter = event.currentTarget;
    addCaracter(caracter.textContent[0], caracter.querySelector('.secondary').textContent);
    handleButtonActivation(caracter);
};


function addLetter(letter) {
    let screen = document.querySelector('#text');
    Typewriter.isUpperCase ? screen.textContent += letter.toUpperCase() : screen.textContent += letter;
};

function addCaracter(caracter1, caracter2) {
    let screen = document.querySelector('#text');
    Typewriter.isUpperCase ? screen.textContent += caracter2 : screen.textContent += caracter1;
};


function upperCase() {
    Typewriter.isUpperCase = !Typewriter.isUpperCase;
    let maj = document.querySelector('.maj');
    maj.classList.toggle("on")
};

function handleEraser(event) {
    let screen = document.querySelector('#text');
    screen.textContent = screen.textContent.substring( 0, screen.textContent.length -1);
    handleButtonActivation(event.currentTarget);
};

function handleLineWrap(event) {
    let screen = document.querySelector('#text');
    screen.innerHTML += "\n";
    handleButtonActivation(event.currentTarget);
};

function handleButtonActivation(element) {
    element.classList.add('on');
    setTimeout(() => {
        element.classList.remove('on')
    }, 150);
};


document.addEventListener('DOMContentLoaded', Typewriter.init);