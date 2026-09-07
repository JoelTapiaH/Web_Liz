/* ============================================================
   Lavandería Liz · Interacciones
   ============================================================ */

// Año actual en el footer
document.getElementById("year").textContent = new Date().getFullYear();

// --- Respaldo del logo: si imagenes/logo.png aún no existe, mostrar texto ---
// (en cuanto guardes la imagen con ese nombre, aparecerá el logo real)
document.querySelectorAll("img.nav__logo-img, img.hero__logo, img.footer__logo")
  .forEach((img) => {
    img.addEventListener("error", () => {
      const fallback = document.createElement("span");
      fallback.className = "logo-fallback";
      fallback.innerHTML = 'Lavandería <strong>Liz</strong>';
      img.replaceWith(fallback);
    });
  });

// --- Nav: fondo al hacer scroll ---
const nav = document.getElementById("nav");
window.addEventListener("scroll", () => {
  nav.classList.toggle("scrolled", window.scrollY > 30);
});

// --- Menú móvil ---
const burger = document.getElementById("navBurger");
const navLinks = document.getElementById("navLinks");
burger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  burger.classList.toggle("open");
});
navLinks.querySelectorAll("a").forEach((link) =>
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    burger.classList.remove("open");
  })
);

// --- Reveal al hacer scroll ---
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);
document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

// --- Contadores animados ---
function formatNumber(n) {
  return Math.floor(n).toLocaleString("es-MX");
}

function animateCounter(el) {
  const target = +el.dataset.target;
  const suffix = el.dataset.suffix || "";
  const duration = 1800;
  const start = performance.now();

  function tick(now) {
    const progress = Math.min((now - start) / duration, 1);
    // easeOutExpo para un final suave
    const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
    el.textContent = formatNumber(target * eased) + suffix;
    if (progress < 1) requestAnimationFrame(tick);
    else el.textContent = formatNumber(target) + suffix;
  }
  requestAnimationFrame(tick);
}

const counterObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        counterObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.5 }
);
document.querySelectorAll(".stat__num").forEach((el) => counterObserver.observe(el));
