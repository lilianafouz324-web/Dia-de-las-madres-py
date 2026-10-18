/* =========================================
   ✏️ EDITÁ ACÁ LOS TEXTOS
   (el campo "guarani" es la frase cursiva rosa; si no la querés, borrala)
   ========================================= */
const FIRMA = "David";

const SLIDES = [
  {
    etiqueta: "Un día especial",
    guarani: "Mba'éichapa, mi familia linda",
    titulo: "Para mi abuela y mis tías",
    texto: "Hoy quiero celebrarlas a ustedes, las mujeres que me criaron con amor de familia grande: con risas, comida rica y abrazos que se sienten aunque estemos lejos.",
    arte: "lapacho"
  },
  {
    etiqueta: "Abuela",
    guarani: "Che jarýi",
    titulo: "Mi abuela querida",
    texto: "Por tu chipa recién salida del horno, la sopa paraguaya de los domingos y esas manos que siempre tenían algo rico para convidar. Tu cocina era el corazón de la casa.",
    arte: "chipa"
  },
  {
    etiqueta: "Tías",
    guarani: "Aguyjevete",
    titulo: "Por cada tereré compartido",
    texto: "Por cada tereré frío compartido con ustedes en mi infancia, a la sombra, con los yuyos y las charlas largas de la siesta. Esos momentos los llevo conmigo para siempre.",
    arte: "terere"
  },
  {
    etiqueta: "Lo que me enseñaron",
    guarani: "Hilo por hilo",
    titulo: "Tejieron mi historia",
    texto: "Como el ñandutí, ustedes fueron tejiendo con paciencia lo que soy: el respeto, el trabajo, la fe y el valor de la familia.",
    arte: "nanduti"
  },
  {
    etiqueta: "Lo que les deseo",
    guarani: "Ñandejára nde rovasa",
    titulo: "Que florezcan siempre",
    texto: "Que la vida les devuelva multiplicado todo el amor que dan. Que florezcan siempre, como el mburucuyá en el patio de la casa.",
    arte: "mburucuya"
  },
  {
    etiqueta: "Con todo mi amor",
    guarani: "Rohayhuete",
    titulo: "¡Feliz Día de las Madres!",
    texto: `Las quiero muchísimo, hoy y siempre. Aguyje por todo.<br><br>— ${FIRMA}`,
    arte: "final",
    final: true
  }
];

/* =========================================
   🎨 DIBUJOS ANIMADOS (SVG)
   ========================================= */

// Ñandutí: el encaje paraguayo tipo telaraña
function nanduti(cx, cy, r, c1 = "#c8333a", c2 = "#e07aa5", c3 = "#1f4f8f") {
  let s = "";
  for (let i = 0; i < 32; i++) {
    s += `<line x1="${cx}" y1="${cy - r * 0.18}" x2="${cx}" y2="${cy - r}" stroke="#d8a64a" stroke-width="${r * 0.012 + .4}" transform="rotate(${i * 11.25} ${cx} ${cy})"/>`;
  }
  s += `<circle cx="${cx}" cy="${cy}" r="${r * 0.38}" fill="none" stroke="${c3}" stroke-width="${r * 0.025}"/>`;
  s += `<circle cx="${cx}" cy="${cy}" r="${r * 0.72}" fill="none" stroke="${c1}" stroke-width="${r * 0.025}" stroke-dasharray="${r * 0.06} ${r * 0.05}"/>`;
  for (let i = 0; i < 8; i++) {
    s += `<ellipse cx="${cx}" cy="${cy - r * 0.55}" rx="${r * 0.09}" ry="${r * 0.15}" fill="${c2}" transform="rotate(${i * 45} ${cx} ${cy})"/>`;
  }
  for (let i = 0; i < 16; i++) {
    s += `<circle cx="${cx}" cy="${cy - r}" r="${r * 0.08}" fill="none" stroke="${i % 2 ? c3 : c1}" stroke-width="${r * 0.02}" transform="rotate(${i * 22.5} ${cx} ${cy})"/>`;
  }
  for (let i = 0; i < 6; i++) {
    s += `<ellipse cx="${cx}" cy="${cy - r * 0.11}" rx="${r * 0.06}" ry="${r * 0.11}" fill="${c1}" transform="rotate(${i * 60} ${cx} ${cy})"/>`;
  }
  s += `<circle cx="${cx}" cy="${cy}" r="${r * 0.06}" fill="#ffd36b"/>`;
  return s;
}

