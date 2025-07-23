import { c as createComponent, a as createAstro, b as addAttribute, r as renderHead, d as renderComponent, e as renderTemplate } from '../../chunks/astro/server_CsO9spgc.mjs';
import 'kleur/colors';
/* empty css                                            */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const prerender = false;
const $$id = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Dashboard</title>${renderHead()}</head> <body> ${renderComponent($$result, "EditorPage", null, { "id": id ?? "", "client:only": true, "client:component-hydration": "only", "client:component-path": "@/components/react-pages/editor", "client:component-export": "default" })} </body></html>`;
}, "/workspaces/thought-gallery-astro/frontend/src/pages/editor/[id].astro", void 0);

const $$file = "/workspaces/thought-gallery-astro/frontend/src/pages/editor/[id].astro";
const $$url = "/editor/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$id,
	file: $$file,
	prerender,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
