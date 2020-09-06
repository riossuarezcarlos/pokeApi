let divContainer = document.getElementById("pokeContainer"); 

async function createCard(pokemon){ 
    let urlImg = `https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png'` 
    let types = pokemon.types;
    let button = '<div>';
    types.forEach(type => {
        const name = type.type.name[0].toUpperCase() + type.type.name.slice(1);
        button +=  `<button id='${type.type.name}' class='type'>${name}</button>`;                  
    });
    button += `</div>`; 

    console.log(button);

    let pokeCard = `<div class='hijo'>` + 
                `<img src='${urlImg}' alt='Imagen no disponible'>` +
                `<div>` +
                    `<h5 class='card-title'>${pokemon.id} - ${pokemon.name}</h5>` +
                    button +
                `</div>` +
            `</div>`; 
    return pokeCard;
}

async function getPokemonList(id){
    let pokeCard = '';
    const pokemonList = await proccessRequestAsync(urlType + id); 

    for (let i = 0; i < pokemonList.pokemon.length; i++) {
        const pokemon = await proccessRequestAsync(urlPokemon + pokemonList.pokemon[i].pokemon.name);
        pokeCard += await createCard(pokemon);
    }
    
    divContainer.innerHTML = pokeCard;
}
 

$(document).on("click", ".type", async function(){
    //No se usa arrow function porque no tiene this
    await getPokemonList(this.id); 
});
 
