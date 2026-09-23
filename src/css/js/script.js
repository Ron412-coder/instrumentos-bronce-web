// ======== SCROLL SUAVE EN LOS ENLACES ========
document.querySelectorAll('a[href^="#"]').forEach(enlace => {
    enlace.addEventListener('click', function(e) {
        e.preventDefault();
        const destino = document.querySelector(this.getAttribute('href'));
        if (destino) {
            destino.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// ======== BOTÓN "VOLVER ARRIBA" ========
const btnArriba = document.createElement("button");
btnArriba.textContent = "↑";
btnArriba.style.position = "fixed";
btnArriba.style.bottom = "20px";
btnArriba.style.right = "20px";
btnArriba.style.padding = "10px 15px";
btnArriba.style.fontSize = "20px";
btnArriba.style.borderRadius = "50%";
btnArriba.style.border = "none";
btnArriba.style.background = "#b30000";
btnArriba.style.color = "#fff";
btnArriba.style.cursor = "pointer";
btnArriba.style.display = "none";
btnArriba.style.zIndex = "999";
document.body.appendChild(btnArriba);

window.addEventListener("scroll", () => {
    btnArriba.style.display = window.scrollY > 300 ? "block" : "none";
});

btnArriba.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// ======== ANIMACIÓN DE APARICIÓN DE PÁRRAFOS ========
const parrafos = document.querySelectorAll("main p");

parrafos.forEach(p => {
    p.style.opacity = 0;
    p.style.transform = "translateY(20px)";
    p.style.transition = "all 0.8s ease";
});

function animarParrafos() {
    parrafos.forEach(p => {
        const rect = p.getBoundingClientRect();
        if (rect.top < window.innerHeight - 50) {
            p.style.opacity = 1;
            p.style.transform = "translateY(0)";
        }
    });
}

window.addEventListener("scroll", animarParrafos);
window.addEventListener("load", animarParrafos);

// ======== MODO ROJO-DORADO ACTIVADO POR JS ========
function activarModoChidoris() {
    document.body.style.background = "#0a0a0a";
    document.body.style.color = "#f2f2f2";
    document.querySelector("header").style.background = "#000";
    document.querySelector("header").style.borderBottom = "3px solid #D4AF37";
}

activarModoChidoris();
