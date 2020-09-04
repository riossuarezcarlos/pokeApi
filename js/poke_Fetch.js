import { processRequest } from './helper.js';
export function showPokemon(pokemon, callback){  
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`) 
    .then(response =>{
        return  response.json();
    })
    .then(poke => {  
        let urlImg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${poke.id}.png'`
        let  pokeCard = `<div class='card' style='width: 18rem;'>` + 
                        `<img class='card-img-top' src='${urlImg}' alt='Card image cap'></div>` +
                        `<div class='card-body'>` +
                        `<h5 class='card-title'>${poke.id} - ${poke.name}</h5>` +
                        `</div>` +
                        `</div>`; 

        callback(pokeCard);      
    })
}  