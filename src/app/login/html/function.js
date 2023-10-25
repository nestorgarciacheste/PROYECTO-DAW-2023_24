var activa = true

function edit() {
    let nombre = document.getElementById('icono_nombre')
    let email = document.getElementById('icono_email')
    let editarFoto = document.getElementById('link_edit')

    activa = !activa

    if (activa) {
        nombre.style.display = "none";
        email.style.display = "none";
        editarFoto.style.display = "none"
    } else {
        nombre.style.display = "flex";
        email.style.display = "flex";
        editarFoto.style.display = "flex";
    }
}

function cambiarNombre() {
    let nombre = document.getElementById("enter_name").value
    document.getElementById("enter_name").value = ""
    document.getElementById("nombre").innerHTML = `Buenas, ${nombre}`
    document.getElementById("ventana_nombre").style.width = "0%";
}

function cambiarEmail() {
    let email = document.getElementById("enter_email").value
    document.getElementById("enter_email").value = ""
    document.getElementById("email").innerHTML = `${email}`
    document.getElementById("ventana_email").style.width = "0%";
    /*let nombre = prompt("Introduce el nombre")
    document.getElementById("email").innerHTML = `${nombre}`*/
}

  function openName() {
    document.getElementById("ventana_nombre").style.width = "100%";
  }
  
  function closeName() {
    document.getElementById("ventana_nombre").style.width = "0%";
  }

  function openEmail() {
    document.getElementById("ventana_email").style.width = "100%";
  }
  
  function closeEmail() {
    document.getElementById("ventana_email").style.width = "0%";
  }