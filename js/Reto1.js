result=document.querySelector(".resultado")

let btncal=document.getElementById("btncal")
btncal.addEventListener("click",function Realizar(e){
    e.preventDefault()
    let palabra=document.getElementById("palabra").value
    let opcion=parseInt(document.getElementById("opcion").value)

    if (opcion==1){
        var longitud = palabra.length;
        alert("La longitud de la palabra Ingresasda es: "+longitud)
    }else if (opcion==2){
        var mayusculas = palabra.toUpperCase()
        alert("La palabra en Mayusculas es: "+mayusculas)
    }else if (opcion==3){
        var minusculas = palabra.toLowerCase()
        alert("La palabra en Minusculas es: "+minusculas)
    }else if (opcion==4){
        var primeraLet = palabra.charAt(0)
        alert("La primera Letra de la palabra es: "+primeraLet)
    }
})