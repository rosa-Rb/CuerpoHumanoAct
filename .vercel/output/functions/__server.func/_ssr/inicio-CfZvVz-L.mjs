import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { t as SiteShell } from "./site-shell-B0vT6skY.mjs";
import { c as HeartPulse, f as Compass, h as BookOpen, i as Shapes, p as CircleHelp } from "../_libs/lucide-react.mjs";
import { a as organs } from "./router-DJ__brmk.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/inicio-CfZvVz-L.js
var import_jsx_runtime = require_jsx_runtime();
var cards = [
	{
		to: "/explorar",
		title: "Explorar el cuerpo",
		text: "Señala cabeza, pecho y barriga. Cada zona abre una explicación corta.",
		icon: Compass
	},
	{
		to: "/organos/corazon",
		title: "Fichas de órganos",
		text: "Cerebro, corazón, pulmones, estómago, hígado, riñones e intestinos.",
		icon: HeartPulse
	},
	{
		to: "/actividades",
		title: "Actividades de aula",
		text: "Juegos de diez minutos para hacer de pie, sin pantallas extras.",
		icon: Shapes
	},
	{
		to: "/preguntas",
		title: "Preguntas",
		text: "Respuestas cortas para cuando alguien pregunta en clase o en casa.",
		icon: CircleHelp
	},
	{
		to: "/explorar",
		title: "Cómo se usa",
		text: "Primero mirar, luego nombrar y después jugar un ratito.",
		icon: BookOpen
	}
];
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-page py-12",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-bold text-sage",
					children: "Para mirar juntos"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-2 max-w-2xl font-display text-4xl leading-tight font-bold sm:text-6xl",
					children: "Aprende dónde está cada parte y para qué sirve"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-xl text-lg font-bold text-ink-soft",
					children: "Gira el cuerpo, elige una parte y lee qué hace. Cabeza, pecho y barriga están en su lugar, con los órganos de verdad: cerebro, corazón, pulmones, estómago, hígado, riñones e intestinos."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/explorar",
					className: "mt-6 inline-flex rounded-full bg-ink px-5 py-3 text-sm font-bold text-cream",
					children: "Empezar a explorar"
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-page pb-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-3xl font-bold",
				children: "Qué vas a encontrar"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
				children: cards.map((card) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: card.to,
					className: "rounded-card border border-line bg-card p-5 transition hover:-translate-y-0.5 hover:border-coral",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(card.icon, {
							className: "text-coral",
							size: 22
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-3 font-display text-2xl font-bold",
							children: card.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm font-bold text-ink-soft",
							children: card.text
						})
					]
				}, card.title))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-page py-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-end justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl font-bold",
					children: "Los órganos, en orden"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/explorar",
					className: "text-sm font-extrabold text-coral",
					children: "Ver en el cuerpo"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-5 grid gap-3 sm:grid-cols-2",
				children: organs.map((organ, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/organos/$id",
					params: { id: organ.id },
					className: "flex gap-4 rounded-2xl border border-line bg-card p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid h-11 w-11 shrink-0 place-items-center rounded-full bg-sage-soft text-sm font-extrabold text-sage",
						children: index + 1
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block font-display text-xl font-bold",
						children: organ.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mt-1 block text-sm font-bold text-ink-soft",
						children: organ.short
					})] })]
				}, organ.id))
			})]
		})
	] });
}
//#endregion
export { Home as component };
