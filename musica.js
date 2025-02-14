document.addEventListener("DOMContentLoaded", () => {
    const musica = document.getElementById("musica");

    function playMusic() {
        musica.play().catch(error => {
            console.log("El usuario debe interactuar primero para activar el audio:", error);
        });
    }

    document.addEventListener("click", playMusic, { once: true });
    document.addEventListener("touchstart", playMusic, { once: true });
});