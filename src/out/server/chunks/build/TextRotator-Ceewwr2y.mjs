import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'consola/core';
import 'devalue';
import 'node:url';
import '@iconify/utils';
import 'shiki/core';
import '@shikijs/transformers';
import 'unified';
import 'mdast-util-to-string';
import 'micromark';
import 'unist-util-stringify-position';
import 'micromark-util-character';
import 'micromark-util-chunked';
import 'micromark-util-resolve-all';
import 'micromark-util-sanitize-uri';
import 'slugify';
import 'remark-parse';
import 'remark-rehype';
import 'remark-mdc';
import 'remark-emoji';
import 'remark-gfm';
import 'rehype-external-links';
import 'rehype-sort-attribute-values';
import 'rehype-sort-attributes';
import 'rehype-raw';
import 'detab';
import 'hast-util-to-string';
import 'github-slugger';
import 'ipx';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@unhead/addons';
import '@unhead/schema-org';
import '@unhead/schema-org/vue';
import '@iconify/vue';
import 'tailwind-merge';
import '@iconify/utils/lib/css/icon';
import 'vue-use-fixed-header';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-4 py-8 flex items-center justify-center" }, _attrs))}><div class="font-extrabold text-lg [text-wrap:balance] text-gray-700 dark:text-gray-200"> We design and develop the best <span class="inline-flex flex-col h-[calc(theme(fontSize.lg)*theme(lineHeight.tight))] overflow-hidden"><ul class="block text-left leading-tight [&amp;_li]:block animate-text-slide"><li class="text-indigo-500">Mobile apps</li><li class="text-rose-500">Websites</li><li class="text-yellow-500">Admin dashboards</li><li class="text-teal-500">Landing pages</li><li class="text-pink-500">Illustrations</li><li class="text-sky-500">Icons</li></ul></span></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/content/TextRotator.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const TextRotator = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { TextRotator as default };
//# sourceMappingURL=TextRotator-Ceewwr2y.mjs.map
