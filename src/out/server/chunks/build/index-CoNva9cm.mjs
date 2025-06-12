import { _ as _sfc_main$1 } from './Container-JMDYkoWE.mjs';
import { _ as _sfc_main$2 } from './Header-CdNQX9Ia.mjs';
import { _ as _sfc_main$3 } from './ProjectCard-BwFIQN5R.mjs';
import { withAsyncContext, withCtx, unref, createVNode, createBlock, openBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';
import { a as useSeoMeta, e as useRoute, f as useAsyncData } from './server.mjs';
import { q as queryCollection } from './app-CMqxbk6e.mjs';
import 'reka-ui';
import '../nitro/nitro.mjs';
import 'lru-cache';
import '@unocss/core';
import '@unocss/preset-wind3';
import 'devalue';
import 'consola';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '@iconify/utils';
import 'unhead/server';
import 'unhead/plugins';
import 'unhead/utils';
import 'vue-bundle-renderer/runtime';
import 'better-sqlite3';
import 'ipx';
import 'vue-router';
import '@unhead/addons';
import '@unhead/schema-org/vue';
import 'tailwindcss/colors';
import '@iconify/vue';
import '@vueuse/core';
import 'tailwind-variants';
import '@iconify/utils/lib/css/icon';
import 'perfect-debounce';
import 'vue-use-fixed-header';

const siteDescription = "A collection of the projects I have worked on";
const description = "";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    useSeoMeta({
      description: siteDescription,
      "twitter:description": siteDescription,
      "twitter:title": siteDescription
    });
    const route = useRoute();
    const { data: projects } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(route.path, () => queryCollection("projects").all(), "$fwwYv_oCw0")), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UContainer = _sfc_main$1;
      const _component_AppHeader = _sfc_main$2;
      const _component_AppProjectCard = _sfc_main$3;
      _push(ssrRenderComponent(_component_UContainer, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<main class="min-h-screen"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_AppHeader, {
              class: "mb-12",
              title: "Projects",
              description
            }, null, _parent2, _scopeId));
            _push2(`<div class="space-y-4"${_scopeId}><!--[-->`);
            ssrRenderList(unref(projects), (project, id) => {
              _push2(ssrRenderComponent(_component_AppProjectCard, {
                key: id,
                project
              }, null, _parent2, _scopeId));
            });
            _push2(`<!--]--></div></main>`);
          } else {
            return [
              createVNode("main", { class: "min-h-screen" }, [
                createVNode(_component_AppHeader, {
                  class: "mb-12",
                  title: "Projects",
                  description
                }),
                createVNode("div", { class: "space-y-4" }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(projects), (project, id) => {
                    return openBlock(), createBlock(_component_AppProjectCard, {
                      key: id,
                      project
                    }, null, 8, ["project"]);
                  }), 128))
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
//# sourceMappingURL=index-CoNva9cm.mjs.map
