import { p as useSeoMeta, q as _sfc_main$5, l as _sfc_main$i } from './server.mjs';
import { _ as _sfc_main$1 } from './Header-CEWTNQSB.mjs';
import { withCtx, createVNode, createBlock, openBlock, Fragment, renderList, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
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

const siteDescription = "A collection of useful links";
const _sfc_main = {
  __name: "bookmarks",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      description: siteDescription,
      "twitter:description": siteDescription,
      "twitter:title": siteDescription
    });
    const categories = {
      "Providing Chat Suport Resources": [
        {
          id: 1,
          label: "Dont Ask to Ask",
          url: "https://dontasktoask.com"
        },
        {
          id: 2,
          label: "Try it and See",
          url: "https://tryitands.ee"
        },
        {
          id: 3,
          label: "No Hello",
          url: "https://nohello.net"
        },
        {
          id: 4,
          label: "take-a-screenshot",
          url: "https://www.take-a-screenshot.org"
        },
        {
          id: 5,
          label: "No ETAs",
          url: "https://inessential.com/2019/10/28/no_etas.html"
        }
      ],
      "Dev Resources": [
        {
          id: 1,
          label: "Free for Dev",
          url: "https://free-for.dev"
        },
        {
          id: 2,
          label: "Architecture Notes",
          url: "https://architecturenotes.co"
        },
        {
          id: 3,
          label: "Roadmap sh",
          url: "https://roadmap.sh"
        }
      ],
      "Discord Resources": [
        {
          id: 1,
          label: "Discord Lookup",
          url: "https://discordlookup.com"
        }
      ]
    };
    function getHost(url) {
      const parsedUrl = new URL(url);
      let host = parsedUrl.host;
      if (host.startsWith("www.")) {
        host = host.substring(4);
      }
      return host;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UContainer = _sfc_main$5;
      const _component_AppHeader = _sfc_main$1;
      const _component_UAvatar = _sfc_main$i;
      _push(ssrRenderComponent(_component_UContainer, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<main class="min-h-screen"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_AppHeader, {
              class: "mb-8",
              title: "Bookmarks",
              description: _ctx.description
            }, null, _parent2, _scopeId));
            _push2(`<ul class="space-y-2"${_scopeId}><!--[-->`);
            ssrRenderList(Object.keys(categories), (category) => {
              _push2(`<div${_scopeId}>${ssrInterpolate(category)} <!--[-->`);
              ssrRenderList(categories[category], (bookmark) => {
                _push2(`<li${_scopeId}><a${ssrRenderAttr("href", bookmark.url)} target="_blank" class="flex items-center gap-3 p-2 rounded-lg -m-2 text-sm min-w-0"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_UAvatar, {
                  alt: bookmark.label,
                  ui: { rounded: "rounded-md" }
                }, null, _parent2, _scopeId));
                _push2(`<p class="truncate"${_scopeId}>${ssrInterpolate(bookmark.label)}</p><span class="flex-1"${_scopeId}></span><span class="text-xs font-medium"${_scopeId}>${ssrInterpolate(getHost(bookmark.url))}</span></a></li>`);
              });
              _push2(`<!--]--></div>`);
            });
            _push2(`<!--]--></ul></main>`);
          } else {
            return [
              createVNode("main", { class: "min-h-screen" }, [
                createVNode(_component_AppHeader, {
                  class: "mb-8",
                  title: "Bookmarks",
                  description: _ctx.description
                }, null, 8, ["description"]),
                createVNode("ul", { class: "space-y-2" }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(Object.keys(categories), (category) => {
                    return openBlock(), createBlock("div", null, [
                      createTextVNode(toDisplayString(category) + " ", 1),
                      (openBlock(true), createBlock(Fragment, null, renderList(categories[category], (bookmark) => {
                        return openBlock(), createBlock("li", {
                          key: bookmark.id
                        }, [
                          createVNode("a", {
                            href: bookmark.url,
                            target: "_blank",
                            class: "flex items-center gap-3 p-2 rounded-lg -m-2 text-sm min-w-0"
                          }, [
                            createVNode(_component_UAvatar, {
                              alt: bookmark.label,
                              ui: { rounded: "rounded-md" }
                            }, null, 8, ["alt"]),
                            createVNode("p", { class: "truncate" }, toDisplayString(bookmark.label), 1),
                            createVNode("span", { class: "flex-1" }),
                            createVNode("span", { class: "text-xs font-medium" }, toDisplayString(getHost(bookmark.url)), 1)
                          ], 8, ["href"])
                        ]);
                      }), 128))
                    ]);
                  }), 256))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/bookmarks.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=bookmarks-BYYf1tU_.mjs.map
