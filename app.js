"use strict";
const $ = (s, root = document) => root.querySelector(s);
const $$ = (s, root = document) => [...root.querySelectorAll(s)];
const icons = {
  bookmark: '<path d="M6 4h12v17l-6-4-6 4z"/>',
  compare:
    '<rect x="3" y="5" width="18" height="14" rx="3"/><path d="M12 3v18"/>',
  download: '<path d="M12 3v12m-5-5 5 5 5-5M4 16v4h16v-4"/>',
  sliders:
    '<path d="M4 7h4m4 0h8M4 17h10m4 0h2"/><circle cx="10" cy="7" r="2"/><circle cx="16" cy="17" r="2"/>',
  tune: '<path d="M5 5v14m7-14v14m7-14v14M2 10h6m1 5h6m1-7h6"/>',
  down: '<path d="m6 9 6 6 6-6"/>',
  copy: '<rect x="8" y="8" width="12" height="13" rx="2"/><path d="M16 8V3H3v13h5"/>',
  share: '<path d="M12 15V3m-4 4 4-4 4 4M7 10H4v11h16V10h-3"/>',
  glasses:
    '<path d="m2 14 2-8q.3-1.5 2-1m16 9-2-8q-.3-1.5-2-1M10.6 13q1.4-1.8 2.8 0"/><circle cx="6.2" cy="14.6" r="4.3"/><circle cx="17.8" cy="14.6" r="4.3"/>',
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
  "Preto Fosco": "#2d2b30",
  Tartaruga: "#855235",
  "Dourado Fino": "#b8944d",
  Prata: "#8b939e",
  Transparente: "#c4c6cc",
};
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
  const c = palette[color],
    u = "g" + ++serial,
    w = color === "Dourado Fino" ? Math.min(4, weights[id]) : weights[id],
    d = geometry[id],
    tort = color === "Tartaruga";
  const lens = "#c0d2cf";
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
    (tryOn ? ".05" : ".21") +
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
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="' +
    (tryOn ? "0 0 300 156" : "9 24 282 106") +
    '" aria-hidden="true"><defs><clipPath id="' +
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
    (tryOn ? 0.05 : 0.22) +
    '"/><stop offset="1" stop-color="' +
    lens +
    '" stop-opacity="' +
    (tryOn ? 0.01 : 0.06) +
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
const styles = [
  { name: "Wayfarer", id: 0, sample: "Preto Fosco" },
  { name: "Aviador", id: 3, sample: "Dourado Fino" },
  { name: "Redondo", id: 2, sample: "Tartaruga" },
  { name: "Gatinho", id: 4, sample: "Tartaruga" },
  { name: "Clubmaster", id: 5, sample: "Preto Fosco" },
  { name: "Retangular Fino", id: 8, sample: "Prata" },
  { name: "Geométrico", id: 6, sample: "Dourado Fino" },
];
const profiles = {
  Oval: {
    contour: "M20 4C40 4 39 33 29 45Q20 56 11 45C1 33 0 4 20 4Z",
    hint: "Comprido e equilibrado",
    diagnosis:
      "Seu rosto tem proporções equilibradas e contorno suave. Armações bem definidas realçam as maçãs do rosto e mantêm esse equilíbrio.",
    matches: [
      ["Wayfarer", 98],
      ["Aviador", 96],
      ["Geométrico", 94],
    ],
    avoid:
      "Se quiser preservar o equilíbrio natural, evite armações muito mais largas que as têmporas.",
  },
  Redondo: {
    contour: "M20 7C42 7 43 47 20 49C-3 47 -2 7 20 7Z",
    hint: "Bochechas arredondadas",
    diagnosis:
      "Seu rosto tem traços arredondados. Linhas quadradas ou retangulares criam contraste e dão a impressão de uma face mais alongada.",
    matches: [
      ["Wayfarer", 98],
      ["Retangular Fino", 96],
      ["Geométrico", 94],
    ],
    avoid:
      "Se busca mais definição, evite armações redondas pequenas, que repetem as curvas das bochechas.",
  },
  Quadrado: {
    contour: "M6 8Q20 2 34 8Q38 16 35 40Q34 48 26 49H14Q6 48 5 40Q2 15 6 8Z",
    hint: "Mandíbula marcada",
    diagnosis:
      "A largura da testa e a mandíbula marcada dão estrutura ao seu rosto. Lentes curvas suavizam os ângulos e trazem leveza ao olhar.",
    matches: [
      ["Redondo", 98],
      ["Aviador", 96],
      ["Gatinho", 92],
    ],
    avoid:
      "Se quiser suavizar a mandíbula, evite armações retangulares espessas e muito angulares.",
  },
  Coração: {
    contour: "M3 16C2 3 14 3 20 8C28 2 39 4 38 16Q36 33 20 50Q5 33 3 16Z",
    hint: "Testa larga e queixo fino",
    diagnosis:
      "A parte superior do seu rosto é mais ampla e o queixo é delicado. Curvas e aros finos distribuem o destaque entre os olhos e a base do rosto.",
    matches: [
      ["Aviador", 98],
      ["Redondo", 95],
      ["Retangular Fino", 93],
    ],
    avoid:
      "Se quiser equilibrar a testa, evite armações com o topo muito pesado ou pontas muito elevadas.",
  },
  Triangular: {
    contour:
      "M13 6Q20 3 27 6Q33 11 38 39Q39 45 29 49Q20 53 11 49Q1 45 2 39Q7 11 13 6Z",
    hint: "Mandíbula mais larga",
    diagnosis:
      "Sua mandíbula é mais larga que a testa. Armações com destaque na parte superior direcionam o olhar para as sobrancelhas e equilibram as proporções.",
    matches: [
      ["Gatinho", 98],
      ["Clubmaster", 97],
      ["Wayfarer", 93],
    ],
    avoid:
      "Se quiser equilibrar a base do rosto, evite aviadores de aro grosso com grande volume inferior.",
  },
  Diamante: {
    contour:
      "M14 6Q20 2 26 6L38 25Q39 29 35 34L24 48Q20 52 16 48L5 34Q1 29 2 25Z",
    hint: "Maçãs do rosto largas",
    diagnosis:
      "As maçãs do rosto se destacam entre a testa e o queixo mais estreitos. Pontas elevadas ou lentes curvas valorizam os olhos e equilibram as laterais.",
    matches: [
      ["Gatinho", 98],
      ["Redondo", 95],
      ["Clubmaster", 93],
    ],
    avoid:
      "Se quiser suavizar as laterais, evite armações geométricas muito estreitas na linha das maçãs do rosto.",
  },
};
let style = styles[0],
  material = "Preto Fosco",
  face = "",
  source = "demo",
  photo = null;
