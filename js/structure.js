const content = document.querySelector('ul');
const section = document.querySelector('section')
const li = document.createElement('li');
const div = document.createElement('div')


function criarPoke(pokemon) {
    const tipos = pokemon.types.map((tipo) => tipo.type.name).join(' | ');
    
    const tiposForClass = pokemon.types[0].type.name;

    function capitalizeWords(string) {
        return string.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    }

    return `
        <li class="pokemons ${pokemon.name} ${tiposForClass}">
            <div><h4>${capitalizeWords(pokemon.name)}</h4></div>
            <div class="types">${capitalizeWords(tipos)}</div>
            <div>
                <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
            </div>
        </li>
    `;
}

const darkModeToggle = document.querySelector('.dark-mode-toggle');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    content.classList.toggle('dark-mode')
    section.classList.toggle('dark-mode')
});
