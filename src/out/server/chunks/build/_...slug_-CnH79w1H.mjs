import { a as __nuxt_component_1, _ as __nuxt_component_0$1 } from './Avatar-DNZjyOZi.mjs';
import { m as mergeConfig, k as appConfig, n as useUI, d as useRoute, q as queryContent, a as __nuxt_component_0$5, j as __nuxt_component_0$2, _ as _export_sfc } from './server.mjs';
import { _ as __nuxt_component_0 } from './Icon-ueMA-KHC.mjs';
import { defineComponent, toRef, computed, useSSRContext, withAsyncContext, withCtx, unref, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, mergeProps } from 'vue';
import { twMerge, twJoin } from 'tailwind-merge';
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttrs, ssrRenderClass, ssrRenderSlot } from 'vue/server-renderer';
import _sfc_main$2 from './ContentDoc-CyYkilCx.mjs';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'consola/core';
import 'node:fs';
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
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@unhead/addons';
import '@iconify/vue';
import '@iconify/vue/dist/offline';
import 'vue-use-fixed-header';
import './head-Bi2K1Iwo.mjs';
import './ContentRenderer-C0VSUtN7.mjs';
import './ContentRendererMarkdown-CFDJ0LI2.mjs';
import 'property-information';
import './node-04k6j4dz.mjs';
import './ContentQuery-CcT5Pwe_.mjs';
import './asyncData-CC2tSTex.mjs';

