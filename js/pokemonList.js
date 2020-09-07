let divContainer = document.getElementById("pokeContainer"); 

async function createCard(pokemon){ 
    let urlImg = `https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png'` 
    let types = pokemon.types;
    let button = '<div class="cardtype">';
    types.forEach(type => {
        const name = type.type.name[0].toUpperCase() + type.type.name.slice(1);
        const pokeColor = colors.find(elm => elm.nombre == type.type.name);
        button +=  `<button id='${type.type.name}' class='type' style='background-color:${pokeColor.color}'>${name}</button>`;                  
    });
    button += `</div>`;  

    let pokeCard = `<div class='card'>` + 
                        `<div class='cardimg'><img src='${urlImg}' alt='Imagen no disponible'></div>` +
                        `<div class='cardinfo'>` +
                            `<div class='carddesc'>` +
                                `<h5 class='card-title'>${pokemon.id} - ${pokemon.name}</h5>` +
                            `</div>` +
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
    console.log("1");
    await getPokemonList(this.id); 
});
 
