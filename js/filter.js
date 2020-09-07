let btnTipos = document.getElementById("linkTipos");
let btnInicio = document.getElementById("linkInicio");
let btnGeneraciones = document.getElementById("linkGeneraciones");
let divFilters = document.getElementById("pokeFiltro");
let divContainer = document.getElementById("pokeContainer");  
let divHome = document.getElementById("home");  
 
function showFilters(filters){  
    let filtersHTML = '';
    filters.forEach( (filter) => {
        const pokeColor = colors.find(elm => elm.nombre == filter.name);
        const name = filter.name[0].toUpperCase() + filter.name.slice(1);
        let button = `<div class='box'>`+
                    `<button id='${filter.name}' class='type' style='background-color:${pokeColor.color}'>${name}</button>` + 
                    `</div>`;
        filtersHTML += button;
    }); 
    divFilters.innerHTML = filtersHTML;
    divHome.innerHTML = '';
}


function showHome(){
    let home = `<div class='home'>`+
                `<img src='${urlLogo}' alt='Imagen no disponible'>` + 
                `<h3>The RESTful Pokémon API</h3>` + 
                `<h2>Serving over 60,000,000 API calls each month!</h2>` + 
               `</div>`;
    divHome.innerHTML = home;
    divFilters.innerHTML = '';
}


btnTipos.addEventListener("click", async () => {
    const types = await proccessRequestAsync(urlType);
    showFilters(types.results)
})

btnInicio.addEventListener("click",  () => { 
    showHome();
})
 
document.addEventListener("DOMContentLoaded",  () => { 
    showHome();
})
 