// florcita de lapacho
function florLapacho(x, y, s = 1) {
  let p = "";
  for (let i = 0; i < 5; i++) {
    p += `<ellipse cx="${x}" cy="${y - 5 * s}" rx="${3.5 * s}" ry="${5 * s}" fill="#e07aa5" transform="rotate(${i * 72} ${x} ${y})"/>`;
  }
  return p + `<circle cx="${x}" cy="${y}" r="${2 * s}" fill="#ffd36b"/>`;
}

function brillos(lista) {
  return lista.map(([x, y, s, d]) =>
    `<text class="brillo" x="${x}" y="${y}" font-size="${s}" fill="#d8a64a" style="animation-delay:${d}s">✦</text>`
  ).join("");
}

function chipa(cx, cy, r) {
  return `
    <circle cx="${cx}" cy="${cy}" r="${r}" fill="#e3a94f"/>
    <circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="#c98a35" stroke-width="3"/>
    <circle cx="${cx - r * .3}" cy="${cy - r * .35}" r="${r * .5}" fill="#f2c374" opacity=".6"/>
    <circle cx="${cx}" cy="${cy}" r="${r * .35}" fill="#f3e3c8"/>
    <circle cx="${cx + r * .55}" cy="${cy + r * .2}" r="2" fill="#b8762a"/>
    <circle cx="${cx - r * .6}" cy="${cy + r * .3}" r="2" fill="#b8762a"/>`;
}

