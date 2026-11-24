"use strict";
const $ = (s, root = document) => root.querySelector(s);
const $$ = (s, root = document) => [...root.querySelectorAll(s)];
const icons = {
  glasses:
    '<path d="m2 14 2-8q.3-1.5 2-1m16 9-2-8q-.3-1.5-2-1M10.6 13q1.4-1.8 2.8 0"/><circle cx="6.2" cy="14.6" r="4.3"/><circle cx="17.8" cy="14.6" r="4.3"/>',
  bag: '<path d="M5 7h14l1 14H4L5 7Z"/><path d="M9 9V6a3 3 0 0 1 6 0v3"/>',
  arrow: '<path d="M4 12h15m-6-6 6 6-6 6"/>',
  upRight: '<path d="M6 18 18 6M7 6h11v11"/>',
  sparkles:
    '<path d="m10 4 1.8 5.4L17 11l-5.2 1.8L10 18l-1.7-5.2L3 11l5.3-1.6L10 4Zm8-3 .9 2.6L21.5 4l-2.6 1L18 8l-.9-3L15 4l2.1-.4L18 1Z"/>',
  scan: '<path d="M8 3H4v4m12-4h4v4M4 17v4h4m12-4v4h-4M8 12h8"/>',
  scanFace:
    '<path d="M8 3H4v4m12-4h4v4M4 17v4h4m12-4v4h-4m-7-9v1m6-1v1m-6 3q3 3 6 0"/>',
  camera:
    '<path d="M3 7h4l1.5-2.5h7L17 7h4v13H3z"/><circle cx="12" cy="13" r="3.6"/>',
  upload: '<path d="M12 16V3m-5 5 5-5 5 5M4 15v5h16v-5"/>',
  x: '<path d="m6 6 12 12M18 6 6 18"/>',
  check: '<path d="m4 12 5 5L20 6"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5"/>',
};
function icon(name) {
  return (
    '<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">' +
    icons[name] +
    "</svg>"
  );
}
$$("[data-icon]").forEach((el) => (el.innerHTML = icon(el.dataset.icon)));
const palette = {
  Preto: "#282825",
  Tartaruga: "#714528",
  Oliva: "#596443",
  Mel: "#ae8051",
  Dourado: "#ad8a4e",
  Prata: "#8c9495",
  Vinho: "#73383e",
  Grafite: "#515552",
};
const models = [
  [
    "Atlas Classic",
    "Quadrado",
    "Grau",
    249,
    "Preto Tartaruga Oliva",
    "#eeeee6",
    "Redondo Coração",
  ],
  [
    "Aurora Oval",
    "Oval",
    "Sol",
    289,
    "Tartaruga Preto Mel",
    "#f2eae1",
    "Oval Quadrado Diamante",
  ],
  [
    "Luna Retrô",
    "Redondo",
    "Grau",
    219,
    "Dourado Prata Grafite",
    "#e9ede5",
    "Quadrado Diamante",
  ],
  [
    "Aero Aviador",
    "Aviador",
    "Sol",
    329,
    "Dourado Grafite Prata",
    "#ece9df",
    "Oval Coração",
  ],
  [
    "Mia Gatinho",
    "Gatinho",
    "Grau",
    259,
    "Vinho Preto Tartaruga",
    "#f3e9e7",
    "Diamante Redondo",
  ],
  [
    "Bossa Club",
    "Clubmaster",
    "Sol",
    299,
    "Tartaruga Preto Oliva",
    "#e9ede5",
    "Oval Redondo",
  ],
  [
    "Prisma Geo",
    "Geométrico",
    "Grau",
    279,
    "Prata Dourado Preto",
    "#ebecee",
    "Redondo Oval",
  ],
  [
    "Sprint Sport",
    "Esportivo",
    "Sol",
    319,
    "Grafite Preto Oliva",
    "#e9ece5",
    "Quadrado Oval",
  ],
  [
    "Linea Titânio",
    "Minimalista",
    "Grau",
    359,
    "Prata Dourado Grafite",
    "#eeebe6",
    "Coração Diamante",
  ],
].map(([name, shape, category, price, colors, bg, faces], id) => ({
  id,
  name,
  shape,
  category,
  price,
  colors: colors.split(" "),
  bg,
  faces: faces.split(" "),
}));
const geometry = [
  "M25 53Q61 43 125 51Q139 53 136 69L129 96Q125 110 102 112L62 111Q44 110 38 99L25 68Q20 57 25 53Z",
  "M24 65C32 48 74 42 113 48C138 51 141 66 132 83C122 102 92 113 60 110C28 108 15 86 24 65Z",
  "M31 69C32 42 63 39 90 42C121 43 139 57 135 83C130 111 110 123 80 120C49 118 28 99 31 69Z",
  "M27 59Q28 44 52 44L112 47Q140 48 135 70C128 95 94 125 70 123C45 122 22 99 27 59Z",
  "M20 39Q42 51 83 50C125 49 143 61 132 84C122 110 77 119 54 104C37 93 31 70 20 39Z",
  "M25 58Q68 40 126 52Q140 54 135 76Q127 111 90 115Q52 117 38 99Q31 88 25 58Z",
  "M28 62L52 44L101 42L132 57L135 84L111 111L71 117L41 100Z",
  "M18 52Q72 42 136 55L130 80Q126 97 104 104L65 109Q44 110 34 91Z",
  "M26 63Q25 48 51 48L115 50Q136 51 135 65L132 88Q127 104 107 106L55 105Q36 104 31 91Z",
];
const weights = [9, 10, 3.2, 3.7, 8, 4.5, 3.5, 8, 2.7];
let serial = 0;
function frame(id, color, tryOn = false) {
  const m = models[id],
    c = palette[color],
    u = "g" + ++serial,
    w = weights[id],
    d = geometry[id],
    sun = m.category === "Sol",
    tort = color === "Tartaruga";
  const lens = sun ? (id === 1 ? "#412b1e" : "#37423a") : "#c0d2cf";
  const half =
    '<path d="' +
    d +
    '" fill="url(#' +
    u +
    'l)" stroke="url(#' +
    u +
    'f)" stroke-width="' +
    w +
    '" stroke-linejoin="round"/>' +
    (tort
      ? '<path d="' +
        d +
        '" fill="none" stroke="url(#' +
        u +
        'p)" stroke-width="' +
        w +
        '"/>'
      : "") +
    '<g clip-path="url(#' +
    u +
    'clip)"><path d="m35 103 46-63h13l-46 67zm18 9 46-69h5l-45 70z" fill="white" opacity="' +
    (sun ? ".06" : ".21") +
    '"/></g>' +
    (id === 5
      ? '<path d="M24 61Q45 39 126 50L137 56l-3 9Q84 45 28 69Z" fill="' +
        c +
        '"/>'
      : "") +
    (w > 5
      ? '<path d="m25 59 7-1" stroke="#d0bea2" stroke-width="2.4" stroke-linecap="round"/>'
      : "");
  const temple =
    '<path d="M24 60 107 37Q116 35 129 44l40 26" fill="none" stroke="' +
    c +
    '" stroke-width="' +
    w * 0.65 +
    '" stroke-linecap="round"/><path d="m105 37 10 1" stroke="#dbcbb5" opacity=".6" stroke-width="1.5"/>';
  return (
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 156" aria-hidden="true"><defs><clipPath id="' +
    u +
    'clip"><path d="' +
    d +
    '"/></clipPath><linearGradient id="' +
    u +
    'f" x2="0.25" y2="1"><stop stop-color="' +
    c +
    '"/><stop offset=".24" stop-color="' +
    c +
    '"/><stop offset=".45" stop-color="' +
    (w < 5 ? "#e1d4b5" : c) +
    '"/><stop offset=".7" stop-color="' +
    c +
    '"/><stop offset="1" stop-color="' +
    c +
    '"/></linearGradient><linearGradient id="' +
    u +
    'l" x2=".2" y2="1"><stop stop-color="' +
    lens +
    '" stop-opacity="' +
    (tryOn ? (sun ? 0.35 : 0.08) : sun ? 0.97 : 0.22) +
    '"/><stop offset="1" stop-color="' +
    lens +
    '" stop-opacity="' +
    (tryOn ? (sun ? 0.16 : 0.02) : sun ? 0.69 : 0.06) +
    '"/></linearGradient><pattern id="' +
    u +
    'p" width="23" height="15" patternUnits="userSpaceOnUse" patternTransform="rotate(-20)"><path d="m3 0 4 4-2 5-6-1zm13 8 4-2 4 4-3 5-6-2z" fill="#33271e"/><path d="m9 3 3-2 1 4-3 3z" fill="#b57d49"/></pattern></defs>' +
    (tryOn
      ? ""
      : temple +
        '<g transform="translate(300) scale(-1 1)">' +
        temple +
        "</g>") +
    '<path d="M134 64Q150 50 166 64" fill="none" stroke="' +
    c +
    '" stroke-width="' +
    w * 0.85 +
    '"/>' +
    (id === 3
      ? '<path d="M118 48Q150 44 182 48" fill="none" stroke="' +
        c +
        '" stroke-width="3"/>'
      : "") +
    half +
    '<g transform="translate(300) scale(-1 1)">' +
    half +
    "</g></svg>"
  );
}
const money = (n) =>
  n.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