let overlay = null,
  overlayVersion = 0,
  mediaVersion = 0,
  stream = null,
  animation = 0,
  comparing = false;
let pendingChoice = false,
  saved = null;
const canvas = $("#mirror");
const video = document.createElement("video");
video.muted = true;
video.playsInline = true;
// Position and width are percentages of the uncropped portrait; angle is in degrees.
const portraits = [
  {
    name: "Lucas",
    face: "Quadrado",
    src: "assets/lucas.webp",
    fit: { x: 50.1, y: 38.8, size: 36.2, angle: -0.8 },
    diagnosis:
      "A mandíbula marcada de Lucas ganha contraste com aros redondos e aviadores. As curvas inferiores do Clubmaster também suavizam os ângulos.",
    matches: [
      ["Redondo", 98],
      ["Aviador", 96],
      ["Clubmaster", 93],
    ],
    avoid: [
      ["Retangular Fino", 58],
      ["Geométrico", 54],
    ],
    reason: "Linhas muito retas podem reforçar os ângulos da mandíbula.",
  },
  {
    name: "Rafael",
    face: "Redondo",
    src: "assets/rafael.webp",
    fit: { x: 49.5, y: 40.3, size: 36.8, angle: -0.5 },
    diagnosis:
      "As bochechas arredondadas de Rafael contrastam com os cantos do Wayfarer. Armações retangulares ou geométricas também dão definição ao rosto.",
    matches: [
      ["Wayfarer", 98],
      ["Retangular Fino", 96],
      ["Geométrico", 94],
    ],
    avoid: [["Redondo", 53]],
    reason: "Aros pequenos e circulares repetem a curva das bochechas.",
  },
  {
    name: "Camila",
    face: "Triangular",
    src: "assets/modelo.webp",
    fit: { x: 50, y: 42.2, size: 34, angle: -0.6 },
    diagnosis:
      "A mandíbula de Camila é mais larga que a testa. As pontas do gatinho, o topo do Clubmaster e a ponte dupla do aviador levam o destaque para os olhos.",
    matches: [
      ["Gatinho", 98],
      ["Clubmaster", 97],
      ["Aviador", 93],
    ],
    avoid: [["Retangular Fino", 62]],
    reason:
      "Modelos baixos e estreitos dão pouco destaque à parte superior do rosto.",
  },
  {
    name: "Mariana",
    face: "Oval",
    src: "assets/mariana.webp",
    fit: { x: 50.45, y: 41.9, size: 35.4, angle: -1.2 },
    diagnosis:
      "As proporções equilibradas de Mariana acomodam bem o Wayfarer. O gatinho destaca as maçãs do rosto, e as linhas geométricas contrastam com o contorno suave.",
    matches: [
      ["Wayfarer", 98],
      ["Gatinho", 96],
      ["Geométrico", 94],
    ],
    avoid: [["Redondo", 70]],
    reason:
      "Aros redondos muito pequenos podem acentuar o comprimento do rosto.",
  },
];
let activePortrait = portraits.find((p) => p.name === "Camila");
const demoPicker = $("#demoPicker");
for (const portrait of portraits) {
  const button = document.createElement("button");
  button.type = "button";
  button.dataset.portrait = portrait.name;
  button.innerHTML = `<img alt=""><span><b>${portrait.name}</b><small>${portrait.face}</small></span>`;
  portrait.image = button.querySelector("img");
  portrait.image.addEventListener("load", () => {
    if (source === "demo" && activePortrait === portrait) draw();
  });
  portrait.image.src = portrait.src;
  button.onclick = () => selectPortrait(portrait);
  demoPicker.append(button);
}
function selectPortrait(portrait) {
  ++mediaVersion;
  pendingChoice = false;
  stopCamera();
  $("#camera").disabled = false;
  activePortrait = portrait;
  source = "demo";
  showSource();
  resetFit();
  setFace(portrait.face, portrait);
  message("");
}
const message = (text) => ($("#status").textContent = text);
const controls = [
  { key: "size", name: "Tamanho", min: 12, max: 120, step: 2, unit: "%" },
  { key: "y", name: "Posição vertical", min: 0, max: 100, step: 1, unit: "%" },
  {
    key: "x",
    name: "Posição horizontal",
    min: 0,
    max: 100,
    step: 1,
    unit: "%",
  },
  { key: "angle", name: "Rotação", min: -90, max: 90, step: 2, unit: "°" },
];
let fit = {};
function resetFit() {
  fit =
    source === "demo"
      ? { ...activePortrait.fit }
      : { x: 50, y: 43, size: 53, angle: 0 };
  syncControls();
}
function syncControls() {
  for (const { key, unit } of controls) {
    $("#value-" + key).value = fit[key] + unit;
  }
  draw();
}
function currentImage() {
  return source === "video" && video.readyState >= 2
    ? video
    : source === "photo"
      ? photo
      : activePortrait.image;
}
function imageSize(img) {
  if (img instanceof HTMLImageElement)
    return [img.naturalWidth, img.naturalHeight];
  return [
    img.videoWidth || img.naturalWidth || img.width,
    img.videoHeight || img.naturalHeight || img.height,
  ];
}
function imageBox(img, width, height) {
  const [w, h] = imageSize(img);
  const zoom = (source === "demo" ? Math.max : Math.min)(width / w, height / h);
  return {
    w: w * zoom,
    h: h * zoom,
    left: (width - w * zoom) / 2,
    top: (height - h * zoom) / 2,
  };
}
function compose(target, showFrame) {
  const img = currentImage();
  if (!img || !imageSize(img)[0]) {
    target.getContext("2d").clearRect(0, 0, target.width, target.height);
    return;
  }
  const c = target.getContext("2d"),
    w = target.width,
    h = target.height;
  const box = imageBox(img, w, h);
  c.fillStyle = source === "demo" ? "#caaac1" : "#eeeaf3";
  c.fillRect(0, 0, w, h);
  c.save();
  if (source === "video") {
    c.translate(w, 0);
    c.scale(-1, 1);
  }
  c.drawImage(img, box.left, box.top, box.w, box.h);
  c.restore();
  if (!showFrame || !overlay) return;
  const fw = (box.w * fit.size) / 100;
  c.save();
  c.translate(
    box.left + (box.w * fit.x) / 100,
    box.top + (box.h * fit.y) / 100,
  );
  c.rotate((fit.angle * Math.PI) / 180);
  c.drawImage(overlay, -fw / 2, -fw * 0.26, fw, fw * 0.52);
  c.restore();
}
function draw() {
  compose(canvas, !comparing);
}
function snapshot(withFrame = true) {
  const img = currentImage(),
    [w, h] = imageSize(img),
    factor = Math.min(1, 1600 / Math.max(w, h));
  const out = document.createElement("canvas");
  out.width = Math.max(1, Math.round(w * factor));
  out.height = Math.max(1, Math.round(h * factor));
  compose(out, withFrame);
  return out;
}
new ResizeObserver(() => {
  const r = $(".stage").getBoundingClientRect();
  canvas.width = 1320;
  canvas.height = Math.max(1, Math.round((1320 * r.height) / r.width));
  draw();
}).observe($(".stage"));
function refreshFrame() {
  const version = ++overlayVersion,
    img = new Image();
  overlay = null;
  $("#savePhoto").disabled = $("#choose").disabled = true;
  $("#caption").textContent = style.name;
  $("#capColor").textContent = $("#materialName").textContent = material;
  img.onload = () => {
    if (version !== overlayVersion) return;
    overlay = img;
    draw();
    $("#savePhoto").disabled = $("#choose").disabled = false;
  };
  img.src =
    "data:image/svg+xml;charset=utf-8," +
    encodeURIComponent(frame(style.id, material, true));
}
function selectStyle(name) {
  style = styles.find((s) => s.name === name);
  $$("[data-style]").forEach((b) =>
    b.setAttribute("aria-pressed", b.dataset.style === name),
  );
  refreshFrame();
}
$("#styleGrid").innerHTML = styles
  .map(
    (s) =>
      `<button class="style-tile" data-style="${s.name}" aria-pressed="${s === style}" title="Experimentar ${s.name}">${frame(s.id, s.sample)}<span>${s.name}</span></button>`,
  )
  .join("");
