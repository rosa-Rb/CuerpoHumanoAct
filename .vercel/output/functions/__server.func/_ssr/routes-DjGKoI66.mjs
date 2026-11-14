import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { o as team } from "./router-DJ__brmk.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DjGKoI66.js
var import_jsx_runtime = require_jsx_runtime();
function Cover() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "relative min-h-screen overflow-hidden bg-cream",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -top-24 -right-16 h-72 w-72 rounded-full bg-sage-soft" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute bottom-0 -left-20 h-64 w-64 rounded-full bg-sage-soft" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page relative flex min-h-screen flex-col justify-between py-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-extrabold tracking-wide text-sage uppercase",
						children: "Universidad César Vallejo · Educación Inicial"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-w-3xl py-10",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-bold text-coral",
								children: "Explorando nuestro interior"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "mt-3 font-display text-5xl leading-none font-bold text-ink sm:text-7xl",
								children: "Cuerpo Humano Interactivo"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 max-w-xl text-xl font-bold text-ink-soft",
								children: "Mira por dentro, toca cada parte y descubre para qué sirve."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-8 flex flex-wrap gap-3",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/inicio",
									className: "rounded-full bg-coral px-6 py-3 text-base font-bold text-cream hover:bg-coral-deep",
									children: "Entrar"
								})
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-sm font-extrabold tracking-wide text-ink-soft uppercase",
						children: "Integrantes"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-3",
						children: team.map((name) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "rounded-2xl border border-line bg-card px-4 py-3 text-sm font-extrabold",
							children: name
						}, name))
					})] })
				]
			})
		]
	});
}
//#endregion
export { Cover as component };
