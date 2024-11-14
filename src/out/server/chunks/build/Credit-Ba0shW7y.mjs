import { a as __nuxt_component_0$5 } from './server.mjs';
import { mergeProps, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import '../nitro/nitro.mjs';
import 'lru-cache';
import 'devalue';
import 'unist-util-visit';
import 'hast-util-to-string';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'consola/core';
import 'node:url';
import '@iconify/utils';
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
import 'github-slugger';
import 'ipx';
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

const _sfc_main = {
  __name: "Credit",
  __ssrInlineRender: true,
  props: {
    label: String,
    link: String
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$5;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "text-sm p-4 bg-gray-100 dark:bg-gray-900 text-center" }, _attrs))}> This component was inspired by `);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: __props.link,
        external: "",
        target: "_blank",
        class: "underline font-medium"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(__props.label)}`);
          } else {
            return [
              createTextVNode(toDisplayString(__props.label), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`. </div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/content/Credit.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Credit-Ba0shW7y.mjs.map