$("#styleGrid").onclick = (e) => {
  const b = e.target.closest("[data-style]");
  if (b) selectStyle(b.dataset.style);
};
$("#materials").innerHTML = Object.entries(palette)
  .map(
    ([name, c]) =>
      `<button class="swatch" data-material="${name}" aria-label="${name}" aria-pressed="${material === name}" title="${name}" style="--color:${c}"></button>`,
  )
  .join("");
$("#materials").onclick = (e) => {
  const b = e.target.closest("[data-material]");
  if (!b) return;
  material = b.dataset.material;
  $$(".swatch").forEach((el) => el.setAttribute("aria-pressed", el === b));
  refreshFrame();
};
$("#controls").innerHTML = controls
  .map(
    ({ key, name }) =>
      `<div class="adjust-row" data-key="${key}"><span>${name}</span><button data-delta="-1" aria-label="Diminuir ${name.toLowerCase()}">−</button><output id="value-${key}"></output><button data-delta="1" aria-label="Aumentar ${name.toLowerCase()}">+</button></div>`,
  )
  .join("");
$("#controls").onclick = (e) => {
  const b = e.target.closest("button");
  if (!b) return;
  const { key, step, min, max } = controls.find(
    (c) => c.key === b.parentNode.dataset.key,
  );
  fit[key] = Math.max(
    min,
    Math.min(max, fit[key] + Number(b.dataset.delta) * step),
  );
  syncControls();
};
$("#reset").onclick = resetFit;
let drag = null;
canvas.onpointerdown = (e) => {
  canvas.setPointerCapture(e.pointerId);
  drag = { x: e.clientX, y: e.clientY, fitX: fit.x, fitY: fit.y };
};
canvas.onpointermove = (e) => {
  if (!drag) return;
  const r = canvas.getBoundingClientRect(),
    img = currentImage();
  if (!img || !imageSize(img)[0]) return;
  const box = imageBox(img, r.width, r.height);
  fit.x = Math.max(
    0,
    Math.min(100, Math.round(drag.fitX + ((e.clientX - drag.x) * 100) / box.w)),
  );
  fit.y = Math.max(
    0,
    Math.min(100, Math.round(drag.fitY + ((e.clientY - drag.y) * 100) / box.h)),
  );
  syncControls();
};
canvas.onlostpointercapture = () => (drag = null);
const compare = $("#compare");
function compareMode(value) {
  comparing = value;
  compare.setAttribute("aria-pressed", value);
  draw();
}
compare.onpointerdown = (e) => {
  compare.setPointerCapture(e.pointerId);
  compareMode(true);
};
compare.onpointerup =
  compare.onlostpointercapture =
  compare.onpointercancel =
  compare.onblur =
    () => compareMode(false);
