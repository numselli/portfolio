import { p as useSeoMeta, q as _sfc_main$5 } from './server.mjs';
import { _ as _sfc_main$1 } from './Header-CEWTNQSB.mjs';
import { _ as _sfc_main$2 } from './ProjectCard-ARbnzZnM.mjs';
import { withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import '../nitro/nitro.mjs';
import 'lru-cache';
import '@unocss/core';
import '@unocss/preset-wind3';
import 'devalue';
import 'consola';
import 'unhead';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import 'unhead/server';
import 'unhead/plugins';
import 'unhead/utils';
import 'vue-bundle-renderer/runtime';
import '@iconify/utils';
import 'better-sqlite3';
import 'ipx';
import 'vue-router';
import '@unhead/addons';
import '@unhead/schema-org/vue';
import 'tailwindcss/colors';
import '@iconify/vue';
import 'reka-ui';
import '@vueuse/core';
import 'tailwind-variants';
import '@iconify/utils/lib/css/icon';
import 'perfect-debounce';
import 'vue-use-fixed-header';
import './BlogPosts-7auSsqAv.mjs';
import './Badge-CMLfnK4z.mjs';
import './client-DiYjOoUC.mjs';

const siteDescription = "A collection of the projects I have worked on";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      description: siteDescription,
      "twitter:description": siteDescription,
      "twitter:title": siteDescription
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UContainer = _sfc_main$5;
      const _component_AppHeader = _sfc_main$1;
      const _component_AppProjectCard = _sfc_main$2;
      _push(ssrRenderComponent(_component_UContainer, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<main class="min-h-screen"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_AppHeader, {
              class: "mb-12",
              title: "Projects",
              description: siteDescription
            }, null, _parent2, _scopeId));
            _push2(`<div class="space-y-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_AppProjectCard, null, null, _parent2, _scopeId));
            _push2(`</div></main>`);
          } else {
            return [
              createVNode("main", { class: "min-h-screen" }, [
                createVNode(_component_AppHeader, {
                  class: "mb-12",
                  title: "Projects",
                  description: siteDescription
                }),
                createVNode("div", { class: "space-y-4" }, [
                  createVNode(_component_AppProjectCard)
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/projects/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-BPt-6vV6.mjs.map
