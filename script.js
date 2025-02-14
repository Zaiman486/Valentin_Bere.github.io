const btnNo = document.querySelector("#btn-random");

function moverAleatoriamente(btn) {
    btn.style.position = "absolute";
    btn.style.fontWeight = "bolder";
    btn.style.top = Math.floor(Math.random() * 90 + 5) + "%";
    btn.style.left = Math.floor(Math.random() * 90 + 5) + "%";
}

// Evento para PC (mouse)
btnNo.addEventListener("mouseenter", function (e) {
    if (!isMobile()) { // Solo en PC
        moverAleatoriamente(e.target);
    }
});

// Evento para móviles (touch)
btnNo.addEventListener("touchstart", function (e) {
    e.preventDefault(); // Evita que el evento se active dos veces
    moverAleatoriamente(e.target);
});

// Detectar si el usuario está en un dispositivo móvil
function isMobile() {
    return /Mobi|Android|iPhone/i.test(navigator.userAgent);
}