compare.onkeydown = (e) => {
  if ([" ", "Enter"].includes(e.key)) {
    e.preventDefault();
    compareMode(true);
  }
};
compare.onkeyup = (e) => {
  if ([" ", "Enter"].includes(e.key)) compareMode(false);
};
window.addEventListener("blur", () => compareMode(false));
$("#savePhoto").onclick = () => {
  if (!overlay || !imageSize(currentImage())[0]) return;
  snapshot().toBlob((blob) => {
    if (!blob) return;
    const url = URL.createObjectURL(blob),
      a = document.createElement("a");
    a.href = url;
    a.download = "coloqueAI-" + style.name + ".png";
    a.click();
    setTimeout(() => URL.revokeObjectURL(url), 30000);
    message("Foto com a armação salva em PNG.");
  }, "image/png");
};
function showSource() {
  for (const b of demoPicker.children)
    b.setAttribute(
      "aria-pressed",
      source === "demo" && b.dataset.portrait === activePortrait.name,
    );
  $("#sourceName").textContent = {
    demo: "Demonstração · " + activePortrait.name,
    video: "Câmera ao vivo",
    photo: "Sua selfie",
  }[source];
  $("#camera span").textContent = stream ? "Tirar foto" : "Abrir câmera";
  $("#stopCam").hidden = !stream;
}
function stopCamera() {
  cancelAnimationFrame(animation);
  stream?.getTracks().forEach((t) => t.stop());
  stream = null;
  video.srcObject = null;
  if (source === "video") {
    source = photo ? "photo" : "demo";
    if (source === "demo") setFace(activePortrait.face, activePortrait);
    resetFit();
  }
  showSource();
}
function live() {
  if (source !== "video") return;
  draw();
  animation = requestAnimationFrame(live);
}
function capture() {
  const shot = snapshot(false),
    adjusted = { ...fit };
  stopCamera();
  source = "photo";
  photo = shot;
  setFace("");
  fit = adjusted;
  syncControls();
  showSource();
}
$("#camera").onclick = async () => {
  if (stream && source === "video") {
    capture();
    openGuide();
    return;
  }
  const version = ++mediaVersion;
  $("#camera").disabled = true;
  try {
    const media = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: "user" },
      audio: false,
    });
    if (version !== mediaVersion) {
      media.getTracks().forEach((t) => t.stop());
      return;
    }
    stream = media;
    video.srcObject = media;
    await video.play();
    if (version !== mediaVersion) return;
    source = "video";
    setFace("");
    resetFit();
    showSource();
    live();
    message(
      "Câmera ao vivo. Arraste a armação para alinhar aos olhos ou tire uma foto para identificar seu formato.",
    );
  } catch {
    if (version === mediaVersion) {
      stopCamera();
      message(
        "Não foi possível abrir a câmera. Permita o acesso por HTTPS ou envie uma selfie.",
      );
    }
  } finally {
    if (version === mediaVersion) $("#camera").disabled = false;
  }
};
$("#stopCam").onclick = () => {
  ++mediaVersion;
  stopCamera();
  message("Câmera desligada.");
};
window.addEventListener("pagehide", () => {
  ++mediaVersion;
  stopCamera();
});
$("#upload").onclick = () => $("#file").click();
$("#file").onchange = async (e) => {
  const file = e.target.files[0];
  if (!file) return;
  const version = ++mediaVersion;
  stopCamera();
  $("#camera").disabled = false;
  const url = URL.createObjectURL(file);
  try {
    const img = new Image();
    img.src = url;
    await img.decode();
    if (version !== mediaVersion) return;
    photo = img;
    source = "photo";
    setFace("");
    resetFit();
    showSource();
    message("Selfie carregada. Compare seu contorno com os formatos do guia.");
    openGuide();
  } catch {
    if (version === mediaVersion)
      message(
        "Não foi possível ler essa foto. Tente uma imagem JPG, PNG ou WebP.",
      );
  } finally {
    URL.revokeObjectURL(url);
    e.target.value = "";
  }
};
function openGuide() {
  if (!imageSize(currentImage())[0]) return;
  $("#reference").src = snapshot(false).toDataURL("image/jpeg", 0.77);
  $("#guide").showModal();
}
$("#shapes").innerHTML = Object.entries(profiles)
  .map(
    ([name, p]) =>
      `<button class="shape" data-face="${name}"><svg viewBox="0 0 42 55" aria-hidden="true"><path d="${p.contour}" fill="#ece4fc" stroke="currentColor" stroke-width="2"/><path d="M10 22l5-1m10 0 5 1m-10 2-1 6h3m-6 6q4 2 8 0" stroke="currentColor" fill="none" stroke-linecap="round"/></svg><span><b>${name}</b><small>${p.hint}</small></span></button>`,
  )
  .join("");
