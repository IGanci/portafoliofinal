document.addEventListener('DOMContentLoaded', function() {
    // Obtener elementos
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    
    // Toggle menú hamburguesa
    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });

    // Toggle modo oscuro
    darkModeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        document.querySelector('header').classList.toggle('dark-mode');
        document.querySelector('.content').classList.toggle('dark-mode');
        document.querySelector('.footer-content').classList.toggle('dark-mode');
        
        // Toggle dark-mode en los enlaces
        const navLinksSpan = document.querySelectorAll('.nav-links span a');
        navLinksSpan.forEach(link => {
            link.classList.toggle('dark-mode');
        });

        // Cambiar texto del botón
        darkModeToggle.textContent = document.body.classList.contains('dark-mode') 
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