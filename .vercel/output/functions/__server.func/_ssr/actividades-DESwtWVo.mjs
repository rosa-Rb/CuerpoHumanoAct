import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { t as SiteShell } from "./site-shell-B0vT6skY.mjs";
import { r as activities } from "./router-DJ__brmk.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/actividades-DESwtWVo.js
var import_jsx_runtime = require_jsx_runtime();
function Activities() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "container-page py-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm font-extrabold text-sage",
				children: "Para hacer en el aula"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 max-w-2xl font-display text-4xl font-bold sm:text-5xl",
				children: "Actividades cortas, de pie y con palabras simples"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 max-w-2xl font-bold text-ink-soft",
				children: "No hace falta material caro. Sirven el propio cuerpo, una fruta de juguete y las fichas de esta página."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 grid gap-4 md:grid-cols-2",
				children: activities.map((activity) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "rounded-card border border-line bg-card p-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-baseline justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-2xl font-bold",
							children: activity.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-extrabold tracking-wide text-coral uppercase",
							children: activity.time
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "mt-4 space-y-2 text-sm font-bold text-ink-soft",
						children: activity.steps.map((step, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-ink",
							children: [index + 1, ". "]
						}), step] }, step))
					})]
				}, activity.title))
			})
		]
	}) });
}
//#endregion
export { Activities as component };