const colors = models.map((m) => m.colors[0]);
let filter = "Todos",
  selected = 0,
  face = "";
const reasons = {
  Oval: "As proporções equilibradas do rosto oval combinam com armações de linhas marcantes, como aviadores e geométricas.",
  Redondo:
    "Armações quadradas ou geométricas criam contraste e ajudam a alongar a face.",
  Quadrado: "Curvas arredondadas e ovais suavizam as linhas da mandíbula.",
  Coração:
    "Armações leves ou com volume na base equilibram a testa mais larga e o queixo fino.",
  Diamante:
    "Modelos ovais e gatinho destacam os olhos e equilibram as maçãs do rosto.",
};
function renderProducts() {
  $("#products").innerHTML = models
    .filter((m) => filter === "Todos" || m.category === filter)
    .map(
      (m) =>
        `<article class="card" data-id="${m.id}"><div class="product-art" style="--bg:${m.bg}">${frame(m.id, colors[m.id])}<span class="tag"><i>${icon(m.category === "Sol" ? "sun" : "glasses")}</i>Óculos de ${m.category.toLowerCase()}</span>${m.faces.includes(face) ? '<span class="match">Combina com seu rosto</span>' : ""}</div><div class="card-info"><div class="product-name"><div><h3>${m.name}</h3><p class="muted">${m.shape}</p></div><div class="swatches">${m.colors.map((c) => `<button class="swatch" style="--sw:${palette[c]}" aria-label="Cor ${c}" title="${c}" aria-pressed="${colors[m.id] === c}" data-color="${c}"></button>`).join("")}</div></div><p class="price">${money(m.price)}</p><div class="card-actions"><button class="btn outline" data-try><i>${icon("scan")}</i>Provar no Rosto</button><button class="btn solid" data-buy>Comprar</button></div></div></article>`,
    )
    .join("");
}
$$("[data-filter]").forEach(
  (b) =>
    (b.onclick = () => {
      filter = b.dataset.filter;
      $$("[data-filter]").forEach((el) =>
        el.setAttribute("aria-pressed", el === b),
      );
      renderProducts();
    }),
);
$("#products").onclick = (e) => {
  const b = e.target.closest("button");
  if (!b) return;
  const id = Number(b.closest("article").dataset.id);
  if (b.dataset.color) {
    colors[id] = b.dataset.color;
    renderProducts();
    $(`[data-id="${id}"] [data-color="${colors[id]}"]`).focus();
  } else if (b.hasAttribute("data-try")) openStudio(id);
  else addItem(id);
};
function closeDialogs() {
  for (const d of $$("dialog[open]")) d.close();
}
$$("[data-close]").forEach(
  (b) => (b.onclick = () => b.closest("dialog").close()),
);
$$("dialog").forEach((d) =>
  d.addEventListener("click", (e) => {
    if (e.target !== d) return;
    const r = d.getBoundingClientRect();
    if (
      e.clientX < r.left ||
      e.clientX > r.right ||
      e.clientY < r.top ||
      e.clientY > r.bottom
    )
      d.close();
  }),
);
const canvas = $("#mirror"),
  ctx = canvas.getContext("2d"),
  video = document.createElement("video");
