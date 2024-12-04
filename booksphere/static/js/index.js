function mostrarAcercaDe(){
    var contenido = document.getElementById("acerca-de-nosotros");
    if(contenido.style.display === "none" || contenido.style.display === ""){
        contenido.style.display = "block";
        setTimeout(function() {
            contenido.classList.add("show");
        }, 10);
    }else{
        contenido.classList.remove("show"); // Retirar la animación de aparición
        setTimeout(function() {
            contenido.style.display = "none";  // Ocultar el contenido después de la animación
        }, 500);
    }
}

// uso del agente

var agente = navigator.userAgent.toLowerCase()

document.getElementById("linkDescarga").style.display = 'none';
document.getElementById("qrCode").style.display = 'none';


if(agente.includes('iphone') || agente.includes("android")){
    document.getElementById('linkDescarga').style.display = 'inline-block'
}else{
    document.getElementById("qrCode").style.display = "block";
}