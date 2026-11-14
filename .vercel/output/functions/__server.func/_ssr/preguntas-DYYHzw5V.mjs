import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { t as SiteShell } from "./site-shell-B0vT6skY.mjs";
import { a as organs, i as faqs } from "./router-DJ__brmk.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/preguntas-DYYHzw5V.js
var import_jsx_runtime = require_jsx_runtime();
function Questions() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "container-page grid gap-10 py-10 lg:grid-cols-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm font-extrabold text-sage",
				children: "Para la docente y la familia"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 font-display text-4xl font-bold sm:text-5xl",
				children: "Preguntas frecuentes"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 space-y-3",
				children: faqs.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
					className: "rounded-2xl border border-line bg-card px-5 py-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("summary", {
						className: "cursor-pointer font-display text-xl font-bold",
						children: item.q
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm font-bold text-ink-soft",
						children: item.a
					})]
				}, item.q))
			})
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm font-extrabold text-sage",
				children: "Preguntas de los niños"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-2 font-display text-3xl font-bold",
				children: "Lo que suelen preguntar"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-6 space-y-3",
				children: organs.map((organ) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "rounded-2xl border border-line bg-sage-soft p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-xl font-bold",
						children: organ.question
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm font-bold text-ink-soft",
						children: organ.answer
					})]
				}, organ.id))
			})
		] })]
	}) });
}
//#endregion
export { Questions as component };
