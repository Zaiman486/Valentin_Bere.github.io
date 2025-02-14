document.addEventListener("DOMContentLoaded", () => {
    function crearCorazon() {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerText = "💞"; // Agregar el emoji de corazón dentro del div

        // Posición aleatoria en la pantalla
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = Math.random() * 2 + 3 + "s"; // Velocidad de subida

        document.getElementById("heart-container").appendChild(heart);

        // Eliminar el corazón después de 5 segundos (para que no se acumulen)
        setTimeout(() => {
            heart.remove();
        }, 5000);
    }

    // Genera corazones cada 300ms
    setInterval(crearCorazon, 200);
});

document.addEventListener("DOMContentLoaded", () => {
    const musica = document.getElementById("musica");

    // Intenta reproducir el audio al cargar la página
    function playMusic() {
        musica.play().catch(error => {
            console.log("El usuario debe interactuar primero para activar el audio:", error);
        });
    }

    // Intenta reproducir el audio después de cualquier clic o toque en la pantalla
    document.addEventListener("click", playMusic, { once: true });
    document.addEventListener("touchstart", playMusic, { once: true });
});