video.autoplay = true;
video.muted = true;
video.playsInline = true;
let stream = null,
  photo = null,
  overlay = null,
  anim = 0,
  token = 0,
  job = 0,
  timer;
const ranges = [
  ["scale", "Tamanho", 30, 100, 58, "%"],
  ["horizontal", "Horizontal", -50, 50, 0, "%"],
  ["vertical", "Vertical", -50, 50, 0, "%"],
  ["rotation", "Rotação", -45, 45, 0, "°"],
];
$("#sliders").innerHTML = ranges
  .map(
    ([id, title, min, max, val, unit]) =>
      `<label class="slider">${title}<input id="${id}" type="range" min="${min}" max="${max}" value="${val}"><output id="${id}Out">${val}${unit}</output></label>`,
  )
  .join("");
function draw() {
  const src = stream && video.readyState >= 2 ? video : photo;
  ctx.clearRect(0, 0, 800, 680);
  $("#emptyMirror").hidden = !!src;
  if (!src) return;
  const w = src.videoWidth || src.naturalWidth || src.width,
    h = src.videoHeight || src.naturalHeight || src.height;
  const z = Math.min(800 / w, 680 / h),
    sw = w * z,
    sh = h * z;
  ctx.save();
  if (src === video) {
    ctx.translate(800, 0);
    ctx.scale(-1, 1);
  }
  ctx.drawImage(src, (800 - sw) / 2, (680 - sh) / 2, sw, sh);
  ctx.restore();
  if (!overlay) return;
  const width = (sw * +$("#scale").value) / 100;
  ctx.save();
  ctx.translate(
    400 + (sw * +$("#horizontal").value) / 100,
    340 + sh * (+$("#vertical").value / 100 - 0.06),
  );
  ctx.rotate((+$("#rotation").value * Math.PI) / 180);
  ctx.drawImage(overlay, -width / 2, -width * 0.26, width, width * 0.52);
  ctx.restore();
}
function refreshOverlay() {
  const img = new Image();
  overlay = null;
  const myToken = ++token;
  img.onload = () => {
    if (myToken === token) {
      overlay = img;
      draw();
    }
  };
  img.src =
    "data:image/svg+xml;charset=utf-8," +
    encodeURIComponent(frame(selected, colors[selected], true));
}
function refreshControls() {
  for (const [id, , , , , unit] of ranges)
    $("#" + id + "Out").textContent = $("#" + id).value + unit;
  draw();
}
$("#sliders").oninput = refreshControls;
$("#reset").onclick = () => {
  ranges.forEach(([id, , , , val]) => ($("#" + id).value = val));
  refreshControls();
};
$("#model").innerHTML = models
  .map((m) => `<option value="${m.id}">${m.name} · ${m.shape}</option>`)
  .join("");
