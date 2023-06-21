function calcularAreaCirculo() {

  var radio = parseFloat(prompt("Ingresa el radio del circulo:"));
  
  if (!isNaN(radio) && radio > 0) {

    var area = Math.PI * Math.pow(radio, 2);
    alert("El area del círculo es: " + area.toFixed(2));

  } else {

    alert("Ingresa un valor valido para el radio del circulo.");
  
  }

}

function calcularPerimetroCirculo() {

  var radio = parseFloat(prompt("Ingresa el radio del circulo:"));
  
  if (!isNaN(radio) && radio > 0) {

    var perimetro = 2 * Math.PI * radio;
    alert("El perimetro del circulo es: " + perimetro.toFixed(2));
  
  } else {

    alert("Ingresa el radio de el circulo");
  
  }

}

function calcularAreaCuadrado() {

  var lado = parseFloat(prompt("Ingresa la longitud del lado del cuadrado:"));
  
  if (!isNaN(lado) && lado > 0) {

    var area = Math.pow(lado, 2);
    alert("El á¿area del cuadrado es: " + area.toFixed(2));
  
  } else {

      alert("Ingresa un valor válido para la longitud del lado del cuadrado.");
  
  }

}

function calcularPerimetroCuadrado() {

  var lado = parseFloat(prompt("Ingresa la longitud del lado del cuadrado:"));
  
  if (!isNaN(lado) && lado > 0) {

    var perimetro = 4 * lado;
    alert("El perimetro del cuadrado es: " + perimetro.toFixed(2));
  
  } else {
    alert("Ingresa un valor para el lado del cuadrado");
  }
}
function calcularAreaTriangulo() {

  var base = parseFloat(prompt("Ingresa la base del triangulo:"));
  var altura = parseFloat(prompt("Ingresa la altura del triangulo:"));
  
  if (!isNaN(base) && !isNaN(altura) && base > 0 && altura > 0) {

    var area = (base * altura) / 2;
    alert("El area del triangulo es: " + area.toFixed(2));
  
  } else {

    alert("Debes ingresar valores validos para la base y la altura de el triangulo");
  
  }

}

function calcularPerimetroTriangulo() {

  var lado1 = parseFloat(prompt("Ingresa la longitud del primer lado del triangulo:"));
  var lado2 = parseFloat(prompt("Ingresa la longitud del segundo lado del triangulo:"));
  var lado3 = parseFloat(prompt("Ingresa la longitud del tercer lado del triangulo:"));
  
  if (!isNaN(lado1) && !isNaN(lado2) && !isNaN(lado3) && lado1 > 0 && lado2 > 0 && lado3 > 0) {

    var perimetro = lado1 + lado2 + lado3;
    alert("El perimetro del triangulo es: " + perimetro.toFixed(2));
  
  } else {

    alert("Ingresa los valores para los lados del triangulo");
  
  }

}

function calcularAreaRectangulo() {

  var base = parseFloat(prompt("Ingresa la base del rectangulo:"));
  var altura = parseFloat(prompt("Ingresa la altura del rectangulo:"));
  
  if (!isNaN(base) && !isNaN(altura) && base > 0 && altura > 0) {

    var area = base * altura;

    alert("El area del rectangulo es: " + area.toFixed(2));

  } else {

    alert("Debes ingresar valores validos para la base y la altura de el rectangulo");
  
  }

}

function calcularPerimetroRectangulo() {

  var base = parseFloat(prompt("Ingresa la base del rectangulo:"));
  var altura = parseFloat(prompt("Ingresa la altura del rectangulo:"));
  
  if (!isNaN(base) && !isNaN(altura) && base > 0 && altura > 0) {

      var perimetro = 2 * (base + altura);

    alert("El perimetro del rectangulo es: " + perimetro.toFixed(2));
  
  } else {

    alert("Debes ingresar valores validos para la base y la altura de el rectangulo");
  
  }

}