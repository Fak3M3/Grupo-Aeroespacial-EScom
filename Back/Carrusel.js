let currentIndex = 0;

// Seleccionamos el track del carrusel
const track = document.getElementById("carouselTrack");

// Contamos los elementos hijos (las tarjetas del carrusel)
const totalItems = track.children.length;

// Función para mover el carrusel
function moveCarousel(direction) {
    // Ajustamos el índice
    currentIndex += direction;

    // Lógica para crear un carrusel circular
    if (currentIndex < 0) {
        currentIndex = totalItems - 1;
    } else if (currentIndex >= totalItems) {
        currentIndex = 0;
    }

    // Calculamos el desplazamiento (100% por tarjeta)
    const offset = -currentIndex * 100;

    // Aplicamos transformación
    track.style.transform = `translateX(${offset}%)`;
}