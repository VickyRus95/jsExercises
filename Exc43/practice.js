window.onload = function (){
    var fotos = document.querySelector ("div")
    fotos.addEventListener("click",function(e){
        if(e.target.targetName==="img"){
            var fondoNegro = document.createElement ("div")
            fondoNegro.id= "overlay";
            document.body.appendChild(fondoNegro);
            fondoNegro.style.position = "absolute";
            fondoNegro.style.top = 0;
            fondoNegro.style.backgroundColor = "rgba (0,0,0,0,5)";
            fondoNegro.style.cursor = "pointer";
            fondoNegro.style.width = window.innerWidth + "px";
            fondoNegro.style.height = window.innerHeight + "px";
            fondoNegro.style.top = window.pageYOffset + "px";
            fondoNegro.style.left = window.pageXOffset + "px";
        
        }else {
            console.log ("No pulsó una imagen")
        }

    },false);


}
