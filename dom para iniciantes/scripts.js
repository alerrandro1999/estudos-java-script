const href = window.location.href

console.log(href)


const h1selecionada = document.querySelector('h1')

const h1classes = h1selecionada.classList

h1selecionada.addEventListener('click', function () {
    console.log('clicou em ', h1classes);
})

window.navigator.language

window.innerWidth

