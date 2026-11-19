const NUMERO_WHATSAPP = "098265681";

const textoWhatsApp = "¡Hola! Vi tu página WebStudio y quiero consultar por la creación de una página web.";
const enlaceWhatsApp = NUMERO_WHATSAPP
  ? `https://wa.me/${NUMERO_WHATSAPP}?text=${encodeURIComponent(textoWhatsApp)}`
  : "";

document.querySelectorAll(".whatsapp-link").forEach((boton) => {
  if (enlaceWhatsApp) {
    boton.href = enlaceWhatsApp;
    boton.target = "_blank";
    boton.rel = "noopener";
  } else {
    boton.addEventListener("click", (evento) => {
      evento.preventDefault();
      alert("Para activar WhatsApp, agregá tu número en script.js, en NUMERO_WHATSAPP.");
    });
  }
});


const observador = new IntersectionObserver((entradas, observer) => {
  entradas.forEach((entrada) => {
    if (entrada.isIntersecting) {
      entrada.target.classList.add("visible");
      observer.unobserve(entrada.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach((elemento) => {
  observador.observe(elemento);
});

const progress = document.getElementById("scrollProgress");
const backTop = document.getElementById("backTop");

function actualizarPagina() {
  const altura = document.documentElement.scrollHeight - window.innerHeight;
  const avance = altura > 0 ? (window.scrollY / altura) * 100 : 0;
  progress.style.width = `${avance}%`;
  backTop.classList.toggle("show", window.scrollY > 500);
}

window.addEventListener("scroll", actualizarPagina, { passive: true });
actualizarPagina();

backTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

menuToggle.addEventListener("click", () => {
  const abierto = mainNav.classList.toggle("open");
  menuToggle.textContent = abierto ? "✕" : "☰";
  menuToggle.setAttribute("aria-expanded", String(abierto));
});

mainNav.querySelectorAll("a").forEach((enlace) => {
  enlace.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuToggle.textContent = "☰";
    menuToggle.setAttribute("aria-expanded", "false");
  });
});
document.getElementById("year").textContent = new Date().getFullYear();
