import { processRequest } from './helper.js';
import { showPokemon } from './poke_Fetch.js';
  
 let divContainer = document.getElementById("pokeContainer"); 
  
 function mostrarPokes(parm){  
    divContainer.innerHTML = '';
    if(parm != -1){
        let pokes = JSON.parse(parm).pokemon;
        pokes.forEach( (poke) => {
            showPokemon(poke.pokemon.name, card =>{ 
                divContainer.innerHTML += card;
            });  
        });      
    }
    else{
        divContainer.innerHTML = '<p>Ocurrió un error al recuperar los pokemones</p>';    
    }    
}

let pokeType = (type) => {
    return new Promise((resolve, reject) => { 
        processRequest(`https://pokeapi.co/api/v2/type/${type}`, (response) =>{
            if(response != -1){
                resolve(response);
            }
            else{
                reject(-1);
            }           
        });  
    });
}
   
$(document).on("click", ".type", function(){
    pokeType(this.id)
    .then(response =>{
        mostrarPokes(response);
    })
});
 