$("#model").onchange = () => {
  selected = Number($("#model").value);
  refreshOverlay();
};
function openStudio(id = selected) {
  selected = id;
  $("#model").value = id;
  $("#studio").showModal();
  refreshOverlay();
}
$$("[data-open]").forEach((b) => (b.onclick = () => openStudio()));
$("#featured").onclick = () => openStudio(1);
function setFace(value) {
  face = value;
  $("#shape").value = value;
  $("#rec").textContent = value
    ? "Rosto " + value + " — " + reasons[value]
    : "Envie uma selfie para simular a análise facial ou selecione seu formato.";
  renderProducts();
}
function cancelAnalysis() {
  clearInterval(timer);
  $("#analysis").hidden = true;
}
$("#shape").onchange = () => {
  cancelAnalysis();
  setFace($("#shape").value);
};
function analyze(src) {
  cancelAnalysis();
  const tiny = document.createElement("canvas");
  tiny.width = tiny.height = 16;
  const tc = tiny.getContext("2d");
  tc.drawImage(src, 0, 0, 16, 16);
  const px = tc.getImageData(0, 0, 16, 16).data;
  let sum = 0;
  for (let i = 0; i < px.length; i += 4) sum += px[i] + px[i + 1];
  const suggestion = Object.keys(reasons)[sum % 5];
  let pct = 0;
  $("#analysis").hidden = false;
  $("#progress").value = 0;
  timer = setInterval(() => {
    pct += 10;
    $("#progress").value = pct;
    if (pct === 100) {
      cancelAnalysis();
      setFace(suggestion);
      $("#status").textContent =
        "Análise simulada concluída. Você pode corrigir o formato sugerido.";
    }
  }, 120);
}
function stopStream() {
  cancelAnimationFrame(anim);
  if (stream) stream.getTracks().forEach((t) => t.stop());
  stream = null;
  video.srcObject = null;
  $("#camera").innerHTML = "<i>" + icon("camera") + "</i>Abrir câmera";
  $("#camera").disabled = false;
}
function live() {
  draw();
  if (stream) anim = requestAnimationFrame(live);
}
const message = (s) => ($("#status").textContent = s);
$("#camera").onclick = async () => {
  if (stream) {
    if (video.readyState < 2) return;
    const shot = document.createElement("canvas");
    shot.width = video.videoWidth;
    shot.height = video.videoHeight;
    const c = shot.getContext("2d");
    c.translate(shot.width, 0);
    c.scale(-1, 1);
    c.drawImage(video, 0, 0);
    photo = shot;
    stopStream();
    draw();
    analyze(photo);
    message("Foto capturada. Análise simulada em andamento.");
    return;
  }
  const current = ++job;
  cancelAnalysis();
  $("#camera").disabled = true;
  try {
    if (!navigator.mediaDevices?.getUserMedia) throw Error();
    const media = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: "user" },
      audio: false,
    });
    if (current !== job) {
      media.getTracks().forEach((t) => t.stop());
      return;
    }
    stream = media;
    video.srcObject = media;
    await video.play();
    if (current !== job) return;
    $("#camera").textContent = "Tirar foto";
    live();
    message(
      "Ajuste a armação ao vivo ou tire uma foto para simular a análise.",
    );
  } catch {
    if (current === job) {
      stopStream();
      draw();
      message(
        "Câmera indisponível. Verifique a permissão, use HTTPS ou envie uma selfie.",
      );
    }
  } finally {
    if (current === job) $("#camera").disabled = false;
  }
};
$("#file").onchange = async (e) => {
  const f = e.target.files[0];
  if (!f) return;
  const current = ++job;
  stopStream();
  cancelAnalysis();
  const url = URL.createObjectURL(f);
  try {
    const img = new Image();
    img.src = url;
    await img.decode();
    if (current !== job) return;
    photo = img;
    draw();
    message("Selfie carregada. Análise simulada em andamento.");
    analyze(img);
  } catch {
    if (current === job)
      message(
        "Não foi possível ler a imagem. Escolha uma foto em JPG, PNG ou WebP.",
      );
  } finally {
    URL.revokeObjectURL(url);
    e.target.value = "";
  }
};
$("#studio").addEventListener("close", () => {
  ++job;
  stopStream();
  draw();
});
const lenses = {
  "Sem grau": 0,
  "Grau básico": 80,
  "Filtro luz azul": 60,
  "Solar polarizada": 100,
};
let cart = [];
try {
  const saved = JSON.parse(localStorage.getItem("coloqueai.cart") || "[]");
  if (Array.isArray(saved))
    cart = saved.filter(
      (i) =>
        Number.isInteger(i.id) &&
        models[i.id]?.colors.includes(i.color) &&
        Object.hasOwn(lenses, i.lens) &&
        Number.isInteger(i.qty) &&
        i.qty > 0,
    );
} catch {}
const amount = (i) => (models[i.id].price + lenses[i.lens]) * i.qty;
const subtotal = () => cart.reduce((sum, i) => sum + amount(i), 0);
function persist() {
  try {
    localStorage.setItem("coloqueai.cart", JSON.stringify(cart));
  } catch {}
  renderCart();
}
function addItem(id) {
  const same = cart.find(
    (i) => i.id === id && i.color === colors[id] && i.lens === "Sem grau",
  );
  if (same) same.qty++;
  else cart.push({ id, color: colors[id], lens: "Sem grau", qty: 1 });
  persist();
  closeDialogs();
  $("#cart").showModal();
}
function renderCart() {
  $("#count").textContent = cart.reduce((sum, i) => sum + i.qty, 0);
  $("#bagBtn").setAttribute(
    "aria-label",
    "Abrir carrinho, " + $("#count").textContent + " itens",
  );
  $("#cartItems").innerHTML = cart.length
    ? cart
        .map(
          (i, k) =>
            `<article class="item" data-index="${k}"><div class="item-art">${frame(i.id, i.color)}</div><div><h3>${models[i.id].name}</h3><p class="muted">${i.color} · ${money(models[i.id].price)} por armação</p><label class="muted">Tipo de lente<select>${Object.entries(
              lenses,
            )
              .map(
                ([l, extra]) =>
                  `<option value="${l}" ${l === i.lens ? "selected" : ""}>${l}${extra ? " (+ " + money(extra) + ")" : ""}</option>`,
              )
              .join(
                "",
              )}</select></label><div class="qty"><div><button aria-label="Diminuir quantidade" data-op="less">−</button><span>${i.qty}</span><button aria-label="Aumentar quantidade" data-op="more">+</button></div><button class="remove" data-op="remove">Remover</button></div><p class="price">${money(amount(i))}</p></div></article>`,
        )
        .join("")
    : '<div class="empty-cart"><i>' +
      icon("bag") +
      '</i><h3>Seu carrinho está vazio</h3><button class="btn solid" id="browse">Explorar catálogo</button></div>';
  $("#cartFoot").innerHTML = cart.length
    ? `<div class="total"><span>Subtotal</span><strong>${money(subtotal())}</strong></div><button class="btn solid wide" id="pay">Finalizar pedido <i>${icon("arrow")}</i></button>`
    : "";
  if ($("#browse"))
    $("#browse").onclick = () => {
      $("#cart").close();
      $("#catalogo").scrollIntoView();
    };
  if ($("#pay"))
    $("#pay").onclick = () => {
      $("#orderSummary").innerHTML =
        "<strong>Resumo do pedido</strong>" +
        cart
          .map(
            (i) =>
              `<p>${i.qty} × ${models[i.id].name} · ${i.color} · ${i.lens} — ${money(amount(i))}</p>`,
          )
          .join("") +
        '<div class="total">Total <strong>' +
        money(subtotal()) +
        "</strong></div>";
      $("#cart").close();
      $("#checkout").showModal();
    };
}
$("#cartItems").onchange = (e) => {
  if (!e.target.matches("select")) return;
  const i = cart[+e.target.closest("article").dataset.index];
  i.lens = e.target.value;
  const duplicate = cart.find(
    (x) => x !== i && x.id === i.id && x.color === i.color && x.lens === i.lens,
  );
  if (duplicate) {
    duplicate.qty += i.qty;
    cart = cart.filter((x) => x !== i);
  }
  persist();
};
$("#cartItems").onclick = (e) => {
  const b = e.target.closest("[data-op]");
  if (!b) return;
  const k = +b.closest("article").dataset.index;
  if (b.dataset.op === "more") cart[k].qty++;
  else if (b.dataset.op === "remove" || cart[k].qty === 1) cart.splice(k, 1);
  else cart[k].qty--;
  persist();
};
$("#bagBtn").onclick = () => $("#cart").showModal();
$("#studioBuy").onclick = () => addItem(selected);
$("#delivery").onsubmit = (e) => {
  e.preventDefault();
  cart = [];
  persist();
  e.target.reset();
  $("#checkout").close();
  $("#success").showModal();
};
$("#success").addEventListener("close", () => $("#catalogo").scrollIntoView());
renderProducts();
renderCart();
