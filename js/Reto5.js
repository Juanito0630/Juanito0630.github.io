let btncal = document.getElementById('btncal');
let result =document.querySelector('.re')
btncal.addEventListener('click', function (event) {
    event.preventDefault();
    let nombre = document.getElementById('nombre').value;
    let apellido = document.getElementById('apellido').value;
    let materia = document.getElementById('materia').value;

    if (nombre === '1' && apellido === '1' && materia === '1') {
        result.textContent = "La eleccion es correcta"
    } else if (nombre === '2' && apellido === '2' && materia === '2') {
        result.textContent = "La eleccion es correcta"
    } else if (nombre === '3' && apellido === '3' && materia === '3') {
        result.textContent = "La eleccion es correcta"
    } else if (nombre === '4' && apellido === '4' && materia === '4') {
        result.textContent = "La eleccion es correcta"
    } else if (nombre === '5' && apellido === '5' && materia === '5') {
        result.textContent = "La eleccion es correcta"
    } else if (nombre === '6' && apellido === '6' && materia === '6') {
        result.textContent = "La eleccion es correcta"
    } else if (nombre === '7' && apellido === '7' && materia === '7') {
        result.textContent = "La eleccion es correcta"
    } else {
        result.textContent = "La eleccion es incorrecta"
    }
});