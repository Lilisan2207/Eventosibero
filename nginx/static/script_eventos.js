async function crearEvento() {
    let nombre = document.getElementById("nombre").value
    let fecha = document.getElementById("fecha").value
    let lugar = document.getElementById("lugar").value

    await fetch{'/events/eventos?nombre=?$(encodeURIComponent(nombre)'

    }
}