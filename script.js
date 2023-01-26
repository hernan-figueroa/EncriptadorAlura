const entrada = document.getElementById('ingreseTexto');
const mensajeEncriptado = document.getElementById('mensajeEncriptado');



function btnEncriptar() {
    document.getElementById("contenido").style.display = "none";
    document.getElementById("copy").style.display = "flex";
    
    mensajeEncriptado.style.display = "flex";

    mensajeEncriptado.value =encriptar(entrada.value);
    entrada.value = "";
}


function btnDesencriptar() {
    mensajeEncriptado.value ="";
    mensajeEncriptado.value =desencriptar(entrada.value);
    entrada.value = "";
}

function encriptar(texto){
    texto = texto.toLowerCase();
    let matrizCodificacion= [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];

    for (let i = 0; i < matrizCodificacion.length; i++) {
        if(texto.includes(matrizCodificacion[i][0])){
            texto=texto.replaceAll(matrizCodificacion[i][0],matrizCodificacion[i][1]);
        }
        
    }
    return texto;
}

function desencriptar(texto){
    texto = texto.toLowerCase();
    let matrizCodificacion= [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];

    for (let i = 0; i < matrizCodificacion.length; i++) {
        if(texto.includes(matrizCodificacion[i][1])){
            texto=texto.replaceAll(matrizCodificacion[i][1],matrizCodificacion[i][0]);
        }
        
    }
    return texto;
}

function copy() {
    let copyText = document.querySelector("#mensajeEncriptado");
    copyText.select();
    document.execCommand("copy");
}
  
document.querySelector("#copy").addEventListener("click", copy);