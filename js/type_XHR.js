import { processRequest } from './helper.js';

let btnPokedex = document.getElementById("linkPokedex");
let divType = document.getElementById("pokeFiltro");
 
function showTypes(parm){  
    let typesHTML = '';
    if(parm != -1){
        let types = JSON.parse(parm).results;
        types.forEach( (type) => {
            let button = `<div class='box'>`+
                        `<button id='${type.name}' class='type'>${type.name}</button>` + 
                        `</div>`;
            typesHTML += button;
        }); 
    }
    else{
        typesHTML = '<p>Ocurrió un error al recuperar los tipos</p>';    
    }
    divType.innerHTML = typesHTML;
}
   
function getTypes(){  
    processRequest("https://pokeapi.co/api/v2/type/", (response) =>{
        showTypes(response);
    });  
}

btnPokedex.addEventListener("click", () => {
    getTypes();
})