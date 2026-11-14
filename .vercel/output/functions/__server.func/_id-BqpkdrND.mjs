import { b as Link } from "./_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "./_libs/radix-ui__react-context+react.mjs";
import { t as SiteShell } from "./_ssr/site-shell-B0vT6skY.mjs";
import { a as organs, n as Route } from "./_ssr/router-DJ__brmk.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_id-BqpkdrND.js
var import_jsx_runtime = require_jsx_runtime();
function OrganPage() {
	const organ = Route.useLoaderData();
	const index = organs.findIndex((item) => item.id === organ.id);
	const next = organs[(index + 1) % organs.length];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "container-page grid gap-8 py-10 lg:grid-cols-[1.1fr_0.9fr]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm font-extrabold text-sage",
				children: "Ficha para leer en voz alta"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 font-display text-5xl font-bold",
				children: organ.name
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-lg font-bold text-ink-soft",
				children: organ.short
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
				className: "mt-8 space-y-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Block, {
						title: "¿Qué hace?",
						text: organ.job
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Block, {
						title: "¿Dónde está?",
						text: organ.where
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Block, {
						title: "¿Cómo lo cuidamos?",
						text: organ.care
					})
				]
			})
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
			className: "space-y-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-card bg-ink p-6 text-cream",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-extrabold text-blush",
						children: "Dato para sorprenderse"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 font-display text-2xl font-bold",
						children: organ.fact
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-card border border-line bg-card p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-extrabold text-coral",
							children: "Pregunta de niño"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 font-display text-2xl font-bold",
							children: organ.question
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm font-bold text-ink-soft",
							children: organ.answer
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/organos/$id",
					params: { id: next.id },
					className: "block rounded-card border border-line bg-sage-soft p-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-extrabold tracking-wide text-sage uppercase",
						children: "Siguiente"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-2xl font-bold text-ink",
						children: next.name
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/explorar",
					className: "inline-flex text-sm font-extrabold text-coral",
					children: "Volver al cuerpo"
				})
			]
		})]
	}) });
}
function Block({ title, text }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
		className: "font-display text-xl font-bold",
		children: title
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
		className: "mt-1 text-sm font-bold text-ink-soft",
		children: text
	})] });
}
//#endregion
export { OrganPage as component };
