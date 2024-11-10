document.addEventListener('DOMContentLoaded', function() {
    // Obtener elementos
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const body = document.body;
    const header = document.querySelector('header');
    const container = document.querySelector('.container');
    const footerContent = document.querySelector('.footer-content');
    const navLinksSpan = document.querySelectorAll('.nav-links span a');

    // Funcionalidad del menú hamburguesa
    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });

    // Funcionalidad del modo oscuro
    darkModeToggle.addEventListener('click', function() {
        body.classList.toggle('dark-mode');
        header.classList.toggle('dark-mode');
        container.classList.toggle('dark-mode');
        footerContent.classList.toggle('dark-mode');
        navLinksSpan.forEach(link => link.classList.toggle('dark-mode'));

        // Cambiar texto del botón
        darkModeToggle.textContent = body.classList.contains('dark-mode') 
            ? 'Modo Claro' 
            : 'Modo Oscuro';
    });

    // Cerrar menú en pantallas pequeñas al hacer click en un enlace
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                navLinks.classList.remove('active');
            }
        });
    });

    // Cerrar menú al hacer click fuera
    document.addEventListener('click', function(e) {
        if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
            navLinks.classList.remove('active');
        }
    });
});
