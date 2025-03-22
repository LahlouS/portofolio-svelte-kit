import { A as ArticleEndPoint } from './Constants-DmEJ-UuL.js';

const load = async ({ params }) => {
  let response = await fetch(`${ArticleEndPoint}/${params.slug}`);
  return {
    article: response.ok && await response.json()
  };
};

var _page_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 5;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-DqKCUQ9y.js')).default;
const universal_id = "src/routes/blog/[slug]/+page.ts";
const imports = ["_app/immutable/nodes/5.BW-6sDlK.js","_app/immutable/chunks/CUd6hoc2.js","_app/immutable/chunks/CAxKlILk.js","_app/immutable/chunks/CMk37LVu.js","_app/immutable/chunks/C2_A9Axq.js"];
const stylesheets = ["_app/immutable/assets/IconBase.CcBojqxD.css","_app/immutable/assets/5.CgdGmR6t.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page_ts as universal, universal_id };
//# sourceMappingURL=5-BWOR828H.js.map
