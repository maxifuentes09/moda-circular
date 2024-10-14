
//CARRUSEL 2
let currentSlide = 0;

// Función para mover el slide
function moveSlide(n) {
    const items = document.querySelectorAll('.carousel-item');
    currentSlide = (currentSlide + n + items.length) % items.length;
    document.querySelector('.carousel-images').style.transform = `translateX(-${currentSlide * 100}%)`;
}

// Función para abrir el modal y mostrar la imagen con zoom
function openModal(element) {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modalImg");
    const captionText = document.getElementById("caption");

    // Obtener la fuente de la imagen y el texto
    const imgSrc = element.querySelector("img").src;
    const caption = element.querySelector(".caption").innerHTML;

    // Mostrar la imagen y el caption en el modal
    modalImg.src = imgSrc;
    captionText.innerHTML = caption;

    modal.style.display = "block";
}

// Función para cerrar el modal
function closeModal() {
    document.getElementById("modal").style.display = "none";
}




function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('show-menu');
}

let slideIndex = 0;
showSlides();

function showSlides() {
    const slides = document.querySelectorAll('.carousel-item');
    // Oculta todas las diapositivas
    slides.forEach((slide) => {
        slide.style.display = 'none';
    });
    // Muestra la diapositiva actual
    slides[slideIndex].style.display = 'block';
    
    // Incrementa el índice de la diapositiva actual
    slideIndex = (slideIndex + 1) % slides.length; // Si llega al final, vuelve al principio

    // Cambia la diapositiva cada 3 segundos
    setTimeout(showSlides, 3000);
}

// Función para moverse entre las diapositivas
function moveSlide(n) {
    slideIndex += n;
    const slides = document.querySelectorAll('.carousel-item');
    
    // Asegura que el índice no exceda el rango
    if (slideIndex >= slides.length) slideIndex = 0;
    if (slideIndex < 0) slideIndex = slides.length - 1;
    
    // Muestra la diapositiva actual
    showSlides();
}


function openModal(item) {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-image");
    const captionText = document.getElementById("caption");
    
    modal.style.display = "block"; // Muestra el modal
    modalImg.src = item.querySelector('img').src; // Establece la fuente de la imagen del modal
    captionText.innerHTML = item.querySelector('.caption').innerHTML; // Muestra el texto de la imagen
}

function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none"; // Oculta el modal al hacer clic en él
}


// VESTIDOS Y POLLERAS
// Función para abrir el modal con animación
function openModal(imgSrc, title, price) {
    var modal = document.getElementById("modal");
    var modalImg = document.getElementById("modalImg");
    var modalTitle = document.getElementById("modalTitle");
    var modalPrice = document.getElementById("modalPrice");

    // Establecer los valores del modal
    modalImg.src = imgSrc;
    modalTitle.textContent = title;
    modalPrice.textContent = price;

    // Mostrar el modal con clase de animación
    modal.classList.add("show");
}

// Función para cerrar el modal con animación
function closeModal() {
    var modal = document.getElementById("modal");

    // Ocultar el modal después de la animación
    modal.classList.remove("show");
    setTimeout(function() {
        modal.style.display = "none";
    }, 500);
}


// REMERAS CORTAS

/// Función para hacer zoom en la imagen al hacer clic
function zoomImagen(element) {
    var overlay = document.getElementById("overlay");
    var overlayImg = document.getElementById("overlayImg");
    
    // Obtén la imagen seleccionada
    var imgSrc = element.querySelector("img").src;
    
    // Muestra la imagen dentro del overlay
    overlayImg.src = imgSrc;
    overlay.style.display = "flex"; // Mostrar overlay con display flex
}

// Función para cerrar el zoom
function cerrarZoom() {
    var overlay = document.getElementById("overlay");
    overlay.style.display = "none"; // Ocultar el overlay
}



//REMERAS LARGAS

// Función para hacer zoom en la imagen al hacer clic
function zoomImagen(element) {
    var overlay = document.getElementById("overlay");
    var overlayImg = document.getElementById("overlayImg");
    
    // Obtén la imagen seleccionada
    var imgSrc = element.querySelector("img").src;
    
    // Muestra la imagen dentro del overlay
    overlayImg.src = imgSrc;
    overlay.style.display = "flex"; // Mostrar overlay con display flex
}

// Función para cerrar el zoom
function cerrarZoom() {
    var overlay = document.getElementById("overlay");
    overlay.style.display = "none"; // Ocultar el overlay
}


// BUZOS/SWEATERS


// Función para hacer zoom en la imagen al hacer clic
function zoomImagen(element) {
    var overlay = document.getElementById("overlay");
    var overlayImg = document.getElementById("overlayImg");
    
    // Obtén la imagen seleccionada
    var imgSrc = element.querySelector("img").src;
    
    // Muestra la imagen dentro del overlay
    overlayImg.src = imgSrc;
    overlay.style.display = "flex"; // Mostrar overlay con display flex
}

// Función para cerrar el zoom
function cerrarZoom() {
    var overlay = document.getElementById("overlay");
    overlay.style.display = "none"; // Ocultar el overlay
}

// Función para mostrar/ocultar el menú de navegación
function toggleMenu() {
    var menu = document.getElementById("menu");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}


// JOGGINS


