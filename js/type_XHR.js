let btnPokedex = document.getElementById("linkPokedex");
let divTipo = document.getElementById("divFiltro");
let Tipos = [];
 
function mostrarTipos(tipos){ 
    let tiposHTML = '';
    tipos.forEach( (tipo) => {
        let button = `<div class='box'>`+
                     `<button id='btn${tipo.name}' class='type ${tipo.name}'>${tipo.name}</button>` + 
                     `</div>`;
        tiposHTML += button;
    }); 
    divTipo.innerHTML = tiposHTML;
}

function getType(){
    let xhrTypes = new XMLHttpRequest();
    xhrTypes.addEventListener("readystatechange", () =>{
        if(xhrTypes.readyState === 4){
            if(xhrTypes.status === 200){
                let types = JSON.parse(xhrTypes.responseText);
                mostrarTipos(types.results)
            }
        }
    }) 
    xhrTypes.open("GET", "https://pokeapi.co/api/v2/type/");
    xhrTypes.send(null);
} 
   
btnPokedex.addEventListener("click", () => {
    getType();
})