
document.addEventListener("DOMContentLoaded", function() {
    const saludo = document.getElementById("saludo");
    const hora = new Date().getHours();
    let mensaje;

    if (hora < 12) {
        mensaje = "Buenos días, cadete.";
    } else if (hora < 18) {
        mensaje = "Buenas tardes, cadete.";
    } else {
        mensaje = "Buenas noches, cadete.";
    }

    saludo.textContent = mensaje;
});