const ARTE = {
  lapacho: `
  <svg viewBox="0 0 300 300">
    <circle cx="150" cy="150" r="130" fill="#fde3ee"/>
    <ellipse cx="150" cy="262" rx="105" ry="14" fill="#cfe0c3"/>
    <g class="mecer">
      <path d="M150 262 C 146 220, 156 190, 148 150 M150 200 C 130 180, 110 170, 96 150 M150 185 C 170 170, 190 162, 204 142" stroke="#7a5236" stroke-width="10" fill="none" stroke-linecap="round"/>
      <circle cx="150" cy="105" r="48" fill="#ea8fb6"/>
      <circle cx="102" cy="128" r="36" fill="#e07aa5"/>
      <circle cx="198" cy="125" r="38" fill="#f0a4c4"/>
      <circle cx="125" cy="80"  r="30" fill="#f0a4c4"/>
      <circle cx="178" cy="78"  r="30" fill="#e07aa5"/>
      ${florLapacho(110, 110, 1.4)}${florLapacho(160, 90, 1.2)}${florLapacho(195, 130, 1.3)}
      ${florLapacho(140, 130, 1)}${florLapacho(85, 135, 1)}${florLapacho(178, 65, 1)}
    </g>
    <g class="cae" style="animation-delay:0s">${florLapacho(95, 170, 1.1)}</g>
    <g class="cae" style="animation-delay:1.3s">${florLapacho(200, 165, 1)}</g>
    <g class="cae" style="animation-delay:2.6s">${florLapacho(150, 160, .9)}</g>
    ${brillos([[45, 90, 16, 0], [250, 75, 14, .8], [255, 210, 12, 1.4]])}
  </svg>`,

  chipa: `
  <svg viewBox="0 0 300 300">
    <circle cx="150" cy="150" r="130" fill="#f6e6cf"/>
    <path class="vapor" d="M120 120 q-12 -15 0 -30 q12 -15 0 -30" stroke="#d8c3b0" stroke-width="5" fill="none" stroke-linecap="round"/>
    <path class="vapor" d="M150 112 q-12 -15 0 -30 q12 -15 0 -30" stroke="#d8c3b0" stroke-width="5" fill="none" stroke-linecap="round" style="animation-delay:.8s"/>
    <path class="vapor" d="M180 120 q-12 -15 0 -30 q12 -15 0 -30" stroke="#d8c3b0" stroke-width="5" fill="none" stroke-linecap="round" style="animation-delay:1.6s"/>
    <!-- mantel de ñandutí -->
    <g opacity=".9">${nanduti(150, 240, 40)}</g>
    <!-- canasto -->
    <path d="M70 165 L230 165 L210 240 L90 240 Z" fill="#b07a4a"/>
    <path d="M78 185 L222 185 M84 205 L216 205 M88 222 L212 222" stroke="#8a5a3b" stroke-width="3"/>
    <path d="M100 165 L105 240 M130 165 L132 240 M160 165 L160 240 M190 165 L187 240" stroke="#c99464" stroke-width="3"/>
    <ellipse cx="150" cy="165" rx="82" ry="12" fill="#8a5a3b"/>
    <!-- chipas -->
    ${chipa(112, 150, 26)}
    ${chipa(188, 150, 26)}
    ${chipa(150, 135, 28)}
    ${brillos([[50, 95, 16, .2], [248, 100, 14, 1]])}
  </svg>`,

  terere: `
  <svg viewBox="0 0 300 300">
    <circle cx="150" cy="150" r="130" fill="#e7f1e2"/>
    <ellipse cx="150" cy="262" rx="100" ry="12" fill="#cbdcc0"/>
    <!-- termo -->
    <rect x="182" y="92" width="58" height="168" rx="16" fill="#1f4f8f"/>
    <rect x="182" y="150" width="58" height="10" fill="#c8333a"/>
    <rect x="182" y="164" width="58" height="10" fill="#fff"/>
    <rect x="190" y="80" width="42" height="18" rx="6" fill="#163a6b"/>
    <path d="M240 130 q24 0 24 30 q0 30 -24 30" fill="none" stroke="#163a6b" stroke-width="8" stroke-linecap="round"/>
    <rect x="192" y="110" width="8" height="120" rx="4" fill="#fff" opacity=".18"/>
    <!-- guampa -->
    <path d="M70 128 L160 128 L150 255 Q115 266 80 255 Z" fill="#a8744f"/>
    <path d="M73 150 L157 150 M76 180 L155 180 M78 215 L152 215" stroke="#7a5236" stroke-width="5"/>
    <path d="M73 150 L157 150" stroke="#d8a64a" stroke-width="2"/>
    <path d="M78 215 L152 215" stroke="#d8a64a" stroke-width="2"/>
    <path d="M85 160 L88 240" stroke="#c48d65" stroke-width="6" stroke-linecap="round" opacity=".6"/>
    <!-- yuyos -->
    <ellipse cx="115" cy="128" rx="46" ry="9" fill="#4f7d3a"/>
    <path d="M92 126 q-8 -22 6 -32 q6 18 -6 32" fill="#6aa04f"/>
    <path d="M130 124 q4 -24 20 -28 q-2 20 -20 28" fill="#5f8f4e"/>
    <!-- hielo -->
    <g class="hielo">
      <rect x="100" y="112" width="16" height="16" rx="3" fill="#dff3ff" stroke="#a9d6ef" stroke-width="2" transform="rotate(12 108 120)"/>
      <rect x="120" y="114" width="13" height="13" rx="3" fill="#dff3ff" stroke="#a9d6ef" stroke-width="2" transform="rotate(-10 126 120)"/>
    </g>
    <!-- bombilla -->
    <path d="M118 130 L145 48" stroke="#c9c9c9" stroke-width="7" stroke-linecap="round"/>
    <rect x="136" y="40" width="18" height="10" rx="4" fill="#d8a64a" transform="rotate(18 145 45)"/>
    <!-- gotitas de frío -->
    <path class="gota" d="M95 165 q-4 7 0 10 q4 -3 0 -10" fill="#a9d6ef"/>
    <path class="gota" d="M135 175 q-4 7 0 10 q4 -3 0 -10" fill="#a9d6ef" style="animation-delay:1s"/>
    <path class="gota" d="M115 195 q-4 7 0 10 q4 -3 0 -10" fill="#a9d6ef" style="animation-delay:1.9s"/>
    <text x="40" y="95" font-size="22" fill="#a9d6ef" class="brillo">❄</text>
    ${brillos([[255, 70, 14, .6]])}
  </svg>`,

  nanduti: `
  <svg viewBox="0 0 300 300">
    <circle cx="150" cy="150" r="130" fill="#fdf2e4"/>
    <g class="girar">${nanduti(150, 150, 95)}</g>
    <g class="girar" style="animation-duration:10s;animation-direction:reverse">${nanduti(58, 72, 26, "#1f4f8f", "#e07aa5", "#c8333a")}</g>
    <g class="girar" style="animation-duration:12s">${nanduti(244, 232, 24, "#e07aa5", "#1f4f8f", "#c8333a")}</g>
    ${brillos([[250, 70, 16, 0], [45, 235, 14, .9]])}
  </svg>`,

  mburucuya: `
  <svg viewBox="0 0 300 300">
    <circle cx="150" cy="150" r="130" fill="#efe9f6"/>
    <path d="M40 260 Q90 200 150 225 T 265 200" stroke="#5f8f4e" stroke-width="5" fill="none"/>
    <path d="M85 222 q-20 -2 -26 -22 q20 2 26 22" fill="#6aa04f"/>
    <path d="M220 214 q18 -10 30 0 q-14 12 -30 0" fill="#6aa04f"/>
    <path d="M255 205 q10 -12 4 -24" stroke="#5f8f4e" stroke-width="3" fill="none"/>
    <g class="girar" style="animation-duration:30s">
      ${Array.from({ length: 10 }, (_, i) =>
        `<ellipse cx="150" cy="88" rx="16" ry="44" fill="${i % 2 ? '#fbf7ff' : '#e6dcf3'}" stroke="#d4c6ea" transform="rotate(${i * 36} 150 135)"/>`
      ).join("")}
      ${Array.from({ length: 48 }, (_, i) =>
        `<line x1="150" y1="135" x2="150" y2="${i % 2 ? 92 : 98}" stroke="${i % 3 === 0 ? '#fff' : '#6b3fa0'}" stroke-width="2.5" stroke-linecap="round" transform="rotate(${i * 7.5} 150 135)"/>`
      ).join("")}
      <circle cx="150" cy="135" r="20" fill="#7b4cb0"/>
    </g>
    <circle cx="150" cy="135" r="12" fill="#9cc46a"/>
    ${Array.from({ length: 5 }, (_, i) =>
      `<ellipse cx="150" cy="120" rx="4" ry="9" fill="#d8c24a" transform="rotate(${i * 72} 150 135)"/>`
    ).join("")}
    <circle cx="150" cy="135" r="5" fill="#5f8f4e"/>
    ${brillos([[50, 80, 16, 0], [250, 85, 14, .8], [45, 180, 12, 1.4]])}
  </svg>`,

  final: `
  <svg viewBox="0 0 300 300">
    <circle cx="150" cy="150" r="130" fill="#fde3ee"/>
    <g opacity=".35">${nanduti(150, 150, 120)}</g>
    <g class="latir">
      <path d="M100 215 C 25 160, 45 72, 100 110 C 155 72, 175 160, 100 215 Z" fill="#c8333a"/>
      <text x="100" y="162" text-anchor="middle" font-family="Dancing Script, cursive" font-size="27" fill="#fff">Abuela</text>
    </g>
    <g class="latir" style="animation-delay:-.7s">
      <path d="M200 215 C 125 160, 145 72, 200 110 C 255 72, 275 160, 200 215 Z" fill="#1f4f8f"/>
      <text x="200" y="162" text-anchor="middle" font-family="Dancing Script, cursive" font-size="27" fill="#fff">Tías</text>
    </g>
    <text x="150" y="262" text-anchor="middle" font-family="Dancing Script, cursive" font-size="30" fill="#b5573b">Rohayhuete</text>
    ${brillos([[50, 70, 18, 0], [245, 65, 16, .6], [150, 55, 14, 1.2]])}
  </svg>`
};

