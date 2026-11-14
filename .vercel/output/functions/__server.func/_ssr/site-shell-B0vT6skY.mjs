import { b as Link, p as useRouterState } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/site-shell-B0vT6skY.js
var import_jsx_runtime = require_jsx_runtime();
var links = [
	{
		to: "/inicio",
		label: "Inicio"
	},
	{
		to: "/explorar",
		label: "Explorar"
	},
	{
		to: "/actividades",
		label: "Actividades"
	},
	{
		to: "/preguntas",
		label: "Preguntas"
	}
];
function SiteShell({ children }) {
	const path = useRouterState({ select: (s) => s.location.pathname });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "sticky top-0 z-20 border-b border-line bg-cream/95 backdrop-blur-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "container-page flex items-center justify-between gap-4 py-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/",
							className: "min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-lg leading-none font-bold text-ink",
								children: "Cuerpo humano"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-bold tracking-wide text-coral uppercase",
								children: "Interactivo"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
							className: "hidden items-center gap-1 md:flex",
							children: links.map((item) => {
								const active = path === item.to || path.startsWith(item.to + "/");
								return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: item.to,
									className: "rounded-full px-3 py-2 text-sm font-extrabold " + (active ? "bg-ink text-cream" : "text-ink-soft hover:bg-cream-deep hover:text-ink"),
									children: item.label
								}, item.to);
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/explorar",
							className: "rounded-full bg-coral px-4 py-2 text-sm font-extrabold text-cream hover:bg-coral-deep",
							children: "Explorar"
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "container-page flex gap-2 overflow-x-auto pb-3 md:hidden",
					children: links.map((item) => {
						const active = path === item.to;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: item.to,
							className: "shrink-0 rounded-full px-3 py-2 text-sm font-extrabold " + (active ? "bg-ink text-cream" : "bg-card text-ink-soft"),
							children: item.label
						}, item.to);
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", { children }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "mt-16 border-t border-line bg-ink text-cream",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "container-page py-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-2xl font-bold",
						children: "Cuerpo Humano Interactivo"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm",
						children: "Explorando nuestro interior"
					})]
				})
			})
		]
	});
}
//#endregion
export { SiteShell as t };
