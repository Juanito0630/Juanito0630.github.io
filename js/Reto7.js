let btncal = document.getElementById('btn_sccss1');
let result =document.querySelector('.re');
let btngroup = document.getElementById('btn-group');

//////////////////////////////////////////////////////////////////////////////////////

const openEls = document.querySelectorAll("[data-open]");
const closeEls = document.querySelectorAll("[data-close]");
const isVisible = "is-visible";

for (const el of openEls) {
  el.addEventListener("click", function() {
    const modalId = this.dataset.open;
    document.getElementById(modalId).classList.add(isVisible);
  });
}

for (const el of closeEls) {
  el.addEventListener("click", function() {
    this.parentElement.parentElement.parentElement.classList.remove(isVisible);
  });
}

document.addEventListener("click", e => {
  if (e.target == document.querySelector(".modal.is-visible")) {
    document.querySelector(".modal.is-visible").classList.remove(isVisible);
  }
});

document.addEventListener("keyup", e => {
  // if we press the ESC
  if (e.key == "Escape" && document.querySelector(".modal.is-visible")) {
    document.querySelector(".modal.is-visible").classList.remove(isVisible);
  }
});

//////////////////////////////////////////////////////////////////////////////////////

// Reglas de validacion

const number=/[0-9]{1,15}/
const text=/[a-z A-ZáÁ-úÚ]{2,50}/

// Elementos que se alteraran
const form=document.getElementById("frmvalidacion")

const no=form.no.value

const f1=document.querySelector("#inputNumDoc .feedback")

form.no.addEventListener('input',e=>{
  e.preventDefault()

  //console.log("Se esta escribiendo en el input")
  if (number.test(e.target.value)) {
    form.no.setAttribute("class","success")
    f1.style.visibility='hidden'
    f1.style.opacity='0'
    flag=true
  } else {
    form.no.setAttribute("class","error")
    f1.style.visibility='visible'
    f1.style.opacity='1'
    f1.textContent="Solo puede digitar un caracter minimo 1 maximo 15"
    flag=false
  }
})

//////////////////////////////////////////////////////////////////////////////////////

// Reglas de validacion

// Elementos que se alteraran

const nombre=form.nombre.value

const f2=document.querySelector("#inputNombre .feedback")

form.nombre.addEventListener('input',e=>{
  e.preventDefault()

  //console.log("Se esta escribiendo en el input")
  if (text.test(e.target.value)) {
    form.nombre.setAttribute("class","success")
    f2.style.visibility='hidden'
    f2.style.opacity='0'
    flag=true
  } else {
    form.nombre.setAttribute("class","error")
    f2.style.visibility='visible'
    f2.style.opacity='1'
    f2.textContent="Solo puede digitar caracteres tipo texto minimo 2 maximo 50"
    flag=false
  }
})

//////////////////////////////////////////////////////////////////////////////////////

// Reglas de validacion

// Elementos que se alteraran

const apellido=form.apellido.value

const f3=document.querySelector("#inputApellido .feedback")

form.apellido.addEventListener('input',e=>{
  e.preventDefault()

  //console.log("Se esta escribiendo en el input")
  if (text.test(e.target.value)) {
    form.apellido.setAttribute("class","success")
    f3.style.visibility='hidden'
    f3.style.opacity='0'
    flag=true
  } else {
    form.apellido.setAttribute("class","error")
    f3.style.visibility='visible'
    f3.style.opacity='1'
    f3.textContent="Solo puede digitar caracteres tipo texto minimo 2 maximo 50"
    flag=false
  }
})

///////////////////////////////////////////////////////////////////////////////////////

// Reglas de validacion

// Elementos que se alteraran

const nac=form.nac.value

const f4=document.querySelector("#inputDate .feedback")

form.nac.addEventListener('input',e=>{
  e.preventDefault()

  const fechalim=new Date('01-01-2002')
  const nac=document.getElementById('nac').value
  let fechaNac=new Date(nac)

  console.log(fechalim)
  console.log(fechaNac)

  //console.log("Se esta escribiendo en el input")
  if (fechalim> fechaNac) {
    form.nac.setAttribute("class","success")
    f4.style.visibility='hidden'
    f4.style.opacity='0'
    flag=true
  } else {
    form.nac.setAttribute("class","error")
    f4.style.visibility='visible'
    f4.style.opacity='1'
    f4.textContent="La fecha debe ser antes del 2002"
    flag=false
  }
})

///////////////////////////////////////////////////////////////////////////////////////

// Reglas de validacion

const dom=/^[a-z A-ZáÁ-úÚ]+@misena\.edu\.co$/