/* sello del sobre: un ñandutí chiquito */
document.getElementById("sello").innerHTML = nanduti(20, 20, 18);

/* =========================================
   🌸 FLORES DE LAPACHO CAYENDO
   ========================================= */
const capaPetalos = document.getElementById("petals");
for (let i = 0; i < 20; i++) {
  const p = document.createElement("span");
  const s = 0.6 + Math.random() * 0.8;
  p.className = "petal";
  p.style.left = Math.random() * 100 + "vw";
  p.style.width = 16 * s + "px";
  p.style.height = 16 * s + "px";
  p.style.animationDuration = 9 + Math.random() * 10 + "s";
  p.style.animationDelay = -Math.random() * 18 + "s";
  capaPetalos.appendChild(p);
}

/* =========================================
   🖼️ ARMAR LAS DIAPOSITIVAS
   ========================================= */
const contenedor = document.getElementById("slides");
const contDots = document.getElementById("dots");
const btnPrev = document.getElementById("prev");
const btnNext = document.getElementById("next");

SLIDES.forEach((s, i) => {
  const el = document.createElement("article");
  el.className = "slide" + (s.final ? " final" : "");
  el.innerHTML = `
    <div class="texto">
      <span class="tag">${s.etiqueta}</span>
      ${s.guarani ? `<span class="guarani">${s.guarani}</span>` : ""}
      <h2>${s.titulo}</h2>
      <p>${s.texto}</p>
      ${s.final ? '<button class="btn-corazones" id="lluvia">Lluvia de amor 💕</button>' : ""}
    </div>
    <div class="arte">${ARTE[s.arte]}</div>`;
  contenedor.appendChild(el);

  const d = document.createElement("span");
  d.addEventListener("click", () => ir(i));
  contDots.appendChild(d);
});

