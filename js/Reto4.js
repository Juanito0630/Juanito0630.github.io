triangulo=document.querySelector(".resultado")

let btncal=document.getElementById("btncal")
btncal.addEventListener("click",function Calculo(x) {
    x.preventDefault()

    let a=document.getElementById("Valor 1").value
    let b=document.getElementById("Valor 2").value
    let c=document.getElementById("Valor 3").value

    if(a==b && b==c) {
        alert("El triangulo es Equilatero ")
        triangulo=equilatero+1;
    } else if(a==b || b==c || a==c) {
        alert("El triangulo es Isosceles ")
        triangulo=isosceles+1;
    } else { // Si es siferente
        alert("El triangulo es escaleno ")
        triangulo=escaleno+1;
    }
})