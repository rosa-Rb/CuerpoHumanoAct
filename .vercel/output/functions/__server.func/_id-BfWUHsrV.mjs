import { b as Link } from "./_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "./_libs/radix-ui__react-context+react.mjs";
import { t as SiteShell } from "./_ssr/site-shell-B0vT6skY.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_id-BfWUHsrV.js
var import_jsx_runtime = require_jsx_runtime();
var SplitNotFoundComponent = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
	className: "container-page py-16",
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
		className: "font-display text-4xl font-bold",
		children: "No encontramos ese órgano"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to: "/inicio",
		className: "mt-4 inline-block font-extrabold text-coral",
		children: "Volver al inicio"
	})]
}) });
//#endregion
export { SplitNotFoundComponent as notFoundComponent };
