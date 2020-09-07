let btnTipos = document.getElementById("linkTipos");
let btnGeneraciones = document.getElementById("linkGeneraciones");
let divFilters = document.getElementById("pokeFiltro");
 
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
}

btnTipos.addEventListener("click", async () => {
    const types = await proccessRequestAsync(urlType);
    showFilters(types.results)
})

 