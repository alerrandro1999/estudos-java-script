// const animais = document.getElementById('animais');

// const gridsection = document.getElementsByClassName('grid-section')

// const primeirali = document.querySelector('li')

// const primeiraul = document.querySelector('ul')

// const linkinternos = document.querySelector('[href^="#"]')

// const animaisimg = document.querySelectorAll('.animais img')

// const gridsectiohtml = document.getElementsByClassName('grid-section');
// const gridsectionode = document.querySelectorAll('.grid-section');

// console.log(gridsectiohtml);
// console.log(gridsectionode);

// gridsectionode.forEach(function(item, index) {
//     console.log(index);
// });

// const arrayGrid = Array.from(gridsectiohtml)

const img = document.querySelectorAll('img');
console.log(img);

const imagensAnimais = document.querySelectorAll('img[src^="img/imagem"]');
console.log(imagensAnimais);

const clinksInternos = document.querySelectorAll('[href^="#"]')
console.log(clinksInternos);

const animais = document.querySelector('.animais-descricao');
const h2animais = animais.querySelector('h2')
console.log(h2animais);

const paragrafos = document.querySelectorAll('p')

console.log(paragrafos[--paragrafos.length]);