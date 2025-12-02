import { p as useSeoMeta, v as useAsyncData, q as _sfc_main$5 } from './server.mjs';
import { _ as _sfc_main$1 } from './Header-CEWTNQSB.mjs';
import { _ as _sfc_main$2, a as _sfc_main$1$1 } from './BlogPosts-7auSsqAv.mjs';
import { withAsyncContext, withCtx, unref, mergeProps, createBlock, openBlock, Fragment, renderList, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';
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
import './Badge-CMLfnK4z.mjs';

const siteDescription = "A collection of my blog posts";
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
    const { data: blogs } = ([__temp, __restore] = withAsyncContext(() => useAsyncData("blogs", () => queryCollection("blogs").order("date", "DESC").all())), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UContainer = _sfc_main$5;
      const _component_AppHeader = _sfc_main$1;
      const _component_UBlogPosts = _sfc_main$2;
      const _component_UBlogPost = _sfc_main$1$1;
      _push(ssrRenderComponent(_component_UContainer, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<main class="min-h-screen"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_AppHeader, {
              class: "mb-12",
              title: "Blog posts",
              description: siteDescription
            }, null, _parent2, _scopeId));
            _push2(`<div class="space-y-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UBlogPosts, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(unref(blogs), (blog, index) => {
                    _push3(ssrRenderComponent(_component_UBlogPost, mergeProps({ key: index }, { ref_for: true }, blog, {
                      to: blog.path,
                      date: blog.date
                    }), null, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(blogs), (blog, index) => {
                      return openBlock(), createBlock(_component_UBlogPost, mergeProps({ key: index }, { ref_for: true }, blog, {
                        to: blog.path,
                        date: blog.date
                      }), null, 16, ["to", "date"]);
                    }), 128))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></main>`);
          } else {
            return [
              createVNode("main", { class: "min-h-screen" }, [
                createVNode(_component_AppHeader, {
                  class: "mb-12",
                  title: "Blog posts",
                  description: siteDescription
                }),
                createVNode("div", { class: "space-y-4" }, [
                  createVNode(_component_UBlogPosts, null, {
                    default: withCtx(() => [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(blogs), (blog, index) => {
                        return openBlock(), createBlock(_component_UBlogPost, mergeProps({ key: index }, { ref_for: true }, blog, {
                          to: blog.path,
                          date: blog.date
                        }), null, 16, ["to", "date"]);
                      }), 128))
                    ]),
                    _: 1
                  })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blogs/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-C-eW8rCo.mjs.map
