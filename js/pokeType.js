 
 btnPokeType = document.getElementById("btnice"); 

console.log(btnPokeType); 

let pokeType = () => {
    return new Promise((resolver, reject) => {
        let xhrRequest = new XMLHttpRequest();

        xhrRequest.addEventListener("readystatechange", () =>{
            if(xhrRequest.readyState === 4){
                console.log(xhrRequest.status);
                if(xhrRequest.status === 200){
                    let pokes = xhrRequest.responseText; 
                }
            }
        })

        xhrRequest.open("GET", "https://pokeapi.co/api/v2/type/1");
        xhrRequest.send(null);
    });
}

pokeType()
.then(response =>{
    console.log(response.pokemon);
});

btnPokeType.addEventListener("click", () => {
    getType();
}) 

 
 
