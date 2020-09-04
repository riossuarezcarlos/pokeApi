export function processRequest(url, callback){  
    let xhrRequest = new XMLHttpRequest();
    xhrRequest.addEventListener("readystatechange", () =>{
        if(xhrRequest.readyState === 4){
            if(xhrRequest.status === 200){  
                callback(xhrRequest.responseText);
            }else{
                callback(-1);
            }
        }
    })  
    xhrRequest.open("GET", url)
    xhrRequest.send(null);
}