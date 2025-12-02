import { d as defineOgImage, _ as __nuxt_component_0 } from './defineOgImage-CcXGxoj1.mjs';
import { A as useRoute, v as useAsyncData, u as useHead, p as useSeoMeta, _ as __nuxt_component_0$2 } from './server.mjs';
import { withAsyncContext, mergeProps, unref, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { q as queryCollection } from './client-DiYjOoUC.mjs';
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
import 'property-information';
import './node-Ta6SvKQA.mjs';
import 'minimark/hast';
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

const _sfc_main = {
  __name: "[...slug]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const { data: project } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(route.path, () => queryCollection("projects").path(route.path).first(), "$Jx-Vo30w_g")), __temp = await __temp, __restore(), __temp);
    if (project.value?.ogImage) defineOgImage(project.value?.ogImage);
    useHead(project.value.head || {});
    useSeoMeta(project.value.seo || {});
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ContentRenderer = __nuxt_component_0;
      const _component_nuxt_link = __nuxt_component_0$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-3xl mx-auto min-h-screen my-12" }, _attrs))}>`);
      if (unref(project)) {
        _push(`<div><h1 class="text-2xl font-semibold mb-6">${ssrInterpolate(unref(project).title)}</h1>`);
        if (unref(project)) {
          _push(ssrRenderComponent(_component_ContentRenderer, { value: unref(project) }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="mt-8">`);
        _push(ssrRenderComponent(_component_nuxt_link, {
          to: "/projects",
          class: "hover:underline"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Back`);
            } else {
              return [
                createTextVNode("Back")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/projects/[...slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_...slug_-ruYOanwn.mjs.map
