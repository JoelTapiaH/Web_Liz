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

// --- Carrusel del hero: alterna las fotos de la flota cada 5s ---
const heroCarousel = document.getElementById("heroCarousel");
if (heroCarousel && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const heroSlides = heroCarousel.querySelectorAll(".hero__slide");
  let heroSlideIndex = 0;
  if (heroSlides.length > 1) {
    setInterval(() => {
      heroSlides[heroSlideIndex].classList.remove("is-active");
      heroSlideIndex = (heroSlideIndex + 1) % heroSlides.length;
      heroSlides[heroSlideIndex].classList.add("is-active");
    }, 5000);
  }
}

// --- Nav: fondo al hacer scroll ---
const nav = document.getElementById("nav");
const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 30);
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

// --- Menú móvil ---
const burger = document.getElementById("navBurger");
const navLinks = document.getElementById("navLinks");
function setMenu(open) {
  navLinks.classList.toggle("open", open);
  burger.classList.toggle("open", open);
  burger.setAttribute("aria-expanded", String(open));
  burger.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
}
burger.addEventListener("click", () => setMenu(!navLinks.classList.contains("open")));
navLinks.querySelectorAll("a").forEach((link) =>
  link.addEventListener("click", () => setMenu(false))
);
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && navLinks.classList.contains("open")) setMenu(false);
});

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
  return Math.floor(n).toLocaleString("es-PE");
}

function animateCounter(el) {
  const target = +el.dataset.target;
  const suffix = el.dataset.suffix || "";
  const prefix = el.dataset.prefix || "";
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    el.textContent = prefix + formatNumber(target) + suffix;
    return;
  }
  const duration = 1800;
  const start = performance.now();

  function tick(now) {
    const progress = Math.min((now - start) / duration, 1);
    // easeOutExpo para un final suave
    const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
    el.textContent = prefix + formatNumber(target * eased) + suffix;
    if (progress < 1) requestAnimationFrame(tick);
    else el.textContent = prefix + formatNumber(target) + suffix;
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

// --- Pestañas de industrias (con avance automático) ---
const indWrap = document.querySelector(".ind");
const indTabs = [...document.querySelectorAll(".ind-tab")];
const indPanels = document.querySelectorAll(".ind-panel");
const IND_INTERVAL = 6000;
let indTimer = null;

function selectTab(tab, { scroll = false } = {}) {
  indTabs.forEach((t) => {
    const active = t === tab;
    t.classList.toggle("is-active", active);
    t.setAttribute("aria-selected", String(active));
    t.tabIndex = active ? 0 : -1;
  });
  indPanels.forEach((panel) => {
    const active = panel.dataset.panel === tab.dataset.industry;
    panel.hidden = !active;
    panel.classList.toggle("is-active", active);
  });
  // en celular, mantener visible la pestaña activa dentro de la fila deslizable
  if (scroll) {
    const row = tab.parentElement;
    row.scrollTo({ left: tab.offsetLeft - row.offsetLeft - 16, behavior: "smooth" });
  }
}

function stopAuto() {
  clearInterval(indTimer);
  indTimer = null;
  indWrap?.classList.remove("is-auto");
}
function startAuto() {
  if (!indWrap || indTimer || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  indWrap.style.setProperty("--ind-interval", IND_INTERVAL + "ms");
  indWrap.classList.add("is-auto");
  indTimer = setInterval(() => {
    const i = indTabs.findIndex((t) => t.classList.contains("is-active"));
    selectTab(indTabs[(i + 1) % indTabs.length], { scroll: true });
  }, IND_INTERVAL);
}

indTabs.forEach((tab, i) => {
  tab.tabIndex = tab.classList.contains("is-active") ? 0 : -1;
  // si el usuario elige una industria, se detiene el avance automático
  tab.addEventListener("click", () => { stopAuto(); selectTab(tab, { scroll: true }); });
  tab.addEventListener("keydown", (e) => {
    const keys = { ArrowDown: i + 1, ArrowRight: i + 1, ArrowUp: i - 1, ArrowLeft: i - 1, Home: 0, End: indTabs.length - 1 };
    if (!(e.key in keys)) return;
    e.preventDefault();
    stopAuto();
    const next = indTabs[(keys[e.key] + indTabs.length) % indTabs.length];
    selectTab(next, { scroll: true });
    next.focus();
  });
});

if (indWrap) {
  // solo rota mientras la sección está en pantalla
  new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting && !indWrap.dataset.touched) startAuto();
    else stopAuto();
  }, { threshold: 0.4 }).observe(indWrap);
  ["pointerdown", "focusin"].forEach((ev) =>
    indWrap.addEventListener(ev, () => { indWrap.dataset.touched = "1"; stopAuto(); })
  );
}

// --- WhatsApp con mensaje según la industria o servicio elegido ---
document.querySelectorAll("[data-wa]").forEach((a) => {
  const who = a.dataset.wa;
  const msg = who === "hogar"
    ? "Hola, quisiera solicitar el recojo de mi ropa a domicilio."
    : `Hola, quisiera una cotización de lavandería para ${who}.`;
  a.href = "https://wa.me/51956845005?text=" + encodeURIComponent(msg);
});

/* ============================================================
   Formulario de cotización y preguntas frecuentes
   ============================================================ */

// Formulario de cotización: arma el mensaje y lo abre en WhatsApp
// (no necesita servidor; luego se puede conectar a un correo).
const cotizaForm = document.getElementById("cotizaForm");
if (cotizaForm) {
  cotizaForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const d = Object.fromEntries(new FormData(cotizaForm));
    const lineas = [
      "Hola, quisiera una cotización.",
      `Nombre: ${d.nombre}`,
      d.empresa && `Empresa: ${d.empresa}`,
      `Rubro: ${d.rubro}`,
      d.ciudad && `Ciudad / unidad: ${d.ciudad}`,
      d.detalle && `Detalle: ${d.detalle}`,
    ].filter(Boolean);
    window.open("https://wa.me/51956845005?text=" + encodeURIComponent(lineas.join("\n")), "_blank", "noopener");
  });
}

// Preguntas frecuentes: solo una abierta a la vez
const faqItems = document.querySelectorAll(".faq__item");
faqItems.forEach((item) =>
  item.addEventListener("toggle", () => {
    if (item.open) faqItems.forEach((o) => { if (o !== item) o.open = false; });
  })
);
