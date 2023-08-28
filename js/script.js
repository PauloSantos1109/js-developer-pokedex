const controleApi = {
    range:0,
    limit:15
}

let isLoading = false;

window.addEventListener('scroll', () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

    if (scrollTop + clientHeight >= scrollHeight - 100 && !isLoading) {
        isLoading = true;
        
        controleApi.range += controleApi.limit;

        consumirApi();
    }
})


async function consumirApi() {
    
    isLoading = true;

    const url = `https://pokeapi.co/api/v2/pokemon/?offset=${controleApi.range}&limit=${controleApi.limit}`;

    const requisicao = await fetch(url);
    const retorno = await requisicao.json();
    const allPokes = retorno.results;

        
    allPokes.forEach(async (poke) => {
        const detalhes = await fetch(poke.url);
        const info = await detalhes.json();
        console.log(info)
        const pokemon = info;
        const htmlPokemon = criarPoke(pokemon);
        content.innerHTML += htmlPokemon;    
        
    });

    isLoading = false;  
}

consumirApi();