const slides = [...contenedor.children];
const puntos = [...contDots.children];
let actual = 0;

function ir(n) {
  if (n < 0 || n >= slides.length) return;
  slides.forEach((s, i) => {
    s.classList.toggle("active", i === n);
    s.classList.toggle("prev-out", i < n);
  });
  puntos.forEach((d, i) => d.classList.toggle("on", i === n));
  actual = n;
  btnPrev.disabled = n === 0;
  btnNext.disabled = n === slides.length - 1;
  if (n === slides.length - 1) lluvia(25);
}

btnPrev.addEventListener("click", () => ir(actual - 1));
btnNext.addEventListener("click", () => ir(actual + 1));

document.addEventListener("keydown", e => {
  if (e.key === "ArrowRight") ir(actual + 1);
  if (e.key === "ArrowLeft") ir(actual - 1);
});

// Deslizar con el dedo en el celu
let toqueX = null;
document.addEventListener("touchstart", e => { toqueX = e.touches[0].clientX; });
document.addEventListener("touchend", e => {
  if (toqueX === null) return;
  const dx = e.changedTouches[0].clientX - toqueX;
  if (Math.abs(dx) > 50) ir(actual + (dx < 0 ? 1 : -1));
  toqueX = null;
});

/* =========================================
   💌 ABRIR EL SOBRE
   ========================================= */
const sobre = document.getElementById("envelope");
const intro = document.getElementById("intro");
const show = document.getElementById("show");

sobre.addEventListener("click", () => {
  if (sobre.classList.contains("open")) return;
  sobre.classList.add("open");

  setTimeout(() => {
    intro.classList.add("fade");
    show.classList.remove("hidden");
    setTimeout(() => ir(0), 120);
  }, 3000);

  setTimeout(() => intro.remove(), 4200);
});

/* =========================================
   💕 LLUVIA DE AMOR
   ========================================= */
function lluvia(cantidad = 40) {
  const iconos = ["❤", "💕", "🌸", "🧉", "💐", "🇵🇾"];
  for (let i = 0; i < cantidad; i++) {
    setTimeout(() => {
      const h = document.createElement("span");
      h.className = "heart-fly";
      h.textContent = iconos[Math.floor(Math.random() * iconos.length)];
      h.style.left = Math.random() * 100 + "vw";
      h.style.fontSize = 16 + Math.random() * 24 + "px";
      h.style.color = "#c8333a";
      h.style.animationDuration = 3 + Math.random() * 3 + "s";
      document.body.appendChild(h);
      setTimeout(() => h.remove(), 6500);
    }, i * 80);
  }
}

document.addEventListener("click", e => {
  if (e.target.id === "lluvia") lluvia();
});
