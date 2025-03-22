import { U as UserInfoEndpoint } from './Constants-DmEJ-UuL.js';
import { e as error } from './index-CvuFLVuQ.js';

async function load({ fetch }) {
  let devToArticles;
  try {
    devToArticles = await fetch(`${UserInfoEndpoint}ladvace`);
    devToArticles = await devToArticles.json();
  } catch (e) {
    throw error(404, "Not found");
  }
  return {
    devToArticles
  };
}

var _page_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 4;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-kQ7-ebaM.js')).default;
const universal_id = "src/routes/blog/+page.ts";
const imports = ["_app/immutable/nodes/4.CEYuwH1t.js","_app/immutable/chunks/CUd6hoc2.js","_app/immutable/chunks/CYgJF_JY.js","_app/immutable/chunks/CAxKlILk.js","_app/immutable/chunks/CMk37LVu.js"];
const stylesheets = ["_app/immutable/assets/4.D8o7wn1R.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page_ts as universal, universal_id };
//# sourceMappingURL=4-CUm6yx-6.js.map
