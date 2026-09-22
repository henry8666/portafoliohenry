// ============================================
// PORTFOLIO - FILTRO DE PROYECTOS
// ============================================

// 1. Obtener todos los botones de filtro
const botonesFiltro = document.querySelectorAll('.filtro-btn');

// 2. Obtener todas las tarjetas de proyectos
const tarjetas = document.querySelectorAll('.tarjeta');

// 3. Agregar evento de clic a cada botón
botonesFiltro.forEach(function(boton) {
    boton.addEventListener('click', function() {

        // --- Quitar la clase 'activo' de todos los botones ---
        botonesFiltro.forEach(b => b.classList.remove('activo'));

        // --- Poner 'activo' solo al botón que hice clic ---
        this.classList.add('activo');

        // --- Obtener qué categoría se quiere mostrar ---
        const filtro = this.getAttribute('data-filtro');

        // --- Mostrar u ocultar cada tarjeta ---
        tarjetas.forEach(function(tarjeta) {
            const categoria = tarjeta.getAttribute('data-categoria');

            if (filtro === 'todos' || categoria === filtro) {
                // Mostrar la tarjeta
                tarjeta.style.display = 'flex';
            } else {
                // Ocultar la tarjeta
                tarjeta.style.display = 'none';
            }
        });
    });
});