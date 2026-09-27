// ============================================
// SELECCIONAR TARJETA AL TOCARLA / HACER CLIC
// ============================================

// 1. Agarro todas las tarjetas y el carrusel
const tarjetas = document.querySelectorAll('.tarjeta');
const carrusel = document.querySelector('.carrusel');

// 2. A cada tarjeta le pongo un "escuchador".
//    Uso 'pointerdown' (no 'click') porque funciona con
//    mouse Y con toque, y detecta el toque aunque la
//    tarjeta se esté moviendo mientras el carrusel gira.
tarjetas.forEach(function(tarjeta) {
    tarjeta.addEventListener('pointerdown', function() {

        // ¿Esta tarjeta ya estaba seleccionada?
        const yaEstaba = tarjeta.classList.contains('seleccionada');

        // Primero apago la selección de TODAS
        tarjetas.forEach(function(t) {
            t.classList.remove('seleccionada');
        });

        if (yaEstaba) {
            // Si ya estaba encendida, la apago y dejo girar de nuevo
            carrusel.style.animationPlayState = 'running';
        } else {
            // La enciendo y detengo el giro para verla bien
            tarjeta.classList.add('seleccionada');
            carrusel.style.animationPlayState = 'paused';
        }
    });
});