function cambiarModo() {
    if (document.body.getAttribute("data-modo") === "claro") {
        document.body.setAttribute("data-modo", "oscuro")
    } else {
        document.body.setAttribute("data-modo", "claro")
    }
    console.log("cambio a dark mode")
}