// Elementos que se alteraran

const email=form.email.value

const f5=document.querySelector("#inputEmail .feedback")

form.email.addEventListener('input',e=>{
  e.preventDefault()

  //console.log("Se esta escribiendo en el input")
  if (dom.test(e.target.value)) {
    form.email.setAttribute("class","success")
    f5.style.visibility='hidden'
    f5.style.opacity='0'
    flag=true
  } else {
    form.email.setAttribute("class","error")
    f5.style.visibility='visible'
    f5.style.opacity='1'
    f5.textContent="Digita con el dominio @misena"
    flag=false
  }
})

//////////////////////////////////////////////////////////////////////////////////////

// Reglas de validacion

var pass=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/;

const f6=document.querySelector('#inputPass .feedback')

form.pass.addEventListener('input',e=>{
  e.preventDefault()

  if (pass.test(e.target.value)) {
    form.pass.setAttribute("class","success")
    f6.style.visibility='visible'
    f6.style.opacity='0'
    flag=true
  } else {
    form.pass.setAttribute("class","error")
    f6.style.visibility='visible'
    f6.style.opacity='1'
    f6.textContent="La contraseña debe tener minimo una mayuscula, una minuscula y un numero"
    flag=false
  }
})

//////////////////////////////////////////////////////////////////////////////////////

// Reglas de validacion

const f7=document.querySelector('#inputCPass .feedback')


form.Cpass.addEventListener('input',e=>{
  e.preventDefault()

  let Password=document.getElementById('pass').value
  let Comprovante=document.getElementById('Cpass').value

  if (Comprovante===Password) {
    form.Cpass.setAttribute("class","success")
    f7.style.visibility='visible'
    f7.style.opacity='0'
    flag=true
  } else {
    form.Cpass.setAttribute("class","error")
    f7.style.visibility='visible' 
    f7.style.opacity='1'
    f7.textContent="La contraseña tiene que ser la misma"
    flag=false
  }
})

////////////////////

form.addEventListener("submit", e => {
  e.preventDefault()
  if (form.no.value == null || form.no.value == 0 || flag == false) {
    alert("Debes ingresar un numero de documento")
    form.no.focus()
    form.no.setAttribute("class", "error")
  } else if (form.nombre.value == null || form.nombre.value == 0 || flag == false) {
    alert("Debes ingresar tu nombre")
    form.nombre.focus()
    form.nombre.setAttribute("class", "error")
  } else if (form.apellido.value == null || form.apellido.value == 0 || flag == false) {
    alert("Debes ingresar tu apellido")
    form.apellido.focus()
    form.apellido.setAttribute("class", "error")
  } else if (form.nac.value == null || form.nac.value == 0 || flag == false) {
    alert("Debes ingresar tu fwcha de nacimiento")
    form.nac.focus()
    form.nac.setAttribute("class", "error")
  } else if (form.email.value == null || form.email.value == 0 || flag == false) {
    alert("Debes ingresar tu email")
    form.email.focus()
    form.email.setAttribute("class", "error")
  } else if (form.pass.value == null || form.pass.value == 0 || flag == false) {
    alert("Debes ingresar una contraseña")
    form.pass.focus()
    form.pass.setAttribute("class", "error")
  } else if (form.Cpass.value == null || form.Cpass.value == 0 || flag == false) {
    alert("Debes confirmar tu contraseña")
    form.nombre.focus()
    form.Cpass.setAttribute("class", "error")
  } else if (form.TyC.checked == false || form.TyC.checked == false || flag == false) {
    alert("Debes aceptar los Términos y Condiciones")
    form.TyC.focus()
  } else {
    alert("Se ha registrado correctamente")
    form.submit();
  }
});




///////////////////////////////////////////////////////////////////////////////////////

/*

feedback.setAttribute("class","feedback")
    feedback.style.visibility = "visible"
    feedback.style.opacity = "1"
    feedback.style.display = "block"
    feedback.style.transition = "5s"
    feedback.textContent = "Debes aceptar los Terminos y Condiciones";
    flag = false



btncal.addEventListener('click', function (event) {
    event.preventDefault();
    
    let tipo = document.getElementById('tipo').value;
    let no = document.getElementById('no').value;
    let nombre = document.getElementById('nombre').value;
    let apellido = document.getElementById('apellido').value;
    let nac = document.getElementById('nac').value;
    let email = document.getElementById('email').value;
    let pass = document.getElementById('pass').value;
    let TyC = document.getElementById('TyC').value;
    let modal1 = document.getElementById('modal1').value;
})*/