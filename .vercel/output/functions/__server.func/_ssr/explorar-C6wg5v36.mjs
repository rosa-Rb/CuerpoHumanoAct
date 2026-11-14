import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { t as SiteShell } from "./site-shell-B0vT6skY.mjs";
import { a as RotateCcw, d as Dumbbell, g as Bone, l as Hand, m as CircleDot, o as Play, r as Star, s as Heart, t as X, u as Eye } from "../_libs/lucide-react.mjs";
import { a as DialogPortal, i as DialogOverlay, n as DialogClose, o as DialogTitle, r as DialogContent, t as Dialog } from "../_libs/@radix-ui/react-dialog+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/explorar-C6wg5v36.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var SYSTEMS = [
	{
		id: "piel",
		name: "Piel"
	},
	{
		id: "huesos",
		name: "Huesos"
	},
	{
		id: "musculos",
		name: "Músculos"
	},
	{
		id: "organos",
		name: "Órganos"
	},
	{
		id: "articulaciones",
		name: "Articulaciones"
	},
	{
		id: "sentidos",
		name: "Sentidos"
	}
];
var TONES = [
	{
		id: "claro",
		name: "Claro"
	},
	{
		id: "medio",
		name: "Medio"
	},
	{
		id: "profundo",
		name: "Profundo"
	}
];
var DEFAULT_SKIN = {
	piel: 1,
	huesos: .08,
	musculos: .1,
	organos: .34,
	articulaciones: .42,
	sentidos: .94
};
var smile = "Smile and Learn";
var PARTS = [
	{
		id: "piel",
		system: "piel",
		name: "Piel",
		blurb: "Cubre todo el cuerpo y siente frío, calor y roce.",
		dato: "El órgano más grande",
		image: "/anatomy/skinlayers.png",
		video: "Hl3r0LG2t3c",
		videoTitle: "El sentido del tacto",
		channel: smile
	},
	{
		id: "craneo",
		system: "huesos",
		name: "Cráneo",
		blurb: "Un casco de huesos que protege el cerebro.",
		dato: "22 huesos unidos",
		image: "/anatomy/skeleton.png",
		video: "qBNb8FwOlzQ",
		videoTitle: "Los huesos para niños",
		channel: smile
	},
	{
		id: "columna",
		system: "huesos",
		name: "Columna",
		blurb: "Te mantiene en pie y deja pasar los nervios.",
		dato: "33 vértebras",
		image: "/anatomy/skeleton.png",
		video: "qBNb8FwOlzQ",
		videoTitle: "Los huesos para niños",
		channel: smile
	},
	{
		id: "costillas",
		system: "huesos",
		name: "Costillas",
		blurb: "Forman una jaula para el corazón y los pulmones.",
		dato: "12 pares",
		image: "/anatomy/skeleton.png",
		video: "qBNb8FwOlzQ",
		videoTitle: "Los huesos para niños",
		channel: smile
	},
	{
		id: "pelvis",
		system: "huesos",
		name: "Pelvis",
		blurb: "Une la columna con las piernas y sostiene el abdomen.",
		dato: "Hueso de la cadera",
		image: "/anatomy/skeleton.png",
		video: "qBNb8FwOlzQ",
		videoTitle: "Los huesos para niños",
		channel: smile
	},
	{
		id: "humero",
		system: "huesos",
		name: "Húmero",
		blurb: "El hueso largo del brazo, del hombro al codo.",
		dato: "Uno en cada brazo",
		image: "/anatomy/skeleton.png",
		video: "qBNb8FwOlzQ",
		videoTitle: "Los huesos para niños",
		channel: smile
	},
	{
		id: "femur",
		system: "huesos",
		name: "Fémur",
		blurb: "El hueso más largo y fuerte. Está en el muslo.",
		dato: "El más largo",
		image: "/anatomy/skeleton.png",
		video: "qBNb8FwOlzQ",
		videoTitle: "Los huesos para niños",
		channel: smile
	},
	{
		id: "deltoides",
		system: "musculos",
		name: "Deltoides",
		blurb: "Levanta el brazo hacia arriba y hacia el lado.",
		dato: "En el hombro",
		image: "/anatomy/muscles.png",
		video: "gmc6QIanvD0",
		videoTitle: "Los músculos para niños",
		channel: smile
	},
	{
		id: "biceps",
		system: "musculos",
		name: "Bíceps",
		blurb: "Se acorta y dobla el codo cuando levantas algo.",
		dato: "Dobla el brazo",
		image: "/anatomy/muscles.png",
		video: "gmc6QIanvD0",
		videoTitle: "Los músculos para niños",
		channel: smile
	},
	{
		id: "abdominales",
		system: "musculos",
		name: "Abdominales",
		blurb: "Sostienen el centro del cuerpo y ayudan a girar.",
		dato: "Protegen por dentro",
		image: "/anatomy/muscles.png",
		video: "gmc6QIanvD0",
		videoTitle: "Los músculos para niños",
		channel: smile
	},
	{
		id: "cuadriceps",
		system: "musculos",
		name: "Cuádriceps",
		blurb: "Estira la rodilla para caminar, saltar y patear.",
		dato: "4 músculos",
		image: "/anatomy/muscles.png",
		video: "gmc6QIanvD0",
		videoTitle: "Los músculos para niños",
		channel: smile
	},
	{
		id: "cerebro",
		system: "organos",
		name: "Cerebro",
		blurb: "Piensa, recuerda y manda cada movimiento.",
		dato: "Centro de mando",
		image: "/anatomy/brain.png",
		video: "-_GXk4HZML4",
		videoTitle: "El sistema nervioso",
		channel: smile
	},
	{
		id: "corazon",
		system: "organos",
		name: "Corazón",
		blurb: "Un músculo que empuja la sangre sin parar.",
		dato: "Como tu puño",
		image: "/anatomy/heart.png",
		video: "S3jJj68dBxw",
		videoTitle: "El sistema circulatorio",
		channel: smile
	},
	{
		id: "pulmones",
		system: "organos",
		name: "Pulmones",
		blurb: "Llenan el cuerpo de aire y sueltan lo que sobra.",
		dato: "Son dos",
		image: "/anatomy/lungs.png",
		video: "LbqHZAstRcQ",
		videoTitle: "El sistema respiratorio",
		channel: smile
	},
	{
		id: "higado",
		system: "organos",
		name: "Hígado",
		blurb: "Limpia la sangre y guarda energía de la comida.",
		dato: "Órgano interno grande",
		image: "/anatomy/digest.png",
		video: "_qZSAjJOuSg",
		videoTitle: "El sistema digestivo",
		channel: smile
	},
	{
		id: "estomago",
		system: "organos",
		name: "Estómago",
		blurb: "Mezcla la comida con jugos y la va ablandando.",
		dato: "Como una bolsa",
		image: "/anatomy/digest.png",
		video: "_qZSAjJOuSg",
		videoTitle: "El sistema digestivo",
		channel: smile
	},
	{
		id: "intestinos",
		system: "organos",
		name: "Intestinos",
		blurb: "Toman lo útil de la comida y dejan pasar el resto.",
		dato: "Varios metros",
		image: "/anatomy/digest.png",
		video: "_qZSAjJOuSg",
		videoTitle: "El sistema digestivo",
		channel: smile
	},
	{
		id: "hombro",
		system: "articulaciones",
		name: "Hombro",
		blurb: "Muy móvil: el brazo puede girar en círculo.",
		dato: "Bola y cavidad",
		image: "/anatomy/skeleton.png",
		video: "zBj34cis3SU",
		videoTitle: "El sistema locomotor",
		channel: smile
	},
	{
		id: "codo",
		system: "articulaciones",
		name: "Codo",
		blurb: "Dobla y estira el brazo como una bisagra.",
		dato: "Bisagra",
		image: "/anatomy/skeleton.png",
		video: "zBj34cis3SU",
		videoTitle: "El sistema locomotor",
		channel: smile
	},
	{
		id: "muneca",
		system: "articulaciones",
		name: "Muñeca",
		blurb: "Deja que la mano gire, suba y baje.",
		dato: "8 huesitos",
		image: "/anatomy/skeleton.png",
		video: "zBj34cis3SU",
		videoTitle: "El sistema locomotor",
		channel: smile
	},
	{
		id: "cadera",
		system: "articulaciones",
		name: "Cadera",
		blurb: "Une el fémur con la pelvis y aguanta el peso.",
		dato: "Fuerte y estable",
		image: "/anatomy/skeleton.png",
		video: "zBj34cis3SU",
		videoTitle: "El sistema locomotor",
		channel: smile
	},
	{
		id: "rodilla",
		system: "articulaciones",
		name: "Rodilla",
		blurb: "Dobla la pierna. La rótula la protege por delante.",
		dato: "Bisagra con rótula",
		image: "/anatomy/knee.png",
		video: "zBj34cis3SU",
		videoTitle: "El sistema locomotor",
		channel: smile
	},
	{
		id: "tobillo",
		system: "articulaciones",
		name: "Tobillo",
		blurb: "Mueve el pie para caminar y guardar el equilibrio.",
		dato: "Une pierna y pie",
		image: "/anatomy/skeleton.png",
		video: "zBj34cis3SU",
		videoTitle: "El sistema locomotor",
		channel: smile
	},
	{
		id: "vista",
		system: "sentidos",
		name: "Vista",
		blurb: "Los ojos captan la luz y el cerebro arma la imagen.",
		dato: "Ojos",
		image: "/anatomy/eye.png",
		video: "uvCZMWt1m0U",
		videoTitle: "El ojo y sus partes",
		channel: smile
	},
	{
		id: "oido",
		system: "sentidos",
		name: "Oído",
		blurb: "Recoge el sonido y también ayuda a no caerte.",
		dato: "Oír y equilibrar",
		image: "/anatomy/ear.png",
		video: "RGypVuzAqkc",
		videoTitle: "El oído y sus partes",
		channel: smile
	},
	{
		id: "olfato",
		system: "sentidos",
		name: "Olfato",
		blurb: "La nariz avisa si algo huele rico, raro o peligroso.",
		dato: "Nariz",
		image: "/anatomy/nose.svg",
		video: "-kqA6_mVH6Y",
		videoTitle: "El olfato",
		channel: smile
	},
	{
		id: "gusto",
		system: "sentidos",
		name: "Gusto",
		blurb: "La lengua prueba dulce, salado, ácido y amargo.",
		dato: "Miles de papilas",
		image: "/anatomy/tongue.svg",
		video: "982sliAnKNc",
		videoTitle: "El sentido del gusto",
		channel: smile
	},
	{
		id: "tacto",
		system: "sentidos",
		name: "Tacto",
		blurb: "La piel nota textura, calor, frío y presión.",
		dato: "En todo el cuerpo",
		image: "/anatomy/skinlayers.png",
		video: "Hl3r0LG2t3c",
		videoTitle: "El sentido del tacto",
		channel: smile
	}
];
function partsOf(system) {
	return PARTS.filter((part) => part.system === system);
}
function partById(id) {
	return PARTS.find((part) => part.id === id) ?? PARTS[0];
}
var P = {
	shoulderL: [116, 196],
	elbowL: [68, 352],
	wristL: [46, 492],
	palmL: [38, 542],
	shoulderR: [284, 196],
	elbowR: [332, 352],
	wristR: [354, 492],
	palmR: [362, 542],
	hipL: [164, 500],
	kneeL: [156, 672],
	ankleL: [152, 824],
	hipR: [236, 500],
	kneeR: [244, 672],
	ankleR: [248, 824]
};
function limb(a, b, w1, w2) {
	const dx = b[0] - a[0];
	const dy = b[1] - a[1];
	const len = Math.hypot(dx, dy) || 1;
	const px = -dy / len;
	const py = dx / len;
	const side = (pt, w, s) => [pt[0] + px * w * s, pt[1] + py * w * s];
	const a1 = side(a, w1, .5);
	const b1 = side(b, w2, .5);
	const b2 = side(b, w2, -.5);
	const a2 = side(a, w1, -.5);
	return `M ${a1[0].toFixed(1)} ${a1[1].toFixed(1)} L ${b1[0].toFixed(1)} ${b1[1].toFixed(1)} L ${b2[0].toFixed(1)} ${b2[1].toFixed(1)} L ${a2[0].toFixed(1)} ${a2[1].toFixed(1)} Z`;
}
function along(a, b, t) {
	return [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t];
}
function inset(a, b, dist) {
	const dx = b[0] - a[0];
	const dy = b[1] - a[1];
	const len = Math.hypot(dx, dy) || 1;
	return [[a[0] + dx / len * dist, a[1] + dy / len * dist], [b[0] - dx / len * dist, b[1] - dy / len * dist]];
}
function shift(a, b, dist) {
	const dx = b[0] - a[0];
	const dy = b[1] - a[1];
	const len = Math.hypot(dx, dy) || 1;
	const px = -dy / len * dist;
	const py = dx / len * dist;
	return [[a[0] + px, a[1] + py], [b[0] + px, b[1] + py]];
}
var HITS = {
	piel: [{
		id: "piel",
		x: 200,
		y: 320
	}, {
		id: "piel",
		x: 156,
		y: 580
	}],
	huesos: [
		{
			id: "craneo",
			x: 200,
			y: 86
		},
		{
			id: "columna",
			x: 200,
			y: 330
		},
		{
			id: "costillas",
			x: 154,
			y: 286
		},
		{
			id: "costillas",
			x: 246,
			y: 286
		},
		{
			id: "pelvis",
			x: 200,
			y: 478
		},
		{
			id: "humero",
			x: 92,
			y: 274
		},
		{
			id: "humero",
			x: 308,
			y: 274
		},
		{
			id: "femur",
			x: 160,
			y: 586
		},
		{
			id: "femur",
			x: 240,
			y: 586
		}
	],
	musculos: [
		{
			id: "deltoides",
			x: 112,
			y: 214
		},
		{
			id: "deltoides",
			x: 288,
			y: 214
		},
		{
			id: "biceps",
			x: 88,
			y: 286
		},
		{
			id: "biceps",
			x: 312,
			y: 286
		},
		{
			id: "abdominales",
			x: 200,
			y: 390
		},
		{
			id: "cuadriceps",
			x: 158,
			y: 575
		},
		{
			id: "cuadriceps",
			x: 242,
			y: 575
		}
	],
	organos: [
		{
			id: "cerebro",
			x: 200,
			y: 96
		},
		{
			id: "pulmones",
			x: 162,
			y: 286
		},
		{
			id: "pulmones",
			x: 238,
			y: 286
		},
		{
			id: "corazon",
			x: 218,
			y: 300
		},
		{
			id: "higado",
			x: 160,
			y: 372
		},
		{
			id: "estomago",
			x: 232,
			y: 368
		},
		{
			id: "intestinos",
			x: 200,
			y: 430
		}
	],
	articulaciones: [
		{
			id: "hombro",
			x: 116,
			y: 196
		},
		{
			id: "hombro",
			x: 284,
			y: 196
		},
		{
			id: "codo",
			x: 68,
			y: 352
		},
		{
			id: "codo",
			x: 332,
			y: 352
		},
		{
			id: "muneca",
			x: 46,
			y: 492
		},
		{
			id: "muneca",
			x: 354,
			y: 492
		},
		{
			id: "cadera",
			x: 164,
			y: 500
		},
		{
			id: "cadera",
			x: 236,
			y: 500
		},
		{
			id: "rodilla",
			x: 156,
			y: 672
		},
		{
			id: "rodilla",
			x: 244,
			y: 672
		},
		{
			id: "tobillo",
			x: 152,
			y: 824
		},
		{
			id: "tobillo",
			x: 248,
			y: 824
		}
	],
	sentidos: [
		{
			id: "vista",
			x: 182,
			y: 100
		},
		{
			id: "vista",
			x: 218,
			y: 100
		},
		{
			id: "oido",
			x: 148,
			y: 112
		},
		{
			id: "oido",
			x: 252,
			y: 112
		},
		{
			id: "olfato",
			x: 200,
			y: 122
		},
		{
			id: "gusto",
			x: 200,
			y: 142
		},
		{
			id: "tacto",
			x: 38,
			y: 560
		},
		{
			id: "tacto",
			x: 362,
			y: 560
		}
	]
};
var NAMES = {
	piel: "Piel",
	craneo: "Cráneo",
	columna: "Columna",
	costillas: "Costillas",
	pelvis: "Pelvis",
	humero: "Húmero",
	femur: "Fémur",
	deltoides: "Deltoides",
	biceps: "Bíceps",
	abdominales: "Abdominales",
	cuadriceps: "Cuádriceps",
	cerebro: "Cerebro",
	corazon: "Corazón",
	pulmones: "Pulmones",
	higado: "Hígado",
	estomago: "Estómago",
	intestinos: "Intestinos",
	hombro: "Hombro",
	codo: "Codo",
	muneca: "Muñeca",
	cadera: "Cadera",
	rodilla: "Rodilla",
	tobillo: "Tobillo",
	vista: "Vista",
	oido: "Oído",
	olfato: "Olfato",
	gusto: "Gusto",
	tacto: "Tacto"
};
function BoneLine({ a, b, w, hot }) {
	const [p, q] = inset(a, b, 10);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
		className: hot ? "is-hot" : void 0,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
			x1: p[0],
			y1: p[1],
			x2: q[0],
			y2: q[1],
			stroke: "url(#cr-bone)",
			strokeWidth: w,
			strokeLinecap: "round"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
			x1: p[0],
			y1: p[1],
			x2: q[0],
			y2: q[1],
			stroke: "var(--color-card)",
			strokeWidth: Math.max(2, w * .26),
			strokeLinecap: "round",
			opacity: .75
		})]
	});
}
function Fingers({ wrist, palm }) {
	const dx = palm[0] - wrist[0];
	const dy = palm[1] - wrist[1];
	const len = Math.hypot(dx, dy) || 1;
	const ux = dx / len;
	const uy = dy / len;
	const px = -uy;
	const py = ux;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: [
		-1.2,
		-.4,
		.4,
		1.15
	].map((spread, index) => {
		const origin = [palm[0] + px * spread * 8, palm[1] + py * spread * 8];
		const reach = index === 0 || index === 3 ? 22 : 30;
		const tip = [origin[0] + ux * reach + px * spread * 2, origin[1] + uy * reach + py * spread * 2];
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: limb(origin, tip, 8, 5.5) }, spread);
	}) });
}
function BodyFigure({ system, skin, tone, activeId, shakeId, showLabel, onPick }) {
	const peeling = system === "piel" && skin < .82;
	const boneOp = system === "huesos" || system === "articulaciones" ? 1 : system === "musculos" ? .18 : system === "organos" ? .12 : peeling ? .22 : 0;
	const muscleOp = system === "musculos" ? 1 : 0;
	const organOp = system === "organos" || peeling ? 1 : system === "sentidos" ? .28 : 0;
	const jointOp = system === "articulaciones" ? 1 : 0;
	const hot = (id) => activeId === id;
	const hits = HITS[system];
	const labelHit = hits.find((hit) => hit.id === activeId) ?? null;
	const focus = system === "sentidos" ? "translate(200px, 120px) scale(1.7) translate(-200px, -120px)" : "translate(0px, 0px) scale(1)";
	const [radiusL, ulnaL] = [shift(P.elbowL, P.wristL, -5), shift(P.elbowL, P.wristL, 5)];
	const [radiusR, ulnaR] = [shift(P.elbowR, P.wristR, -5), shift(P.elbowR, P.wristR, 5)];
	const [fibulaL, tibiaL] = [shift(P.kneeL, P.ankleL, -6), shift(P.kneeL, P.ankleL, 5)];
	const [fibulaR, tibiaR] = [shift(P.kneeR, P.ankleR, -5), shift(P.kneeR, P.ankleR, 6)];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 400 900",
		className: `body-svg tone-${tone} sys-${system}`,
		role: "group",
		"aria-label": "Figura del cuerpo humano",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("defs", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
					id: "cr-bone",
					x1: "0",
					y1: "0",
					x2: "1",
					y2: "1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: "0",
						stopColor: "var(--color-bone-lite)"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: "1",
						stopColor: "var(--color-bone-deep)"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
					id: "cr-muscle",
					x1: "0",
					y1: "0",
					x2: "0",
					y2: "1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: "0",
						stopColor: "var(--color-muscle-lite)"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: "1",
						stopColor: "var(--color-muscle-deep)"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
					id: "cr-skin",
					x1: "0.2",
					y1: "0",
					x2: "0.9",
					y2: "1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: "0",
						stopColor: "var(--skin-base)"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: "1",
						stopColor: "var(--skin-shade)"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("filter", {
					id: "cr-glow",
					x: "-60%",
					y: "-60%",
					width: "220%",
					height: "220%",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("feDropShadow", {
						dx: "0",
						dy: "0",
						stdDeviation: "3.2",
						floodColor: "var(--color-gold)",
						floodOpacity: "0.95"
					})
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
				cx: "200",
				cy: "868",
				rx: "70",
				ry: "10",
				fill: "var(--color-ink)",
				opacity: "0.1"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
				className: "figure-root",
				style: { transform: focus },
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
						style: { opacity: boneOp },
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
								className: hot("craneo") ? "is-hot" : void 0,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
										cx: "200",
										cy: "102",
										rx: "44",
										ry: "54",
										fill: "url(#cr-bone)"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
										cx: "184",
										cy: "104",
										rx: "11",
										ry: "9",
										fill: "var(--color-ink)",
										opacity: "0.75"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
										cx: "216",
										cy: "104",
										rx: "11",
										ry: "9",
										fill: "var(--color-ink)",
										opacity: "0.75"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
										d: "M200 114 L193 132 L207 132 Z",
										fill: "var(--color-ink)",
										opacity: "0.5"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
										x: "186",
										y: "136",
										width: "28",
										height: "10",
										rx: "2",
										fill: "var(--color-card)"
									})
								]
							}),
							Array.from({ length: 18 }, (_, index) => {
								const y = 164 + index * 16;
								const w = index < 5 ? 12 : index < 12 ? 14 : 16;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
									x: 200 - w / 2,
									y,
									width: w,
									height: 10,
									rx: 3,
									fill: "url(#cr-bone)",
									className: hot("columna") ? "is-hot" : void 0
								}, y);
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
								fill: "none",
								stroke: "url(#cr-bone)",
								strokeLinecap: "round",
								className: hot("costillas") ? "is-hot" : void 0,
								children: [Array.from({ length: 7 }, (_, index) => {
									const y = 214 + index * 16;
									const span = 58 - index * 2.4;
									return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
										strokeWidth: "4.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: `M200 ${y} Q ${200 - span} ${y + 14} ${196 - span} ${y + 28}` }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: `M200 ${y} Q ${200 + span} ${y + 14} ${204 + span} ${y + 28}` })]
									}, y);
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
									d: "M200 210 V328",
									strokeWidth: "7"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
								d: "M200 188 Q158 176 116 196",
								fill: "none",
								stroke: "url(#cr-bone)",
								strokeWidth: "6",
								strokeLinecap: "round"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
								d: "M200 188 Q242 176 284 196",
								fill: "none",
								stroke: "url(#cr-bone)",
								strokeWidth: "6",
								strokeLinecap: "round"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
								className: hot("pelvis") ? "is-hot" : void 0,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
										d: "M150 458 C146 434 172 418 200 420 C228 418 254 434 250 458 C246 486 226 502 200 496 C174 502 154 486 150 458 Z",
										fill: "url(#cr-bone)"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
										cx: "170",
										cy: "474",
										r: "10",
										fill: "var(--color-ink)",
										opacity: "0.16"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
										cx: "230",
										cy: "474",
										r: "10",
										fill: "var(--color-ink)",
										opacity: "0.16"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BoneLine, {
								a: P.shoulderL,
								b: P.elbowL,
								w: 18,
								hot: hot("humero")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BoneLine, {
								a: P.shoulderR,
								b: P.elbowR,
								w: 18,
								hot: hot("humero")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BoneLine, {
								a: radiusL[0],
								b: radiusL[1],
								w: 8
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BoneLine, {
								a: ulnaL[0],
								b: ulnaL[1],
								w: 8
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BoneLine, {
								a: radiusR[0],
								b: radiusR[1],
								w: 8
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BoneLine, {
								a: ulnaR[0],
								b: ulnaR[1],
								w: 8
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BoneLine, {
								a: P.hipL,
								b: P.kneeL,
								w: 20,
								hot: hot("femur")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BoneLine, {
								a: P.hipR,
								b: P.kneeR,
								w: 20,
								hot: hot("femur")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BoneLine, {
								a: tibiaL[0],
								b: tibiaL[1],
								w: 11
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BoneLine, {
								a: fibulaL[0],
								b: fibulaL[1],
								w: 6
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BoneLine, {
								a: tibiaR[0],
								b: tibiaR[1],
								w: 11
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BoneLine, {
								a: fibulaR[0],
								b: fibulaR[1],
								w: 6
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
								cx: P.kneeL[0],
								cy: P.kneeL[1],
								r: "9",
								fill: "url(#cr-bone)"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
								cx: P.kneeR[0],
								cy: P.kneeR[1],
								r: "9",
								fill: "url(#cr-bone)"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
						style: { opacity: muscleOp },
						fill: "url(#cr-muscle)",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
								cx: "108",
								cy: "214",
								rx: "24",
								ry: "28",
								className: hot("deltoides") ? "is-hot" : void 0
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
								cx: "292",
								cy: "214",
								rx: "24",
								ry: "28",
								className: hot("deltoides") ? "is-hot" : void 0
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
								d: limb(along(P.shoulderL, P.elbowL, .16), along(P.shoulderL, P.elbowL, .8), 24, 18),
								className: hot("biceps") ? "is-hot" : void 0
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
								d: limb(along(P.shoulderR, P.elbowR, .16), along(P.shoulderR, P.elbowR, .8), 24, 18),
								className: hot("biceps") ? "is-hot" : void 0
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: limb(along(P.elbowL, P.wristL, .12), along(P.elbowL, P.wristL, .88), 18, 13) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: limb(along(P.elbowR, P.wristR, .12), along(P.elbowR, P.wristR, .88), 18, 13) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
								cx: "172",
								cy: "248",
								rx: "26",
								ry: "20"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
								cx: "228",
								cy: "248",
								rx: "26",
								ry: "20"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("g", {
								className: hot("abdominales") ? "is-hot" : void 0,
								children: [
									0,
									1,
									2,
									3
								].map((row) => [-1, 1].map((side) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
									x: 200 + side * 6 - (side < 0 ? 20 : 0),
									y: 318 + row * 26,
									width: "20",
									height: "18",
									rx: "6"
								}, `${row}-${side}`)))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
								d: limb(along(P.hipL, P.kneeL, .08), along(P.hipL, P.kneeL, .76), 32, 22),
								className: hot("cuadriceps") ? "is-hot" : void 0
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
								d: limb(along(P.hipR, P.kneeR, .08), along(P.hipR, P.kneeR, .76), 32, 22),
								className: hot("cuadriceps") ? "is-hot" : void 0
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: limb(along(P.kneeL, P.ankleL, .16), along(P.kneeL, P.ankleL, .72), 18, 12) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: limb(along(P.kneeR, P.ankleR, .16), along(P.kneeR, P.ankleR, .72), 18, 12) })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
						style: { opacity: organOp },
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
								className: organOp > 0 ? "lungs-live" : void 0,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
									d: "M188 214 C156 224 142 270 150 324 C158 362 190 356 198 318 C204 278 202 232 188 214 Z",
									fill: "var(--color-lung)",
									className: hot("pulmones") ? "is-hot" : void 0
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
									d: "M214 210 C250 222 264 274 252 328 C242 360 214 352 210 314 C206 274 204 228 214 210 Z",
									fill: "var(--color-lung)",
									className: hot("pulmones") ? "is-hot" : void 0
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
								d: "M200 160 V230",
								stroke: "var(--color-stomach)",
								strokeWidth: "5",
								strokeLinecap: "round",
								opacity: "0.65"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("g", {
								transform: "translate(198 268)",
								className: hot("corazon") ? "is-hot" : void 0,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("g", {
									className: organOp > 0 ? "heart-live" : void 0,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
										d: "M12 8 C12 -10 34 -8 34 8 C34 24 12 38 12 40 C12 38 -10 24 -10 8 C-10 -8 12 -10 12 8 Z",
										fill: "var(--color-heart)"
									})
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
								d: "M140 348 C132 376 156 408 194 398 C204 372 184 344 140 348 Z",
								fill: "var(--color-liver)",
								className: hot("higado") ? "is-hot" : void 0
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
								d: "M214 346 C250 348 258 386 234 398 C214 406 202 382 214 362 Z",
								fill: "var(--color-stomach)",
								className: hot("estomago") ? "is-hot" : void 0
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
								d: "M168 404 C208 390 236 414 216 436 C196 456 160 444 172 422 C184 400 230 414 240 440 C248 464 204 482 174 460",
								fill: "none",
								stroke: "var(--color-gut)",
								strokeWidth: "11",
								strokeLinecap: "round",
								className: hot("intestinos") ? "is-hot" : void 0
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
								className: hot("cerebro") ? "is-hot" : void 0,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
									cx: "200",
									cy: "98",
									rx: "30",
									ry: "36",
									fill: "var(--color-brain)"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
									d: "M178 90 C190 80 198 104 212 86 C222 102 230 84 232 102 M180 112 C198 102 194 124 214 114",
									fill: "none",
									stroke: "var(--color-heart)",
									strokeWidth: "2",
									opacity: "0.4"
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
						style: { opacity: skin },
						fill: "url(#cr-skin)",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: limb(P.shoulderL, P.elbowL, 36, 28) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: limb(P.elbowL, P.wristL, 28, 18) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: limb(P.wristL, P.palmL, 20, 18) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fingers, {
								wrist: P.wristL,
								palm: P.palmL
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: limb(P.shoulderR, P.elbowR, 36, 28) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: limb(P.elbowR, P.wristR, 28, 18) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: limb(P.wristR, P.palmR, 20, 18) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fingers, {
								wrist: P.wristR,
								palm: P.palmR
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: limb(P.hipL, P.kneeL, 46, 32) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: limb(P.kneeL, P.ankleL, 32, 18) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: limb(P.ankleL, [118, 846], 22, 16) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: limb(P.hipR, P.kneeR, 46, 32) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: limb(P.kneeR, P.ankleR, 32, 18) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: limb(P.ankleR, [282, 846], 22, 16) }),
							[
								P.shoulderL,
								P.elbowL,
								P.wristL,
								P.shoulderR,
								P.elbowR,
								P.wristR,
								P.hipL,
								P.kneeL,
								P.ankleL,
								P.hipR,
								P.kneeR,
								P.ankleR
							].map((pt) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
								cx: pt[0],
								cy: pt[1],
								r: "16"
							}, `${pt[0]}-${pt[1]}`)),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M116 196 C150 168 250 168 284 196 C306 250 286 340 258 410 C246 456 236 492 230 508 C214 528 186 528 170 508 C164 492 154 456 142 410 C114 340 94 250 116 196 Z" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M182 150 C178 174 174 190 168 206 L232 206 C226 190 222 174 218 150 C206 142 194 142 182 150 Z" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
								cx: "200",
								cy: "102",
								rx: "48",
								ry: "58"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
								cx: "150",
								cy: "114",
								rx: "10",
								ry: "16"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
								cx: "250",
								cy: "114",
								rx: "10",
								ry: "16"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
								d: "M156 78 C154 42 176 30 200 30 C224 30 246 42 244 78 C230 62 216 54 200 54 C184 54 170 62 156 78 Z",
								fill: "var(--hair)"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
								style: { opacity: skin > .55 ? 1 : 0 },
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
										fill: "none",
										stroke: "var(--skin-deep)",
										strokeWidth: "2.2",
										strokeLinecap: "round",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M168 88 Q180 84 190 90" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M210 90 Q220 84 232 88" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M200 114 L196 128" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M188 142 Q200 148 212 142" })
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
										cx: "182",
										cy: "102",
										rx: "7.5",
										ry: "5",
										fill: "var(--color-card)"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
										cx: "218",
										cy: "102",
										rx: "7.5",
										ry: "5",
										fill: "var(--color-card)"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
										cx: "183",
										cy: "102",
										r: "2.8",
										fill: "var(--color-iris)"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
										cx: "219",
										cy: "102",
										r: "2.8",
										fill: "var(--color-iris)"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
										cx: "200",
										cy: "430",
										r: "2.2",
										fill: "var(--skin-deep)",
										opacity: "0.45"
									})
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
						fill: "none",
						stroke: "var(--skin-deep)",
						strokeWidth: "2.4",
						strokeLinejoin: "round",
						opacity: "0.55",
						pointerEvents: "none",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: limb(P.shoulderL, P.elbowL, 36, 28) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: limb(P.elbowL, P.wristL, 28, 18) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: limb(P.shoulderR, P.elbowR, 36, 28) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: limb(P.elbowR, P.wristR, 28, 18) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: limb(P.hipL, P.kneeL, 46, 32) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: limb(P.kneeL, P.ankleL, 32, 18) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: limb(P.hipR, P.kneeR, 46, 32) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: limb(P.kneeR, P.ankleR, 32, 18) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M116 196 C150 168 250 168 284 196 C306 250 286 340 258 410 C246 456 236 492 230 508 C214 528 186 528 170 508 C164 492 154 456 142 410 C114 340 94 250 116 196 Z" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
								cx: "200",
								cy: "102",
								rx: "48",
								ry: "58"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("g", {
						style: { opacity: jointOp },
						children: [
							["hombro", P.shoulderL],
							["hombro", P.shoulderR],
							["codo", P.elbowL],
							["codo", P.elbowR],
							["muneca", P.wristL],
							["muneca", P.wristR],
							["cadera", P.hipL],
							["cadera", P.hipR],
							["rodilla", P.kneeL],
							["rodilla", P.kneeR],
							["tobillo", P.ankleL],
							["tobillo", P.ankleR]
						].map(([id, pt]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
							className: hot(id) ? "is-hot" : void 0,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
								cx: pt[0],
								cy: pt[1],
								r: hot(id) ? 15 : 10,
								fill: "var(--color-gold)"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
								cx: pt[0],
								cy: pt[1],
								r: hot(id) ? 6 : 4,
								fill: "var(--color-card)"
							})]
						}, `${id}-${pt[0]}`))
					}),
					showLabel && labelHit ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, {
						x: labelHit.x,
						y: labelHit.y,
						text: NAMES[labelHit.id] ?? ""
					}) : null,
					hits.map((hit, index) => {
						const on = activeId === hit.id;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
							className: shakeId === hit.id ? "shake" : void 0,
							children: [
								on ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
									className: "pulse",
									cx: hit.x,
									cy: hit.y,
									r: "14",
									fill: "none",
									stroke: "var(--color-ink)",
									strokeWidth: "2"
								}) : null,
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
									cx: hit.x,
									cy: hit.y,
									r: "20",
									fill: "transparent",
									className: "hit",
									role: "button",
									tabIndex: 0,
									"aria-label": NAMES[hit.id],
									onClick: () => onPick(hit.id),
									onKeyDown: (event) => {
										if (event.key === "Enter" || event.key === " ") {
											event.preventDefault();
											onPick(hit.id);
										}
									}
								}),
								system === "articulaciones" ? null : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
									cx: hit.x,
									cy: hit.y,
									r: on ? 6 : 4,
									fill: "var(--pin)",
									pointerEvents: "none"
								})
							]
						}, `${hit.id}-${index}`);
					})
				]
			})
		]
	});
}
function Tag({ x, y, text }) {
	const w = Math.max(96, text.length * 12 + 26);
	const rx = Math.max(8, Math.min(392 - w, x < 200 ? x - w - 18 : x + 16));
	const ly = Math.max(8, y - 48);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
		className: "tag",
		pointerEvents: "none",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: x,
				y1: y,
				x2: rx + w / 2,
				y2: ly + 16,
				stroke: "var(--color-ink)",
				strokeWidth: "1.5"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: rx,
				y: ly,
				width: w,
				height: "32",
				rx: "16",
				fill: "var(--color-card)",
				stroke: "var(--color-line)"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: rx + w / 2,
				y: ly + 21,
				textAnchor: "middle",
				fontSize: "16",
				fontFamily: "Fredoka, Nunito, sans-serif",
				fill: "var(--color-ink)",
				children: text
			})
		]
	});
}
var ICONS = {
	piel: Hand,
	huesos: Bone,
	musculos: Dumbbell,
	organos: Heart,
	articulaciones: CircleDot,
	sentidos: Eye
};
function pickQuiz(system, avoid) {
	const pool = partsOf(system);
	const choices = pool.filter((part) => part.id !== avoid);
	const bag = choices.length ? choices : pool;
	return bag[Math.floor(Math.random() * bag.length)]?.id ?? pool[0].id;
}
function Explore() {
	const [system, setSystem] = (0, import_react.useState)("organos");
	const [activeId, setActiveId] = (0, import_react.useState)("corazon");
	const [skin, setSkin] = (0, import_react.useState)(.34);
	const [tone, setTone] = (0, import_react.useState)("medio");
	const [videoFor, setVideoFor] = (0, import_react.useState)(null);
	const [finding, setFinding] = (0, import_react.useState)(false);
	const [quest, setQuest] = (0, import_react.useState)("corazon");
	const [round, setRound] = (0, import_react.useState)(0);
	const [hits, setHits] = (0, import_react.useState)(0);
	const [celebrate, setCelebrate] = (0, import_react.useState)(false);
	const [done, setDone] = (0, import_react.useState)(false);
	const [shakeId, setShakeId] = (0, import_react.useState)(null);
	const [flash, setFlash] = (0, import_react.useState)(false);
	const [seen, setSeen] = (0, import_react.useState)([]);
	(0, import_react.useEffect)(() => {
		try {
			const raw = localStorage.getItem("cuerpo-real-vistos");
			if (raw) setSeen(JSON.parse(raw));
		} catch {}
	}, []);
	(0, import_react.useEffect)(() => {
		setFlash(true);
		const timer = window.setTimeout(() => setFlash(false), 480);
		return () => window.clearTimeout(timer);
	}, [system]);
	const active = partById(activeId);
	const questPart = partById(quest);
	const videoPart = videoFor ? partById(videoFor) : null;
	const list = (0, import_react.useMemo)(() => partsOf(system), [system]);
	function remember(id) {
		setSeen((current) => {
			if (current.includes(id)) return current;
			const next = [...current, id];
			localStorage.setItem("cuerpo-real-vistos", JSON.stringify(next));
			return next;
		});
	}
	function chooseSystem(next) {
		setSystem(next);
		const first = partsOf(next)[0];
		setActiveId(first.id);
		setSkin(DEFAULT_SKIN[next]);
		setDone(false);
		setCelebrate(false);
		if (finding) {
			setQuest(pickQuiz(next));
			setRound(0);
			setHits(0);
		}
		remember(first.id);
	}
	function choosePart(id) {
		if (finding && !done) {
			if (celebrate) return;
			if (id === quest) {
				const nextRound = round + 1;
				setHits((v) => v + 1);
				setActiveId(id);
				setCelebrate(true);
				remember(id);
				window.setTimeout(() => {
					setCelebrate(false);
					setRound(nextRound);
					if (nextRound >= 5) setDone(true);
					else setQuest(pickQuiz(system, id));
				}, 700);
			} else {
				setShakeId(id);
				window.setTimeout(() => setShakeId(null), 380);
			}
			return;
		}
		setActiveId(id);
		remember(id);
	}
	function replay() {
		setDone(false);
		setCelebrate(false);
		setRound(0);
		setHits(0);
		setQuest(pickQuiz(system));
	}
	function startFind() {
		if (finding) {
			setFinding(false);
			setDone(false);
			setCelebrate(false);
			return;
		}
		setFinding(true);
		setDone(false);
		setCelebrate(false);
		setRound(0);
		setHits(0);
		setQuest(pickQuiz(system));
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "shell",
		style: {
			minHeight: "auto",
			background: "transparent"
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "topbar",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow",
					children: "Explorar el cuerpo"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-3xl font-bold",
					children: "Cuerpo Real"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					className: finding ? "find-btn on" : "find-btn",
					onClick: startFind,
					children: [finding ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { size: 18 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { size: 18 }), finding ? "Explorar" : "Encuentra"]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "systems",
				role: "tablist",
				children: SYSTEMS.map((item) => {
					const Icon = ICONS[item.id];
					const on = system === item.id;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						role: "tab",
						"aria-selected": on,
						className: "chip",
						"data-system": item.id,
						"data-on": on ? "true" : "false",
						onClick: () => chooseSystem(item.id),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
							size: 18,
							strokeWidth: 2.4
						}), item.name]
					}, item.id);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "workspace",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "stage-col",
					children: [
						finding ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: celebrate ? "quest good" : "quest",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Thumb, {
									src: questPart.image,
									name: questPart.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: done ? "Ronda lista" : "Toca en el cuerpo" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: done ? `${hits} de 5` : questPart.name })] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "stars",
									children: Array.from({ length: 5 }, (_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, {
										size: 16,
										className: i < hits ? "star on" : "star"
									}, i))
								}),
								done && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: "text-btn",
									onClick: replay,
									children: "Otra vez"
								})
							]
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "stage",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: flash ? "wash on" : "wash",
								"data-system": system
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BodyFigure, {
								system,
								skin,
								tone,
								activeId: finding && !celebrate ? null : activeId,
								shakeId,
								showLabel: !finding || celebrate,
								onPick: choosePart
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "controls",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "slider",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Piel transparente" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "range",
										min: 0,
										max: 100,
										value: Math.round(skin * 100),
										onChange: (e) => setSkin(Number(e.target.value) / 100)
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Piel visible" })
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "tones",
								children: TONES.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									className: tone === item.id ? "tone on" : "tone",
									"data-tone": item.id,
									onClick: () => setTone(item.id),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "swatch" }), item.name]
								}, item.id))
							})]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: "side",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "story",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Thumb, {
							src: active.image,
							name: active.name,
							large: true
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "story-copy",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "dato",
									children: active.dato
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: active.name }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: active.blurb }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									className: "video-btn",
									onClick: () => setVideoFor(active.id),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, {
										size: 18,
										fill: "currentColor"
									}), "Ver video"]
								})
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "pills",
						children: list.map((part) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							className: part.id === activeId ? "pill on" : "pill",
							onClick: () => choosePart(part.id),
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Thumb, {
									src: part.image,
									name: part.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: part.name }),
								seen.includes(part.id) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "seen" })
							]
						}, part.id))
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				open: videoPart !== null,
				onOpenChange: (open) => !open && setVideoFor(null),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, { className: "overlay" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
					className: "video-dialog",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "video-head",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: videoPart?.videoTitle ?? "Video" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogClose, {
							className: "icon-btn",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 20 })
						})]
					}), videoPart && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
						className: "player",
						src: `https://www.youtube-nocookie.com/embed/${videoPart.video}?rel=0`,
						title: videoPart.videoTitle,
						allowFullScreen: true
					})]
				})] })
			})
		]
	}) });
}
function Thumb({ src, name, large }) {
	const [bad, setBad] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => setBad(false), [src]);
	if (bad) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: large ? "thumb-fallback large" : "thumb-fallback",
		children: name.slice(0, 1)
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
		src,
		alt: large ? name : "",
		className: large ? "story-img" : "thumb",
		onError: () => setBad(true)
	});
}
//#endregion
export { Explore as component };