function setFace(name, portrait = null) {
  face = name;
  const p = portrait || profiles[name];
  $("#results").hidden = !p;
  $("#openGuide").innerHTML =
    (p ? "Alterar formato" : "Identificar meu formato") +
    " <i>" +
    icon("arrow") +
    "</i>";
  $("#diagnosisLead").textContent = p
    ? "Rosto " + name.toLowerCase() + " · " + p.diagnosis
    : "Identifique o formato do seu rosto e descubra quais armações valorizam seus traços.";
  $("#results").innerHTML = p
    ? `<div class="result-grid"><div><h3>Estilos recomendados</h3><div class="matches">${p.matches.map(([s, n]) => `<button data-match="${s}" aria-label="Experimentar ${s}, ${n}% de compatibilidade">${s}<strong>${n}%</strong></button>`).join("")}</div><p class="small-note">Compatibilidade de estilo estimada para este formato.</p></div><div><h3>Estilos a evitar</h3>${portrait ? `<ul class="avoid-scores">${portrait.avoid.map(([s, n]) => `<li>${s} <strong>${n}%</strong></li>`).join("")}</ul><p>${portrait.reason}</p>` : `<p>${p.avoid}</p>`}</div></div>`
    : "";
}
$("#results").onclick = (e) => {
  const b = e.target.closest("[data-match]");
  if (b) {
    selectStyle(b.dataset.match);
    $("#provador").scrollIntoView();
  }
};
$("#openGuide").onclick = () => {
  pendingChoice = false;
  openGuide();
};
$("#shapes").onclick = (e) => {
  const b = e.target.closest("[data-face]");
  if (!b) return;
  setFace(b.dataset.face);
  const finish = pendingChoice;
  pendingChoice = false;
  $("#guide").close();
  if (finish) saveChoice();
  else {
    $("#diagnostico").scrollIntoView();
    message(
      "Diagnóstico pronto. Toque em um estilo recomendado para experimentar.",
    );
  }
};
$$("[data-close]").forEach(
  (b) => (b.onclick = () => b.closest("dialog").close()),
);
$("#guide").addEventListener("close", () => (pendingChoice = false));
const storageKey = "coloqueai.estilo.v1";
try {
  const record = JSON.parse(localStorage.getItem(storageKey));
  if (
    record &&
    styles.some((s) => s.name === record.style) &&
    Object.hasOwn(palette, record.material) &&
    Object.hasOwn(profiles, record.face) &&
    typeof record.image === "string" &&
    record.image.startsWith("data:image/jpeg;base64,")
  )
    saved = record;
} catch {}
function openChoice() {
  $("#choiceStatus").textContent = "";
  const box = $("#choiceBody");
  if (saved) {
    box.innerHTML = `<img alt="Sua foto com a armação escolhida"><dl class="choice-data"><div><dt>Estilo</dt><dd>${saved.style}</dd></div><div><dt>Cor e material</dt><dd>${saved.material}</dd></div><div><dt>Formato do rosto</dt><dd>${saved.face}</dd></div></dl><div class="choice-actions"><button class="primary" id="copy"><i>${icon("copy")}</i>Copiar resumo</button><button class="outline" id="share"><i>${icon("share")}</i>Enviar escolha</button></div>`;
    box.querySelector("img").src = saved.image;
    $("#copy").onclick = copyChoice;
    $("#share").onclick = shareChoice;
  } else {
    box.innerHTML =
      '<p class="choice-note">Experimente as armações no espelho e toque em “Escolher este estilo” para guardar sua foto e os detalhes aqui.</p><div class="choice-actions"><button class="primary" id="back">Ir ao provador</button></div>';
    $("#back").onclick = () => {
      $("#choice").close();
      $("#provador").scrollIntoView();
    };
  }
  $("#choice").showModal();
}
function saveChoice() {
  if (!overlay) return;
  saved = {
    style: style.name,
    material,
    face,
    image: snapshot().toDataURL("image/jpeg", 0.86),
  };
  let persisted = true;
  try {
    localStorage.setItem(storageKey, JSON.stringify(saved));
  } catch {
    persisted = false;
  }
  openChoice();
  $("#choiceStatus").textContent = persisted
    ? "Escolha salva neste navegador."
    : "Escolha disponível nesta sessão. Copie ou envie o resumo para guardá-lo.";
}
$("#choose").onclick = () => {
  if (source === "demo") {
    $("#choiceBody").innerHTML =
      '<p class="choice-note">Use uma selfie para guardar uma foto sua com a armação escolhida.</p><div class="choice-actions"><button class="primary" id="addSelfie">Enviar selfie</button><button class="outline" id="addCamera">Abrir câmera</button></div>';
    $("#choiceStatus").textContent = "";
    $("#choice").showModal();
    $("#addSelfie").onclick = () => {
      $("#choice").close();
      pendingChoice = true;
      $("#file").click();
    };
    $("#addCamera").onclick = () => {
      $("#choice").close();
      pendingChoice = true;
      $("#camera").click();
    };
    return;
  }
  if (source === "video") capture();
  if (!face) {
    pendingChoice = true;
    openGuide();
    return;
  }
  saveChoice();
};
$("#myChoice").onclick = openChoice;
function summaryText() {
  return `Meu estilo escolhido no coloqueAI\nArmação: ${saved.style}\nCor e material: ${saved.material}\nFormato do rosto: ${saved.face}`;
}
async function copyChoice() {
  try {
    await navigator.clipboard.writeText(summaryText());
    $("#choiceStatus").textContent =
      "Resumo copiado. Cole na conversa para enviar sua escolha.";
  } catch {
    if (!$("#manualCopy"))
      $("#choiceBody").insertAdjacentHTML(
        "beforeend",
        '<textarea id="manualCopy" aria-label="Resumo da escolha" readonly rows="4"></textarea>',
      );
    $("#manualCopy").value = summaryText();
    $("#manualCopy").select();
    $("#choiceStatus").textContent =
      "Copie o texto selecionado para compartilhar.";
  }
}
async function shareChoice() {
  if (!navigator.share) {
    await copyChoice();
    return;
  }
  try {
    const data = { title: "Meu estilo escolhido", text: summaryText() };
    const bytes = Uint8Array.from(atob(saved.image.split(",")[1]), (c) =>
      c.charCodeAt(0),
    );
    const file = new File([bytes], "meu-estilo-coloqueAI.jpg", {
      type: "image/jpeg",
    });
    if (navigator.canShare?.({ files: [file] })) data.files = [file];
    await navigator.share(data);
    $("#choiceStatus").textContent = "Escolha compartilhada.";
  } catch (e) {
    if (e.name !== "AbortError") await copyChoice();
  }
}
const navLinks = $$("nav a");
function markNav(id) {
  for (const a of navLinks) {
    a.classList.toggle("active", a.hash === id);
    if (a.hash === id) a.setAttribute("aria-current", "location");
    else a.removeAttribute("aria-current");
  }
}
navLinks.forEach((a) => (a.onclick = () => markNav(a.hash)));
function updateNavigation() {
  const reachedGuide =
    window.scrollY > 60 &&
    $("#diagnostico").getBoundingClientRect().bottom <= innerHeight + 20;
  markNav(reachedGuide ? "#diagnostico" : "#provador");
}
window.addEventListener("scroll", updateNavigation, { passive: true });
updateNavigation();
selectPortrait(activePortrait);
refreshFrame();
