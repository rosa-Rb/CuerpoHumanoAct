import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { G as redirect, J as notFound, _ as lazyRouteComponent, d as Scripts, f as HeadContent, g as Outlet, h as createRouter, v as createFileRoute, x as useRouter, y as createRootRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { n as TriangleAlert } from "../_libs/lucide-react.mjs";
import { a as union, i as string, n as number, r as object, t as literal } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/content-fbp7R7Ln.js
var team = [
	"Ayala Puecas Yanela Yunzu",
	"Coronado Falla Marilin Abril",
	"Juarez Morales María Fernanda",
	"Mechato Castillo Danitza Pierina",
	"Vilchez Alvinez Ayelen Abigail"
];
var organs = [
	{
		id: "cerebro",
		name: "Cerebro",
		short: "El jefe que piensa, recuerda y manda mensajes a todo el cuerpo.",
		job: "Piensa, recuerda los nombres de tus amigos y decide cuando quieres saltar o dibujar.",
		where: "Dentro de la cabeza, bien protegido por el cráneo.",
		care: "Duerme lo suficiente, juega y come frutas de colores.",
		fact: "Pesa más o menos como un pomelo y trabaja incluso cuando sueñas.",
		question: "¿Dónde está el cerebro?",
		answer: "Está en la cabeza, detrás de la frente. El cráneo lo cubre para que un golpe no le llegue directo."
	},
	{
		id: "corazon",
		name: "Corazón",
		short: "Un músculo que late y manda la sangre de paseo por el cuerpo.",
		job: "Bombea sangre para llevar oxígeno y comida a cada parte de ti.",
		where: "En el pecho, un poquito hacia el lado izquierdo.",
		care: "Corre, baila y respira profundo. El corazón se pone feliz cuando te mueves.",
		fact: "Late cerca de cien mil veces en un solo día.",
		question: "¿Para qué sirve el corazón?",
		answer: "Empuja la sangre para que llegue a las manos, los pies y todo lo demás. Por eso lo sientes latir."
	},
	{
		id: "pulmones",
		name: "Pulmones",
		short: "Dos esponjas que se llenan de aire cada vez que respiras.",
		job: "Toman el aire limpio y botan el aire que ya usaste.",
		where: "En el pecho, uno a cada lado del corazón.",
		care: "Juega al aire libre y respira por la nariz cuando corres despacio.",
		fact: "Si los abrieras bien grandes, ocuparían mucho espacio, como una sábana grande.",
		question: "¿Qué hacen los pulmones?",
		answer: "Se llenan cuando entra el aire y se vacían un poco cuando lo botas. Así el cuerpo recibe aire nuevo."
	},
	{
		id: "estomago",
		name: "Estómago",
		short: "Una bolsita fuerte que mezcla la comida con jugos especiales.",
		job: "Revuelve lo que comes para empezar a convertirlo en energía.",
		where: "En la barriga, un poco hacia la izquierda, debajo de las costillas.",
		care: "Come despacio, mastica bien y no llenes la barriga hasta que duela.",
		fact: "Puede estirarse cuando comes mucho, como un globo suave.",
		question: "¿La comida se queda en el estómago para siempre?",
		answer: "No. Ahí se mezcla un rato y después sigue su camino hacia los intestinos."
	},
	{
		id: "higado",
		name: "Hígado",
		short: "El órgano interno más grande: limpia y guarda energía.",
		job: "Ayuda a digerir las comidas con grasa y limpia cosas que la sangre ya no necesita.",
		where: "En la barriga, hacia el lado derecho, debajo de las costillas.",
		care: "Toma agua y come verduras. El hígado trabaja mejor si no le das comida solo de dulce.",
		fact: "Si se lastima un poquito, puede repararse solo, como un superhéroe de la reparación.",
		question: "¿El hígado es un músculo?",
		answer: "No. Es blando y bastante grande. Ayuda a digerir y también a limpiar la sangre."
	},
	{
		id: "rinones",
		name: "Riñones",
		short: "Dos filtros con forma de frijol que limpian la sangre.",
		job: "Sacan de la sangre lo que el cuerpo ya no usa y ayudan a hacer pipí.",
		where: "En la espalda de la barriga, uno a cada lado.",
		care: "Bebe agua durante el día. Los riñones necesitan agua para filtrar.",
		fact: "Filtran toda tu sangre muchas veces mientras juegas.",
		question: "¿Cuántos riñones tenemos?",
		answer: "Casi siempre dos, uno a cada lado. Si los miras de lado, parecen un frijol."
	},
	{
		id: "intestinos",
		name: "Intestinos",
		short: "Un camino largo y enrollado que termina de aprovechar la comida.",
		job: "Absorben lo bueno de los alimentos y preparan lo que el cuerpo va a botar.",
		where: "Enrollados en el centro de la barriga, debajo del estómago.",
		care: "Come frutas, pan integral y verduras para que el camino funcione suave.",
		fact: "Si estiraras el intestino delgado, sería más largo que una persona adulta.",
		question: "¿Por qué la barriga hace ruidos?",
		answer: "Porque la comida y un poco de aire se van moviendo por dentro. No quiere decir que algo esté mal."
	}
];
var activities = [
	{
		title: "Señala y nombra",
		time: "10 minutos",
		steps: [
			"Un niño se pone de pie y el grupo lo observa con respeto.",
			"La docente dice: cabeza, pecho, barriga.",
			"Cada niño toca esa parte en su propio cuerpo y dice el nombre en voz alta.",
			"Luego relacionan: en la cabeza está el cerebro, en el pecho el corazón y los pulmones."
		]
	},
	{
		title: "El corazón late",
		time: "8 minutos",
		steps: [
			"Todos ponen la mano en el pecho y cuentan en silencio hasta diez.",
			"Saltan en el sitio ocho veces, con cuidado.",
			"Vuelven a poner la mano y comentan si el corazón late más rápido.",
			"Cierran respirando lento: inhalar, exhalar."
		]
	},
	{
		title: "La comida de viaje",
		time: "12 minutos",
		steps: [
			"Con una fruta de juguete o una lámina, cuentan el viaje: boca, estómago, intestinos.",
			"Usan palabras simples: masticar, mezclar, aprovechar.",
			"Dibujan el camino con tres círculos de colores.",
			"Pegan el dibujo en el mural “Así viaja mi almuerzo”."
		]
	},
	{
		title: "Adivina la parte",
		time: "10 minutos",
		steps: [
			"Una persona describe un órgano sin decir el nombre: dónde está y qué hace.",
			"El grupo piensa un momento y dice su idea.",
			"Quien quiera puede señalar esa zona en su propio cuerpo.",
			"Después leen juntos la ficha, aunque la respuesta no haya salido a la primera."
		]
	},
	{
		title: "Respiramos despacio",
		time: "6 minutos",
		steps: [
			"Todos se sientan y ponen las manos a los lados del pecho.",
			"Entran aire por la nariz contando hasta tres y lo botan contando hasta tres.",
			"Notan si el pecho sube y baja.",
			"Comentan, con calma, que esos movimientos los hacen los pulmones."
		]
	},
	{
		title: "Un vaso de agua",
		time: "8 minutos",
		steps: [
			"Cada quien tiene un vaso con un poco de agua.",
			"Antes de beber, recuerdan que los riñones usan el agua para limpiar la sangre.",
			"Beben despacio y dicen en qué parte de la barriga imaginan los riñones.",
			"Cierran nombrando otra parte que también cuida el cuerpo, como el corazón o el cerebro."
		]
	}
];
var faqs = [
	{
		q: "¿Esta página es para niños de Inicial?",
		a: "Sí. Se puede mirar en clase o en casa. Las frases son cortas para leerlas en voz alta si hace falta."
	},
	{
		q: "¿Sirve junto con la maqueta?",
		a: "Sí. La maqueta se toca con las manos y aquí se puede girar el cuerpo para ver lo mismo desde otro lado."
	},
	{
		q: "¿Por qué el cuerpo no parece de un libro de medicina?",
		a: "Porque aquí importa reconocer el lugar y el trabajo de cada parte, sin nombres difíciles."
	},
	{
		q: "¿Qué órganos vamos a ver?",
		a: "Cerebro, corazón, pulmones, estómago, hígado, riñones e intestinos, cada uno en su lugar."
	},
	{
		q: "¿Por dónde empiezo?",
		a: "Entra, abre Explorar y gira el cuerpo. Si quieres más detalle, abre la ficha de esa parte."
	},
	{
		q: "¿Se puede mirar sin un adulto al lado?",
		a: "Sí. Tocar y girar se puede solo. Si sale una palabra nueva, alguien mayor la puede leer."
	}
];
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/router-DJ__brmk.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var FALLBACK_MESSAGE = "An unexpected error occurred. Try reloading the page.";
function errorMessage(error) {
	if (error instanceof Error && error.message) return error.message;
	if (typeof error === "string" && error) return error;
	return FALLBACK_MESSAGE;
}
function AppErrorComponent({ error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-screen flex-col items-center justify-center gap-3 px-6 text-center bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-red-500",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
					className: "size-10",
					strokeWidth: 2
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-lg font-semibold",
				children: "Something went wrong"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md text-sm break-words text-zinc-500 dark:text-zinc-400",
				children: errorMessage(error)
			})
		]
	});
}
/**
* Path-based preview hosts serve the dev server under `/{port_id}/` and strip
* that prefix before forwarding, so SSR sees `/` while the browser URL keeps the
* prefix. TanStack Start resets `basepath` on hydration, so a `rewrite` keeps
* client routing and generated links aligned with the public URL.
*/
var PATH_BASED_PREVIEW_HOSTS = /* @__PURE__ */ new Set([
	"preview.grok.genai.mil",
	"preview.grok.mil",
	"preview.grokgsac.com"
]);
var PORT_ID_PREFIX = /^\/hds-[a-z0-9]+-\d+-[a-z0-9]+(?=\/|$)/i;
function previewPathPrefix(hostname, pathname) {
	if (!PATH_BASED_PREVIEW_HOSTS.has(hostname.toLowerCase())) return void 0;
	return PORT_ID_PREFIX.exec(pathname)?.[0];
}
function prefixRewrite(prefix) {
	return {
		input: ({ url }) => {
			if (url.pathname === prefix) url.pathname = "/";
			else if (url.pathname.startsWith(`${prefix}/`)) url.pathname = url.pathname.slice(prefix.length);
			return url;
		},
		output: ({ url }) => {
			url.pathname = `${prefix}${url.pathname}`;
			return url;
		}
	};
}
function previewPathRewrite() {
	if (typeof window === "undefined") return void 0;
	const prefix = previewPathPrefix(window.location.hostname, window.location.pathname);
	return prefix ? prefixRewrite(prefix) : void 0;
}
/**
* App-wide client provider mounted once near the root (in `src/routes/__root.tsx`):
*
*   <AuthProvider><Outlet /></AuthProvider>
*
* Better Auth's React client (`@/lib/auth/client`) needs NO context provider —
* its `useSession()` works standalone — so this is a passthrough today. It's
* kept as the single, stable mount point for any future client-side providers
* (e.g. a toast or theme provider) without churning the root shell.
*/
function AuthProvider({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
var CONNECTOR_TOKEN_READY_EVENT = "grok:connector-token-ready";
function isGrokEmbedderOrigin(origin) {
	try {
		const url = new URL(origin);
		if (url.protocol !== "https:" && url.protocol !== "http:") return false;
		const host = url.hostname.toLowerCase();
		if (host === "grok.com" || host.endsWith(".grok.com")) return true;
		if (host === "localhost" || host === "127.0.0.1" || host === "[::1]") return true;
		return false;
	} catch {
		return false;
	}
}
function isSandboxPreviewGuestHost(hostname) {
	const host = hostname.toLowerCase();
	return host === "grok-sandbox.com" || host.endsWith(".grok-sandbox.com");
}
function isRemintPreviewPair(guestHost, parentHost) {
	const guest = guestHost.toLowerCase();
	const parent = parentHost.toLowerCase();
	const i = guest.indexOf(".preview.");
	if (i <= 0) return false;
	const label = guest.slice(0, i);
	const rest = guest.slice(i + 9);
	if (label.includes(".") || !rest.includes(".")) return false;
	return parent === rest || parent === `grok.${rest}`;
}
function resolveParentEmbedderOrigin(parentIsSelf, referrer, ancestorOrigin, guestHostname = "") {
	if (parentIsSelf) return null;
	for (const candidate of [referrer, ancestorOrigin ?? ""].filter(Boolean)) try {
		const url = new URL(candidate.includes("://") ? candidate : `https://${candidate}`);
		if (url.protocol !== "https:" && url.protocol !== "http:") continue;
		if (isGrokEmbedderOrigin(url.origin)) return url.origin;
		if (isSandboxPreviewGuestHost(guestHostname) || isRemintPreviewPair(guestHostname, url.hostname)) return url.origin;
	} catch {}
	return null;
}
/**
* Guest side of the grok-web ↔ sandbox preview postMessage bridge.
*
* Activates only when this page is framed by an allowlisted Grok embedder.
* Top-level runs (download/export, local `npm run dev`, deployed sites) noop.
*/
var PREVIEW_BRIDGE_CHANNEL = "grok-preview-bridge";
var EnvelopeSchema = object({
	channel: literal(PREVIEW_BRIDGE_CHANNEL),
	version: number().int().positive(),
	type: string().min(1)
});
var HelloSchema = EnvelopeSchema.extend({ type: literal("hello") });
var NavigateSchema = EnvelopeSchema.extend({
	type: literal("navigate"),
	path: string().min(1)
});
var HistorySchema = EnvelopeSchema.extend({
	type: literal("history"),
	delta: union([literal(-1), literal(1)])
});
var ConnectorTokenReadySchema = EnvelopeSchema.extend({ type: literal("connector-token-ready") });
function isSafeBridgePath(path) {
	if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\")) return false;
	try {
		return new URL(path, "https://preview.invalid").origin === "https://preview.invalid";
	} catch {
		return false;
	}
}
/**
* Origin of the Grok embedder framing this page, or null when the page runs
* top-level (download/export, local `npm run dev`, deployed sites) or under a
* non-Grok parent. Client-only; null during SSR.
*/
function resolveCurrentEmbedderOrigin() {
	if (typeof window === "undefined") return null;
	const ancestorOrigin = typeof location.ancestorOrigins !== "undefined" && location.ancestorOrigins.length > 0 ? location.ancestorOrigins[0] : null;
	return resolveParentEmbedderOrigin(window.parent === window, document.referrer, ancestorOrigin, window.location.hostname);
}
/**
* Install host↔guest messaging. Returns a dispose function.
* Noops (returns a no-op dispose) when not embedded under a Grok parent.
*/
function installPreviewHostBridge(options = {}) {
	const parentOrigin = resolveCurrentEmbedderOrigin();
	if (parentOrigin === null) return () => {};
	const ROOT_STATE_KEY = "__grokPreviewBridgeRoot";
	const originalPushState = window.history.pushState.bind(window.history);
	const originalReplaceState = window.history.replaceState.bind(window.history);
	const isAtHistoryRoot = () => {
		const state = window.history.state;
		return Boolean(state && typeof state === "object" && state[ROOT_STATE_KEY] === true);
	};
	try {
		const current = window.history.state;
		if (!(current !== null && typeof current === "object" && Object.prototype.hasOwnProperty.call(current, ROOT_STATE_KEY))) {
			const isRoot = window.history.length <= 1;
			originalReplaceState(current && typeof current === "object" ? {
				...current,
				[ROOT_STATE_KEY]: isRoot
			} : { [ROOT_STATE_KEY]: isRoot }, "", window.location.href);
		}
	} catch {}
	const post = (message) => {
		window.parent.postMessage(message, parentOrigin);
	};
	const reportLocation = () => {
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "location",
			path: window.location.pathname || "/",
			search: window.location.search,
			hash: window.location.hash
		});
	};
	const reportRoutes = () => {
		const paths = options.getRoutePaths?.() ?? [];
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "routes",
			paths
		});
	};
	const defaultNavigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		try {
			const url = new URL(path, window.location.origin);
			if (url.origin !== window.location.origin) return;
			const next = `${url.pathname}${url.search}${url.hash}`;
			window.history.pushState(window.history.state, "", next);
			window.dispatchEvent(new PopStateEvent("popstate", { state: window.history.state }));
		} catch {}
	};
	const navigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		if (options.navigate) {
			options.navigate(path);
			return;
		}
		defaultNavigate(path);
	};
	const announce = () => {
		reportLocation();
		reportRoutes();
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "ready"
		});
	};
	const onHello = (data) => {
		if (!HelloSchema.safeParse(data).success) return;
		announce();
	};
	const onNavigate = (data) => {
		const parsed = NavigateSchema.safeParse(data);
		if (!parsed.success) return;
		navigate(parsed.data.path);
		queueMicrotask(reportLocation);
	};
	const onHistory = (data) => {
		const parsed = HistorySchema.safeParse(data);
		if (!parsed.success) return;
		if (parsed.data.delta === -1 && isAtHistoryRoot()) return;
		window.history.go(parsed.data.delta);
	};
	const onConnectorTokenReady = (data) => {
		if (!ConnectorTokenReadySchema.safeParse(data).success) return;
		window.dispatchEvent(new Event(CONNECTOR_TOKEN_READY_EVENT));
	};
	const hostMessageHandlers = /* @__PURE__ */ new Map([
		["hello", onHello],
		["navigate", onNavigate],
		["history", onHistory],
		["connector-token-ready", onConnectorTokenReady]
	]);
	const onMessage = (event) => {
		if (event.source !== window.parent) return;
		if (event.origin !== parentOrigin) return;
		const envelope = EnvelopeSchema.safeParse(event.data);
		if (!envelope.success || envelope.data.version !== 1) return;
		hostMessageHandlers.get(envelope.data.type)?.(event.data);
	};
	const onPopState = () => {
		reportLocation();
	};
	const onHashChange = () => {
		reportLocation();
	};
	window.history.pushState = (data, unused, url) => {
		const next = data && typeof data === "object" ? {
			...data,
			[ROOT_STATE_KEY]: false
		} : data;
		originalPushState(next, unused, url);
		reportLocation();
	};
	window.history.replaceState = (data, unused, url) => {
		const next = isAtHistoryRoot() ? {
			...data && typeof data === "object" ? data : {},
			[ROOT_STATE_KEY]: true
		} : data;
		originalReplaceState(next, unused, url);
		reportLocation();
	};
	window.addEventListener("message", onMessage);
	window.addEventListener("popstate", onPopState);
	window.addEventListener("hashchange", onHashChange);
	announce();
	return () => {
		window.removeEventListener("message", onMessage);
		window.removeEventListener("popstate", onPopState);
		window.removeEventListener("hashchange", onHashChange);
		window.history.pushState = originalPushState;
		window.history.replaceState = originalReplaceState;
	};
}
/** Collect static path patterns from a TanStack route tree (best-effort). */
function collectRoutePathsFromTree(routeTree) {
	const paths = /* @__PURE__ */ new Set();
	const walk = (node) => {
		if (!node || typeof node !== "object") return;
		const record = node;
		const full = typeof record.fullPath === "string" ? record.fullPath : typeof record.path === "string" ? record.path : null;
		if (full !== null && full !== "") paths.add(full.startsWith("/") ? full : `/${full}`);
		else if (full === "") paths.add("/");
		const children = record.children;
		if (Array.isArray(children)) for (const child of children) walk(child);
		else if (children && typeof children === "object") for (const child of Object.values(children)) walk(child);
	};
	walk(routeTree);
	return [...paths];
}
/**
* Mount once in `__root.tsx` so the Grok preview chrome can drive navigation
* (and later receive registered routes). Noops when the app is not embedded.
*/
function PreviewHostBridge() {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		return installPreviewHostBridge({
			navigate: (path) => {
				router.history.push(path);
			},
			getRoutePaths: () => collectRoutePathsFromTree(router.routeTree)
		});
	}, [router]);
	return null;
}
var styles_default = "/assets/styles-DRFomIrp.css";
var APP_NAME = "Cuerpo Humano Interactivo";
var Route$7 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: APP_NAME },
			{
				name: "description",
				content: "Proyecto educativo de Educación Inicial: explorar el cuerpo humano con lenguaje infantil, Universidad César Vallejo."
			},
			{
				name: "theme-color",
				content: "#F3F1EC"
			}
		],
		links: [
			{
				rel: "icon",
				type: "image/svg+xml",
				href: "/favicon.svg"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "manifest",
				href: "/__grok/manifest.webmanifest"
			},
			{
				rel: "apple-touch-icon",
				href: "/__grok/icon-180.png"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Nunito:wght@500;700;800&family=Quicksand:wght@600;700&display=swap"
			}
		]
	}),
	component: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "es",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewHostBridge, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
		] })]
	})
});
var $$splitComponentImporter$5 = () => import("./routes-DjGKoI66.mjs");
var Route$6 = createFileRoute("/")({ component: lazyRouteComponent($$splitComponentImporter$5, "component") });
var $$splitComponentImporter$4 = () => import("./actividades-DESwtWVo.mjs");
var Route$5 = createFileRoute("/actividades")({ component: lazyRouteComponent($$splitComponentImporter$4, "component") });
var $$splitComponentImporter$3 = () => import("./explorar-C6wg5v36.mjs");
var Route$4 = createFileRoute("/explorar")({ component: lazyRouteComponent($$splitComponentImporter$3, "component") });
var $$splitComponentImporter$2 = () => import("./inicio-CfZvVz-L.mjs");
var Route$3 = createFileRoute("/inicio")({ component: lazyRouteComponent($$splitComponentImporter$2, "component") });
var $$splitComponentImporter$1 = () => import("./preguntas-DYYHzw5V.mjs");
var Route$2 = createFileRoute("/preguntas")({ component: lazyRouteComponent($$splitComponentImporter$1, "component") });
var Route$1 = createFileRoute("/proyecto")({ beforeLoad: () => {
	throw redirect({ to: "/inicio" });
} });
var $$splitNotFoundComponentImporter = () => import("../_id-BfWUHsrV.mjs");
var $$splitComponentImporter = () => import("../_id-BqpkdrND.mjs");
var Route = createFileRoute("/organos/$id")({
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	loader: ({ params }) => {
		const organ = organs.find((item) => item.id === params.id);
		if (!organ) throw notFound();
		return organ;
	},
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent")
});
var rootRouteChildren = {
	IndexRoute: Route$6.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$7
	}),
	ActividadesRoute: Route$5.update({
		id: "/actividades",
		path: "/actividades",
		getParentRoute: () => Route$7
	}),
	ExplorarRoute: Route$4.update({
		id: "/explorar",
		path: "/explorar",
		getParentRoute: () => Route$7
	}),
	InicioRoute: Route$3.update({
		id: "/inicio",
		path: "/inicio",
		getParentRoute: () => Route$7
	}),
	PreguntasRoute: Route$2.update({
		id: "/preguntas",
		path: "/preguntas",
		getParentRoute: () => Route$7
	}),
	ProyectoRoute: Route$1.update({
		id: "/proyecto",
		path: "/proyecto",
		getParentRoute: () => Route$7
	}),
	OrganosIdRoute: Route.update({
		id: "/organos/$id",
		path: "/organos/$id",
		getParentRoute: () => Route$7
	})
};
var routeTree = Route$7._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		rewrite: previewPathRewrite(),
		defaultErrorComponent: AppErrorComponent
	});
}
//#endregion
export { organs as a, faqs as i, Route as n, team as o, activities as r, router_exports as t };
