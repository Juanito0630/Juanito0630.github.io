resultado=document.querySelector(".resultado")

let btncal=document.getElementById("btncal")
btncal.addEventListener("click",function Calculo(x) {
    x.preventDefault()

    let grados=parseFloat(document.getElementById("Grados").value)
    let op1=document.getElementById("Opcion 1").value
    let op2=document.getElementById("Opcion 2").value

    if (op1==1 && op2==2) {
        alert("Pasar de Farenheit a Centigrados")
        var resultado = (grados - 32)*5/9
        alert("El resultado de la conversion es: "+resultado)
    }else if (op1==2 && op2==1) {
        alert("Pasar de Centigrados a Farenheit")
        var resultado = (grados * 5/9)+ 32
        alert("El resultado de la conversion es: "+resultado)
    }else if (op1==1 && op2==3) {
        alert("Pasar de Farenheit a Kelvin")
        var resultado = (5/9 (grados - 32)+ 273.15)
        alert("El resultado de la conversion es: "+resultado)
    }else if (op1==3 && op2==1) {
        alert("Pasar de Centigrados a Farenheit")
        var resultado = (1.8(grados - 273.15) + 32)
        alert("El resultado de la conversion es: "+resultado)
    }else if (op1==2 && op2==3) {
        alert("Pasar de Centigrados a Kelvin")
        var resultado = (grados + 273.15)
        alert("El resultado de la conversion es: "+resultado)
    }else if (op1==3 && op2==2) {
        alert("Pasar de Kelvin a Centigrados")
        var resultado =  (grados - 273.15)
        alert("El resultado de la conversion es: "+resultado)
    }else{
        alert("Se ha producido un error UwU")
    }
})