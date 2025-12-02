import { p as useSeoMeta, q as _sfc_main$5$1, v as useAsyncData, e as _sfc_main$f, I as ImageComponent, r as useRuntimeConfig, _ as __nuxt_component_0$2, s as __nuxt_component_0$1 } from './server.mjs';
import { withCtx, createVNode, defineComponent, withAsyncContext, unref, mergeProps, createBlock, openBlock, Fragment, renderList, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import { _ as _sfc_main$7 } from './ProjectCard-ARbnzZnM.mjs';
import { _ as _sfc_main$6, a as _sfc_main$1$1 } from './BlogPosts-7auSsqAv.mjs';
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

const _sfc_main$5 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_NuxtImg = ImageComponent;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-6" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_NuxtImg, {
    src: "/avatar.png",
    alt: "numselli",
    class: "rounded-full h-12 w-12 sm:h-16 sm:w-16",
    sizes: "48px sm:64px",
    placeholder: "",
    format: "webp"
  }, null, _parent));
  _push(`<h1 class="text-xl font-bold tracking-tight"> Hello! </h1><p> Hey there! My name is Zac (numselli) I am a 20 year old fullstack developer. My primary languages are JS, HTML/CSS, with experience in Java and C#. I&#39;m experienced with technologies such as Node.js and APIs for databases such as PostgreSQL. When I am not at the computer I am out taking phtotos photography, mountain biking, hiking, or rockcliming. </p></div>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Home/Intro.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$1]]), { __name: "HomeIntro" });
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "SocialLinks",
  __ssrInlineRender: true,
  setup(__props) {
    const { public: conf } = useRuntimeConfig();
    const links = conf.socialLinks;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$2;
      const _component_Icon = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(_attrs)}><h2 class="uppercase text-xs font-semibold text-gray-400 mb-4">FIND ME ON</h2><div class="space-y-5"><!--[-->`);
      ssrRenderList(unref(links), (link) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: link.icon,
          to: link.url,
          target: "_blank",
          external: "",
          class: "flex items-end gap-4 dark:hover:text-gray-300 group"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="text-sm"${_scopeId}>${ssrInterpolate(link.name)}</span><div class="flex-1 border-b border-dashed border-gray-300 dark:border-gray-800 group-hover:border-gray-700"${_scopeId}></div>`);
              _push2(ssrRenderComponent(_component_Icon, {
                name: link.icon,
                class: "w-6 h-6"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode("span", { class: "text-sm" }, toDisplayString(link.name), 1),
                createVNode("div", { class: "flex-1 border-b border-dashed border-gray-300 dark:border-gray-800 group-hover:border-gray-700" }),
                createVNode(_component_Icon, {
                  name: link.icon,
                  class: "w-6 h-6"
                }, null, 8, ["name"])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Home/SocialLinks.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_2 = Object.assign(_sfc_main$4, { __name: "HomeSocialLinks" });
const _sfc_main$3 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_AppProjectCard = _sfc_main$7;
  const _component_UButton = _sfc_main$f;
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 class="uppercase text-xs font-semibold mb-6"> FEATURED PROEJCTS </h2><div class="space-y-4">`);
  _push(ssrRenderComponent(_component_AppProjectCard, null, null, _parent));
  _push(`</div><div class="flex items-center justify-center mt-6 text-sm">`);
  _push(ssrRenderComponent(_component_UButton, {
    label: "All Projects →",
    to: "/projects",
    variant: "link"
  }, null, _parent));
  _push(`</div></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Home/FeaturedProjects.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender]]), { __name: "HomeFeaturedProjects" });
const _sfc_main$2 = {
  __name: "HomeFeaturedVideos",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data: videos } = ([__temp, __restore] = withAsyncContext(() => useAsyncData("videos", () => $fetch("/api/ytvids"))), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UBlogPosts = _sfc_main$6;
      const _component_UBlogPost = _sfc_main$1$1;
      const _component_UButton = _sfc_main$f;
      _push(`<div${ssrRenderAttrs(_attrs)}><h2 class="uppercase text-xs font-semibold mb-6"> RECENT VIDEOS </h2>`);
      _push(ssrRenderComponent(_component_UBlogPosts, { class: "gap-2 lg:gap-y-4" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(videos), (video, index) => {
              _push2(ssrRenderComponent(_component_UBlogPost, mergeProps({ key: index }, { ref_for: true }, video, {
                to: video.url
              }), null, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(unref(videos), (video, index) => {
                return openBlock(), createBlock(_component_UBlogPost, mergeProps({ key: index }, { ref_for: true }, video, {
                  to: video.url
                }), null, 16, ["to"]);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="flex items-center justify-center mt-6 text-sm">`);
      _push(ssrRenderComponent(_component_UButton, {
        label: "All Videos →",
        to: "https://youtube.com/@numselli/videos",
        target: "_blank",
        variant: "link"
      }, null, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Home/FeaturedVideos.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "HomeFeaturedArticles",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data: blogs } = ([__temp, __restore] = withAsyncContext(() => useAsyncData("blogs", () => queryCollection("blogs").order("date", "DESC").all())), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UBlogPosts = _sfc_main$6;
      const _component_UBlogPost = _sfc_main$1$1;
      _push(`<div${ssrRenderAttrs(_attrs)}><h2 class="uppercase text-xs font-semibold mb-6"> RECENT ARTICLES </h2>`);
      _push(ssrRenderComponent(_component_UBlogPosts, { class: "gap-2 lg:gap-y-4" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(blogs), (blog, index) => {
              _push2(ssrRenderComponent(_component_UBlogPost, mergeProps({ key: index }, { ref_for: true }, blog, {
                to: blog.path,
                date: blog.date
              }), null, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
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
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Home/FeaturedArticles.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const siteDescription = "My personal homepage";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "Home",
      description: siteDescription,
      "twitter:description": siteDescription,
      "twitter:title": siteDescription
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UContainer = _sfc_main$5$1;
      const _component_HomeIntro = __nuxt_component_1;
      const _component_HomeSocialLinks = __nuxt_component_2;
      const _component_HomeFeaturedProjects = __nuxt_component_3;
      const _component_HomeFeaturedVideos = _sfc_main$2;
      const _component_HomeFeaturedArticles = _sfc_main$1;
      _push(ssrRenderComponent(_component_UContainer, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<main class="min-h-screen"${_scopeId}><div class="space-y-24"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_HomeIntro, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_HomeSocialLinks, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_HomeFeaturedProjects, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_HomeFeaturedVideos, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_HomeFeaturedArticles, null, null, _parent2, _scopeId));
            _push2(`</div></main>`);
          } else {
            return [
              createVNode("main", { class: "min-h-screen" }, [
                createVNode("div", { class: "space-y-24" }, [
                  createVNode(_component_HomeIntro),
                  createVNode(_component_HomeSocialLinks),
                  createVNode(_component_HomeFeaturedProjects),
                  createVNode(_component_HomeFeaturedVideos),
                  createVNode(_component_HomeFeaturedArticles)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-BaC7l3sU.mjs.map