const divider = {
  wrapper: {
    base: "flex items-center align-center text-center",
    horizontal: "w-full flex-row",
    vertical: "flex-col"
  },
  container: {
    base: "font-medium text-gray-700 dark:text-gray-200 flex",
    horizontal: "mx-3 whitespace-nowrap",
    vertical: "my-2"
  },
  border: {
    base: "flex border-gray-200 dark:border-gray-800",
    horizontal: "w-full",
    vertical: "h-full",
    size: {
      horizontal: {
        "2xs": "border-t",
        xs: "border-t-[2px]",
        sm: "border-t-[3px]",
        md: "border-t-[4px]",
        lg: "border-t-[5px]",
        xl: "border-t-[6px]"
      },
      vertical: {
        "2xs": "border-s",
        xs: "border-s-[2px]",
        sm: "border-s-[3px]",
        md: "border-s-[4px]",
        lg: "border-s-[5px]",
        xl: "border-s-[6px]"
      }
    },
    type: {
      solid: "border-solid",
      dotted: "border-dotted",
      dashed: "border-dashed"
    }
  },
  icon: {
    base: "flex-shrink-0 w-5 h-5"
  },
  avatar: {
    base: "flex-shrink-0",
    size: "2xs"
  },
  label: "text-sm",
  default: {
    size: "2xs"
  }
};
const config = mergeConfig(appConfig.ui.strategy, appConfig.ui.divider, divider);
const _sfc_main$1 = defineComponent({
  components: {
    UIcon: __nuxt_component_0,
    UAvatar: __nuxt_component_1
  },
  inheritAttrs: false,
  props: {
    label: {
      type: String,
      default: null
    },
    icon: {
      type: String,
      default: null
    },
    avatar: {
      type: Object,
      default: null
    },
    size: {
      type: String,
      default: () => config.default.size,
      validator(value) {
        return Object.keys(config.border.size.horizontal).includes(value) || Object.keys(config.border.size.vertical).includes(value);
      }
    },
    orientation: {
      type: String,
      default: "horizontal",
      validator: (value) => ["horizontal", "vertical"].includes(value)
    },
    type: {
      type: String,
      default: "solid",
      validator: (value) => ["solid", "dotted", "dashed"].includes(value)
    },
    class: {
      type: [String, Object, Array],
      default: () => ""
    },
    ui: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props) {
    const { ui, attrs } = useUI("divider", toRef(props, "ui"), config);
    const wrapperClass = computed(() => {
      return twMerge(twJoin(
        ui.value.wrapper.base,
        ui.value.wrapper[props.orientation]
      ), props.class);
    });
    const containerClass = computed(() => {
      return twJoin(
        ui.value.container.base,
        ui.value.container[props.orientation]
      );
    });
    const borderClass = computed(() => {
      return twJoin(
        ui.value.border.base,
        ui.value.border[props.orientation],
        ui.value.border.size[props.orientation][props.size],
        ui.value.border.type[props.type]
      );
    });
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      wrapperClass,
      containerClass,
      borderClass
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_UIcon = __nuxt_component_0;
  const _component_UAvatar = __nuxt_component_1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: _ctx.wrapperClass }, _ctx.attrs, _attrs))}><div class="${ssrRenderClass(_ctx.borderClass)}"></div>`);
  if (_ctx.label || _ctx.icon || _ctx.avatar || _ctx.$slots.default) {
    _push(`<!--[--><div class="${ssrRenderClass(_ctx.containerClass)}">`);
    ssrRenderSlot(_ctx.$slots, "default", {}, () => {
      if (_ctx.label) {
        _push(`<span class="${ssrRenderClass(_ctx.ui.label)}">${ssrInterpolate(_ctx.label)}</span>`);
      } else if (_ctx.icon) {
        _push(ssrRenderComponent(_component_UIcon, {
          name: _ctx.icon,
          class: _ctx.ui.icon.base
        }, null, _parent));
      } else if (_ctx.avatar) {
        _push(ssrRenderComponent(_component_UAvatar, mergeProps({ size: _ctx.ui.avatar.size, ..._ctx.avatar }, {
          class: _ctx.ui.avatar.base
        }), null, _parent));
      } else {
        _push(`<!---->`);
      }
    }, _push, _parent);
    _push(`</div><div class="${ssrRenderClass(_ctx.borderClass)}"></div><!--]-->`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/layout/Divider.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "[...slug]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const project = ([__temp, __restore] = withAsyncContext(() => queryContent(route.path).findOne()), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UContainer = __nuxt_component_0$1;
      const _component_UAvatar = __nuxt_component_1;
      const _component_NuxtLink = __nuxt_component_0$5;
      const _component_Icon = __nuxt_component_0$2;
      const _component_UDivider = __nuxt_component_4;
      const _component_ContentDoc = _sfc_main$2;
      _push(ssrRenderComponent(_component_UContainer, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h1 class="font-bold"${_scopeId}>${ssrInterpolate(unref(project).title)}</h1><div class="grid grid-cols-2 content-between"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UAvatar, {
              src: unref(project).thumbnail,
              ui: { rounded: "rounded z-10 relative" },
              size: "md",
              alt: unref(project).title
            }, null, _parent2, _scopeId));
            _push2(`<div class=""${_scopeId}><div class="flex"${_scopeId}><!--[-->`);
            ssrRenderList(unref(project).links, (link) => {
              _push2(`<div${_scopeId}>`);
              _push2(ssrRenderComponent(_component_NuxtLink, {
                to: link.url,
                target: "_blank",
                class: "flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_Icon, {
                      "aria-hidden": "true",
                      name: link.icon,
                      class: "w-5 h-5 z-10"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_Icon, {
                        "aria-hidden": "true",
                        name: link.icon,
                        class: "w-5 h-5 z-10"
                      }, null, 8, ["name"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div>`);
            });
            _push2(`<!--]--></div></div></div>`);
            _push2(ssrRenderComponent(_component_UDivider, null, null, _parent2, _scopeId));
            _push2(`<main class=""${_scopeId}>`);
            _push2(ssrRenderComponent(_component_ContentDoc, null, null, _parent2, _scopeId));
            _push2(`</main>`);
          } else {
            return [
              createVNode("h1", { class: "font-bold" }, toDisplayString(unref(project).title), 1),
              createVNode("div", { class: "grid grid-cols-2 content-between" }, [
                createVNode(_component_UAvatar, {
                  src: unref(project).thumbnail,
                  ui: { rounded: "rounded z-10 relative" },
                  size: "md",
                  alt: unref(project).title
                }, null, 8, ["src", "alt"]),
                createVNode("div", { class: "" }, [
                  createVNode("div", { class: "flex" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(project).links, (link) => {
                      return openBlock(), createBlock("div", null, [
                        createVNode(_component_NuxtLink, {
                          to: link.url,
                          target: "_blank",
                          class: "flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_Icon, {
                              "aria-hidden": "true",
                              name: link.icon,
                              class: "w-5 h-5 z-10"
                            }, null, 8, ["name"])
                          ]),
                          _: 2
                        }, 1032, ["to"])
                      ]);
                    }), 256))
                  ])
                ])
              ]),
              createVNode(_component_UDivider),
              createVNode("main", { class: "" }, [
                createVNode(_component_ContentDoc)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/projects/[...slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_...slug_-CnH79w1H.mjs.map
