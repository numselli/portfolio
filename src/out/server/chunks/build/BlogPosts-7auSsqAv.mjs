import { useSlots, computed, unref, mergeProps, withCtx, createSlots, renderList, renderSlot, createBlock, openBlock, Fragment, createVNode, resolveDynamicComponent, createCommentVNode, createTextVNode, toDisplayString, provide, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderSlot, ssrRenderList, ssrRenderClass, ssrRenderVNode, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { Primitive, useDateFormatter } from 'reka-ui';
import { b as useAppConfig, t as tv, z as omit, a as useLocale, y as getSlotChildrenText, I as ImageComponent, x as _sfc_main$g, l as _sfc_main$i, w as avatarGroupInjectionKey, n as _sfc_main$j } from './server.mjs';
import { _ as _sfc_main$4 } from './Badge-CMLfnK4z.mjs';

const theme$3 = {
  "slots": {
    "root": "inline-flex flex-row-reverse justify-end",
    "base": "relative rounded-full ring-bg first:me-0"
  },
  "variants": {
    "size": {
      "3xs": {
        "base": "ring -me-0.5"
      },
      "2xs": {
        "base": "ring -me-0.5"
      },
      "xs": {
        "base": "ring -me-0.5"
      },
      "sm": {
        "base": "ring-2 -me-1.5"
      },
      "md": {
        "base": "ring-2 -me-1.5"
      },
      "lg": {
        "base": "ring-2 -me-1.5"
      },
      "xl": {
        "base": "ring-3 -me-2"
      },
      "2xl": {
        "base": "ring-3 -me-2"
      },
      "3xl": {
        "base": "ring-3 -me-2"
      }
    }
  },
  "defaultVariants": {
    "size": "md"
  }
};
const _sfc_main$3 = {
  __name: "UAvatarGroup",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false },
    size: { type: null, required: false },
    max: { type: [Number, String], required: false },
    class: { type: null, required: false },
    ui: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    const slots = useSlots();
    const appConfig = useAppConfig();
    const ui = computed(() => tv({ extend: tv(theme$3), ...appConfig.ui?.avatarGroup || {} })({
      size: props.size
    }));
    const max = computed(() => typeof props.max === "string" ? Number.parseInt(props.max, 10) : props.max);
    const children = computed(() => {
      let children2 = slots.default?.();
      if (children2?.length) {
        children2 = children2.flatMap((child) => {
          if (typeof child.type === "symbol") {
            if (typeof child.children === "string") {
              return;
            }
            return child.children;
          }
          return child;
        }).filter(Boolean);
      }
      return children2 || [];
    });
    const visibleAvatars = computed(() => {
      if (!children.value.length) {
        return [];
      }
      if (!max.value || max.value <= 0) {
        return [...children.value].reverse();
      }
      return [...children.value].slice(0, max.value).reverse();
    });
    const hiddenCount = computed(() => {
      if (!children.value.length) {
        return 0;
      }
      return children.value.length - visibleAvatars.value.length;
    });
    provide(avatarGroupInjectionKey, computed(() => ({
      size: props.size
    })));
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: __props.as,
        "data-slot": "root",
        class: ui.value.root({ class: [props.ui?.root, props.class] })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (hiddenCount.value > 0) {
              _push2(ssrRenderComponent(_sfc_main$i, {
                text: `+${hiddenCount.value}`,
                "data-slot": "base",
                class: ui.value.base({ class: props.ui?.base })
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`<!--[-->`);
            ssrRenderList(visibleAvatars.value, (avatar, count) => {
              ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(avatar), {
                key: count,
                "data-slot": "base",
                class: ui.value.base({ class: props.ui?.base })
              }, null), _parent2, _scopeId);
            });
            _push2(`<!--]-->`);
          } else {
            return [
              hiddenCount.value > 0 ? (openBlock(), createBlock(_sfc_main$i, {
                key: 0,
                text: `+${hiddenCount.value}`,
                "data-slot": "base",
                class: ui.value.base({ class: props.ui?.base })
              }, null, 8, ["text", "class"])) : createCommentVNode("", true),
              (openBlock(true), createBlock(Fragment, null, renderList(visibleAvatars.value, (avatar, count) => {
                return openBlock(), createBlock(resolveDynamicComponent(avatar), {
                  key: count,
                  "data-slot": "base",
                  class: ui.value.base({ class: props.ui?.base })
                }, null, 8, ["class"]);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/AvatarGroup.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const theme$2 = {
  "slots": {
    "root": "relative group/user",
    "wrapper": "",
    "name": "font-medium",
    "description": "text-muted",
    "avatar": "shrink-0"
  },
  "variants": {
    "orientation": {
      "horizontal": {
        "root": "flex items-center"
      },
      "vertical": {
        "root": "flex flex-col"
      }
    },
    "to": {
      "true": {
        "name": [
          "text-default peer-hover:text-highlighted",
          "transition-colors"
        ],
        "description": [
          "peer-hover:text-toned",
          "transition-colors"
        ],
        "avatar": "transform transition-transform duration-200 group-hover/user:scale-115"
      },
      "false": {
        "name": "text-highlighted",
        "description": ""
      }
    },
    "size": {
      "3xs": {
        "root": "gap-1",
        "wrapper": "flex items-center gap-1",
        "name": "text-xs",
        "description": "text-xs"
      },
      "2xs": {
        "root": "gap-1.5",
        "wrapper": "flex items-center gap-1.5",
        "name": "text-xs",
        "description": "text-xs"
      },
      "xs": {
        "root": "gap-1.5",
        "wrapper": "flex items-center gap-1.5",
        "name": "text-xs",
        "description": "text-xs"
      },
      "sm": {
        "root": "gap-2",
        "name": "text-xs",
        "description": "text-xs"
      },
      "md": {
        "root": "gap-2",
        "name": "text-sm",
        "description": "text-xs"
      },
      "lg": {
        "root": "gap-2.5",
        "name": "text-sm",
        "description": "text-sm"
      },
      "xl": {
        "root": "gap-2.5",
        "name": "text-base",
        "description": "text-sm"
      },
      "2xl": {
        "root": "gap-3",
        "name": "text-base",
        "description": "text-base"
      },
      "3xl": {
        "root": "gap-3",
        "name": "text-lg",
        "description": "text-base"
      }
    }
  },
  "defaultVariants": {
    "size": "md"
  }
};
const _sfc_main$2 = /* @__PURE__ */ Object.assign({ inheritAttrs: false }, {
  __name: "UUser",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false },
    name: { type: String, required: false },
    description: { type: String, required: false },
    avatar: { type: Object, required: false },
    chip: { type: [Boolean, Object], required: false },
    size: { type: null, required: false },
    orientation: { type: null, required: false, default: "horizontal" },
    to: { type: null, required: false },
    target: { type: [String, Object, null], required: false },
    onClick: { type: Function, required: false },
    class: { type: null, required: false },
    ui: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    const slots = useSlots();
    const appConfig = useAppConfig();
    const ui = computed(() => tv({ extend: tv(theme$2), ...appConfig.ui?.user || {} })({
      size: props.size,
      orientation: props.orientation,
      to: !!props.to || !!props.onClick
    }));
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: __props.as,
        "data-orientation": __props.orientation,
        "data-slot": "root",
        class: ui.value.root({ class: [props.ui?.root, props.class] }),
        onClick: __props.onClick
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "avatar", { ui: ui.value }, () => {
              if (__props.chip && __props.avatar) {
                _push2(ssrRenderComponent(_sfc_main$j, mergeProps({ inset: "" }, typeof __props.chip === "object" ? __props.chip : {}, { size: __props.size }), {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_sfc_main$i, mergeProps({ alt: __props.name }, __props.avatar, {
                        size: __props.size,
                        "data-slot": "avatar",
                        class: ui.value.avatar({ class: props.ui?.avatar })
                      }), null, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(_sfc_main$i, mergeProps({ alt: __props.name }, __props.avatar, {
                          size: __props.size,
                          "data-slot": "avatar",
                          class: ui.value.avatar({ class: props.ui?.avatar })
                        }), null, 16, ["alt", "size", "class"])
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else if (__props.avatar) {
                _push2(ssrRenderComponent(_sfc_main$i, mergeProps({ alt: __props.name }, __props.avatar, {
                  size: __props.size,
                  "data-slot": "avatar",
                  class: ui.value.avatar({ class: props.ui?.avatar })
                }), null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
            }, _push2, _parent2, _scopeId);
            _push2(`<div data-slot="wrapper" class="${ssrRenderClass(ui.value.wrapper({ class: props.ui?.wrapper }))}"${_scopeId}>`);
            if (__props.to) {
              _push2(ssrRenderComponent(_sfc_main$g, mergeProps({ "aria-label": __props.name }, { to: __props.to, target: __props.target, ..._ctx.$attrs }, {
                class: "focus:outline-none peer",
                tabindex: "-1",
                raw: ""
              }), {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span class="absolute inset-0" aria-hidden="true"${_scopeId2}></span>`);
                  } else {
                    return [
                      createVNode("span", {
                        class: "absolute inset-0",
                        "aria-hidden": "true"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            ssrRenderSlot(_ctx.$slots, "default", {}, () => {
              if (__props.name || !!slots.name) {
                _push2(`<p data-slot="name" class="${ssrRenderClass(ui.value.name({ class: props.ui?.name }))}"${_scopeId}>`);
                ssrRenderSlot(_ctx.$slots, "name", {}, () => {
                  _push2(`${ssrInterpolate(__props.name)}`);
                }, _push2, _parent2, _scopeId);
                _push2(`</p>`);
              } else {
                _push2(`<!---->`);
              }
              if (__props.description || !!slots.description) {
                _push2(`<p data-slot="description" class="${ssrRenderClass(ui.value.description({ class: props.ui?.description }))}"${_scopeId}>`);
                ssrRenderSlot(_ctx.$slots, "description", {}, () => {
                  _push2(`${ssrInterpolate(__props.description)}`);
                }, _push2, _parent2, _scopeId);
                _push2(`</p>`);
              } else {
                _push2(`<!---->`);
              }
            }, _push2, _parent2, _scopeId);
            _push2(`</div>`);
          } else {
            return [
              renderSlot(_ctx.$slots, "avatar", { ui: ui.value }, () => [
                __props.chip && __props.avatar ? (openBlock(), createBlock(_sfc_main$j, mergeProps({
                  key: 0,
                  inset: ""
                }, typeof __props.chip === "object" ? __props.chip : {}, { size: __props.size }), {
                  default: withCtx(() => [
                    createVNode(_sfc_main$i, mergeProps({ alt: __props.name }, __props.avatar, {
                      size: __props.size,
                      "data-slot": "avatar",
                      class: ui.value.avatar({ class: props.ui?.avatar })
                    }), null, 16, ["alt", "size", "class"])
                  ]),
                  _: 1
                }, 16, ["size"])) : __props.avatar ? (openBlock(), createBlock(_sfc_main$i, mergeProps({
                  key: 1,
                  alt: __props.name
                }, __props.avatar, {
                  size: __props.size,
                  "data-slot": "avatar",
                  class: ui.value.avatar({ class: props.ui?.avatar })
                }), null, 16, ["alt", "size", "class"])) : createCommentVNode("", true)
              ]),
              createVNode("div", {
                "data-slot": "wrapper",
                class: ui.value.wrapper({ class: props.ui?.wrapper })
              }, [
                __props.to ? (openBlock(), createBlock(_sfc_main$g, mergeProps({
                  key: 0,
                  "aria-label": __props.name
                }, { to: __props.to, target: __props.target, ..._ctx.$attrs }, {
                  class: "focus:outline-none peer",
                  tabindex: "-1",
                  raw: ""
                }), {
                  default: withCtx(() => [
                    createVNode("span", {
                      class: "absolute inset-0",
                      "aria-hidden": "true"
                    })
                  ]),
                  _: 1
                }, 16, ["aria-label"])) : createCommentVNode("", true),
                renderSlot(_ctx.$slots, "default", {}, () => [
                  __props.name || !!slots.name ? (openBlock(), createBlock("p", {
                    key: 0,
                    "data-slot": "name",
                    class: ui.value.name({ class: props.ui?.name })
                  }, [
                    renderSlot(_ctx.$slots, "name", {}, () => [
                      createTextVNode(toDisplayString(__props.name), 1)
                    ])
                  ], 2)) : createCommentVNode("", true),
                  __props.description || !!slots.description ? (openBlock(), createBlock("p", {
                    key: 1,
                    "data-slot": "description",
                    class: ui.value.description({ class: props.ui?.description })
                  }, [
                    renderSlot(_ctx.$slots, "description", {}, () => [
                      createTextVNode(toDisplayString(__props.description), 1)
                    ])
                  ], 2)) : createCommentVNode("", true)
                ])
              ], 2)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/User.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const theme$1 = {
  "slots": {
    "root": "relative group/blog-post flex flex-col rounded-lg overflow-hidden",
    "header": "relative overflow-hidden aspect-[16/9] w-full pointer-events-none",
    "body": "min-w-0 flex-1 flex flex-col",
    "footer": "",
    "image": "object-cover object-top w-full h-full",
    "title": "text-xl text-pretty font-semibold text-highlighted",
    "description": "mt-1 text-base text-pretty",
    "authors": "pt-4 mt-auto flex flex-wrap gap-x-3 gap-y-1.5",
    "avatar": "",
    "meta": "flex items-center gap-2 mb-2",
    "date": "text-sm",
    "badge": ""
  },
  "variants": {
    "orientation": {
      "horizontal": {
        "root": "lg:grid lg:grid-cols-2 lg:items-center gap-x-8",
        "body": "justify-center p-4 sm:p-6 lg:px-0"
      },
      "vertical": {
        "root": "flex flex-col",
        "body": "p-4 sm:p-6"
      }
    },
    "variant": {
      "outline": {
        "root": "bg-default ring ring-default",
        "date": "text-toned",
        "description": "text-muted"
      },
      "soft": {
        "root": "bg-elevated/50",
        "date": "text-muted",
        "description": "text-toned"
      },
      "subtle": {
        "root": "bg-elevated/50 ring ring-default",
        "date": "text-muted",
        "description": "text-toned"
      },
      "ghost": {
        "date": "text-toned",
        "description": "text-muted",
        "header": "shadow-lg rounded-lg"
      },
      "naked": {
        "root": "p-0 sm:p-0",
        "date": "text-toned",
        "description": "text-muted",
        "header": "shadow-lg rounded-lg"
      }
    },
    "to": {
      "true": {
        "root": [
          "transition"
        ],
        "image": "transform transition-transform duration-200 group-hover/blog-post:scale-110",
        "avatar": "transform transition-transform duration-200 hover:scale-115"
      }
    },
    "image": {
      "true": ""
    }
  },
  "compoundVariants": [
    {
      "variant": "outline",
      "to": true,
      "class": {
        "root": "hover:bg-elevated/50"
      }
    },
    {
      "variant": "soft",
      "to": true,
      "class": {
        "root": "hover:bg-elevated"
      }
    },
    {
      "variant": "subtle",
      "to": true,
      "class": {
        "root": "hover:bg-elevated hover:ring-accented"
      }
    },
    {
      "variant": "ghost",
      "to": true,
      "class": {
        "root": "hover:bg-elevated/50",
        "header": [
          "group-hover/blog-post:shadow-none",
          "transition-all"
        ]
      }
    },
    {
      "variant": "ghost",
      "to": true,
      "orientation": "vertical",
      "class": {
        "header": "group-hover/blog-post:rounded-b-none"
      }
    },
    {
      "variant": "ghost",
      "to": true,
      "orientation": "horizontal",
      "class": {
        "header": "group-hover/blog-post:rounded-r-none"
      }
    },
    {
      "orientation": "vertical",
      "image": false,
      "variant": "naked",
      "class": {
        "body": "p-0 sm:p-0"
      }
    }
  ],
  "defaultVariants": {
    "variant": "outline"
  }
};
const _sfc_main$1 = /* @__PURE__ */ Object.assign({ inheritAttrs: false }, {
  __name: "UBlogPost",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false, default: "article" },
    title: { type: String, required: false },
    description: { type: String, required: false },
    date: { type: [String, Date], required: false },
    badge: { type: [String, Object], required: false },
    authors: { type: Array, required: false },
    image: { type: [String, Object], required: false },
    orientation: { type: null, required: false, default: "vertical" },
    variant: { type: null, required: false },
    to: { type: null, required: false },
    target: { type: [String, Object, null], required: false },
    onClick: { type: Function, required: false },
    class: { type: null, required: false },
    ui: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    const slots = useSlots();
    const { locale } = useLocale();
    const appConfig = useAppConfig();
    const formatter = useDateFormatter(locale.value.code);
    const ui = computed(() => tv({ extend: tv(theme$1), ...appConfig.ui?.blogPost || {} })({
      orientation: props.orientation,
      variant: props.variant,
      image: !!props.image,
      to: !!props.to || !!props.onClick
    }));
    const date = computed(() => {
      if (!props.date) {
        return;
      }
      try {
        return formatter.custom(new Date(props.date), { dateStyle: "medium" });
      } catch {
        return props.date;
      }
    });
    const datetime = computed(() => {
      if (!props.date) {
        return;
      }
      try {
        return new Date(props.date)?.toISOString();
      } catch {
        return void 0;
      }
    });
    const ariaLabel = computed(() => {
      const slotText = slots.title && getSlotChildrenText(slots.title());
      return (slotText || props.title || "Post link").trim();
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: __props.as,
        "data-orientation": __props.orientation,
        "data-slot": "root",
        class: ui.value.root({ class: [props.ui?.root, props.class] }),
        onClick: __props.onClick
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (__props.image || !!slots.header) {
              _push2(`<div data-slot="header" class="${ssrRenderClass(ui.value.header({ class: props.ui?.header }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "header", { ui: ui.value }, () => {
                ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(unref(ImageComponent)), mergeProps(typeof __props.image === "string" ? { src: __props.image, alt: __props.title } : { alt: __props.title, ...__props.image }, {
                  "data-slot": "image",
                  class: ui.value.image({ class: props.ui?.image, to: !!__props.to })
                }), null), _parent2, _scopeId);
              }, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div data-slot="body" class="${ssrRenderClass(ui.value.body({ class: props.ui?.body }))}"${_scopeId}>`);
            if (__props.to) {
              _push2(ssrRenderComponent(_sfc_main$g, mergeProps({ "aria-label": ariaLabel.value }, { to: __props.to, target: __props.target, ..._ctx.$attrs }, {
                class: "focus:outline-none peer",
                tabindex: "-1",
                raw: ""
              }), {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span class="absolute inset-0" aria-hidden="true"${_scopeId2}></span>`);
                  } else {
                    return [
                      createVNode("span", {
                        class: "absolute inset-0",
                        "aria-hidden": "true"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            ssrRenderSlot(_ctx.$slots, "body", {}, () => {
              if (date.value || !!slots.date || (__props.badge || !!slots.badge)) {
                _push2(`<div data-slot="meta" class="${ssrRenderClass(ui.value.meta({ class: props.ui?.meta }))}"${_scopeId}>`);
                ssrRenderSlot(_ctx.$slots, "badge", {}, () => {
                  if (__props.badge) {
                    _push2(ssrRenderComponent(_sfc_main$4, mergeProps({
                      color: "neutral",
                      variant: "subtle"
                    }, typeof __props.badge === "string" ? { label: __props.badge } : __props.badge, {
                      "data-slot": "badge",
                      class: ui.value.badge({ class: props.ui?.badge })
                    }), null, _parent2, _scopeId));
                  } else {
                    _push2(`<!---->`);
                  }
                }, _push2, _parent2, _scopeId);
                if (date.value || !!slots.date) {
                  _push2(`<time${ssrRenderAttr("datetime", datetime.value)} data-slot="date" class="${ssrRenderClass(ui.value.date({ class: props.ui?.date }))}"${_scopeId}>`);
                  ssrRenderSlot(_ctx.$slots, "date", {}, () => {
                    _push2(`${ssrInterpolate(date.value)}`);
                  }, _push2, _parent2, _scopeId);
                  _push2(`</time>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              if (__props.title || !!slots.title) {
                _push2(`<h2 data-slot="title" class="${ssrRenderClass(ui.value.title({ class: props.ui?.title }))}"${_scopeId}>`);
                ssrRenderSlot(_ctx.$slots, "title", {}, () => {
                  _push2(`${ssrInterpolate(__props.title)}`);
                }, _push2, _parent2, _scopeId);
                _push2(`</h2>`);
              } else {
                _push2(`<!---->`);
              }
              if (__props.description || !!slots.description) {
                _push2(`<div data-slot="description" class="${ssrRenderClass(ui.value.description({ class: props.ui?.description }))}"${_scopeId}>`);
                ssrRenderSlot(_ctx.$slots, "description", {}, () => {
                  _push2(`${ssrInterpolate(__props.description)}`);
                }, _push2, _parent2, _scopeId);
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              if (__props.authors?.length || !!slots.authors) {
                _push2(`<div data-slot="authors" class="${ssrRenderClass(ui.value.authors({ class: props.ui?.authors }))}"${_scopeId}>`);
                ssrRenderSlot(_ctx.$slots, "authors", { ui: ui.value }, () => {
                  if (__props.authors?.length) {
                    _push2(`<!--[-->`);
                    if (__props.authors.length > 1) {
                      _push2(ssrRenderComponent(_sfc_main$3, null, {
                        default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                          if (_push3) {
                            _push3(`<!--[-->`);
                            ssrRenderList(__props.authors, (author, index) => {
                              _push3(ssrRenderComponent(_sfc_main$g, {
                                key: index,
                                to: author.to,
                                target: author.target,
                                "data-slot": "avatar",
                                class: ui.value.avatar({ class: props.ui?.avatar, to: !!author.to }),
                                raw: ""
                              }, {
                                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                                  if (_push4) {
                                    _push4(ssrRenderComponent(_sfc_main$i, mergeProps({ ref_for: true }, author.avatar), null, _parent4, _scopeId3));
                                  } else {
                                    return [
                                      createVNode(_sfc_main$i, mergeProps({ ref_for: true }, author.avatar), null, 16)
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent3, _scopeId2));
                            });
                            _push3(`<!--]-->`);
                          } else {
                            return [
                              (openBlock(true), createBlock(Fragment, null, renderList(__props.authors, (author, index) => {
                                return openBlock(), createBlock(_sfc_main$g, {
                                  key: index,
                                  to: author.to,
                                  target: author.target,
                                  "data-slot": "avatar",
                                  class: ui.value.avatar({ class: props.ui?.avatar, to: !!author.to }),
                                  raw: ""
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_sfc_main$i, mergeProps({ ref_for: true }, author.avatar), null, 16)
                                  ]),
                                  _: 2
                                }, 1032, ["to", "target", "class"]);
                              }), 128))
                            ];
                          }
                        }),
                        _: 1
                      }, _parent2, _scopeId));
                    } else {
                      _push2(ssrRenderComponent(_sfc_main$2, __props.authors[0], null, _parent2, _scopeId));
                    }
                    _push2(`<!--]-->`);
                  } else {
                    _push2(`<!---->`);
                  }
                }, _push2, _parent2, _scopeId);
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
            }, _push2, _parent2, _scopeId);
            _push2(`</div>`);
            if (!!slots.footer) {
              _push2(`<div data-slot="footer" class="${ssrRenderClass(ui.value.footer({ class: props.ui?.footer }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "footer", {}, null, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              __props.image || !!slots.header ? (openBlock(), createBlock("div", {
                key: 0,
                "data-slot": "header",
                class: ui.value.header({ class: props.ui?.header })
              }, [
                renderSlot(_ctx.$slots, "header", { ui: ui.value }, () => [
                  (openBlock(), createBlock(resolveDynamicComponent(unref(ImageComponent)), mergeProps(typeof __props.image === "string" ? { src: __props.image, alt: __props.title } : { alt: __props.title, ...__props.image }, {
                    "data-slot": "image",
                    class: ui.value.image({ class: props.ui?.image, to: !!__props.to })
                  }), null, 16, ["class"]))
                ])
              ], 2)) : createCommentVNode("", true),
              createVNode("div", {
                "data-slot": "body",
                class: ui.value.body({ class: props.ui?.body })
              }, [
                __props.to ? (openBlock(), createBlock(_sfc_main$g, mergeProps({
                  key: 0,
                  "aria-label": ariaLabel.value
                }, { to: __props.to, target: __props.target, ..._ctx.$attrs }, {
                  class: "focus:outline-none peer",
                  tabindex: "-1",
                  raw: ""
                }), {
                  default: withCtx(() => [
                    createVNode("span", {
                      class: "absolute inset-0",
                      "aria-hidden": "true"
                    })
                  ]),
                  _: 1
                }, 16, ["aria-label"])) : createCommentVNode("", true),
                renderSlot(_ctx.$slots, "body", {}, () => [
                  date.value || !!slots.date || (__props.badge || !!slots.badge) ? (openBlock(), createBlock("div", {
                    key: 0,
                    "data-slot": "meta",
                    class: ui.value.meta({ class: props.ui?.meta })
                  }, [
                    renderSlot(_ctx.$slots, "badge", {}, () => [
                      __props.badge ? (openBlock(), createBlock(_sfc_main$4, mergeProps({
                        key: 0,
                        color: "neutral",
                        variant: "subtle"
                      }, typeof __props.badge === "string" ? { label: __props.badge } : __props.badge, {
                        "data-slot": "badge",
                        class: ui.value.badge({ class: props.ui?.badge })
                      }), null, 16, ["class"])) : createCommentVNode("", true)
                    ]),
                    date.value || !!slots.date ? (openBlock(), createBlock("time", {
                      key: 0,
                      datetime: datetime.value,
                      "data-slot": "date",
                      class: ui.value.date({ class: props.ui?.date })
                    }, [
                      renderSlot(_ctx.$slots, "date", {}, () => [
                        createTextVNode(toDisplayString(date.value), 1)
                      ])
                    ], 10, ["datetime"])) : createCommentVNode("", true)
                  ], 2)) : createCommentVNode("", true),
                  __props.title || !!slots.title ? (openBlock(), createBlock("h2", {
                    key: 1,
                    "data-slot": "title",
                    class: ui.value.title({ class: props.ui?.title })
                  }, [
                    renderSlot(_ctx.$slots, "title", {}, () => [
                      createTextVNode(toDisplayString(__props.title), 1)
                    ])
                  ], 2)) : createCommentVNode("", true),
                  __props.description || !!slots.description ? (openBlock(), createBlock("div", {
                    key: 2,
                    "data-slot": "description",
                    class: ui.value.description({ class: props.ui?.description })
                  }, [
                    renderSlot(_ctx.$slots, "description", {}, () => [
                      createTextVNode(toDisplayString(__props.description), 1)
                    ])
                  ], 2)) : createCommentVNode("", true),
                  __props.authors?.length || !!slots.authors ? (openBlock(), createBlock("div", {
                    key: 3,
                    "data-slot": "authors",
                    class: ui.value.authors({ class: props.ui?.authors })
                  }, [
                    renderSlot(_ctx.$slots, "authors", { ui: ui.value }, () => [
                      __props.authors?.length ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                        __props.authors.length > 1 ? (openBlock(), createBlock(_sfc_main$3, { key: 0 }, {
                          default: withCtx(() => [
                            (openBlock(true), createBlock(Fragment, null, renderList(__props.authors, (author, index) => {
                              return openBlock(), createBlock(_sfc_main$g, {
                                key: index,
                                to: author.to,
                                target: author.target,
                                "data-slot": "avatar",
                                class: ui.value.avatar({ class: props.ui?.avatar, to: !!author.to }),
                                raw: ""
                              }, {
                                default: withCtx(() => [
                                  createVNode(_sfc_main$i, mergeProps({ ref_for: true }, author.avatar), null, 16)
                                ]),
                                _: 2
                              }, 1032, ["to", "target", "class"]);
                            }), 128))
                          ]),
                          _: 1
                        })) : (openBlock(), createBlock(_sfc_main$2, mergeProps({ key: 1 }, __props.authors[0]), null, 16))
                      ], 64)) : createCommentVNode("", true)
                    ])
                  ], 2)) : createCommentVNode("", true)
                ])
              ], 2),
              !!slots.footer ? (openBlock(), createBlock("div", {
                key: 1,
                "data-slot": "footer",
                class: ui.value.footer({ class: props.ui?.footer })
              }, [
                renderSlot(_ctx.$slots, "footer")
              ], 2)) : createCommentVNode("", true)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/BlogPost.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const theme = {
  "base": "flex flex-col gap-8 lg:gap-y-16",
  "variants": {
    "orientation": {
      "horizontal": "sm:grid sm:grid-cols-2 lg:grid-cols-3",
      "vertical": ""
    }
  }
};
const _sfc_main = {
  __name: "UBlogPosts",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false },
    posts: { type: Array, required: false },
    orientation: { type: null, required: false, default: "horizontal" },
    class: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    const slots = useSlots();
    const getProxySlots = () => omit(slots, ["default"]);
    const appConfig = useAppConfig();
    const ui = computed(() => tv({ extend: tv(theme), ...appConfig.ui?.blogPosts || {} }));
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: __props.as,
        "data-orientation": __props.orientation,
        class: ui.value({ orientation: __props.orientation, class: props.class })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, () => {
              _push2(`<!--[-->`);
              ssrRenderList(__props.posts, (post, index) => {
                _push2(ssrRenderComponent(_sfc_main$1, mergeProps({
                  key: index,
                  orientation: __props.orientation === "vertical" ? "horizontal" : "vertical"
                }, { ref_for: true }, post), createSlots({ _: 2 }, [
                  renderList(getProxySlots(), (_2, name) => {
                    return {
                      name,
                      fn: withCtx((slotData, _push3, _parent3, _scopeId2) => {
                        if (_push3) {
                          ssrRenderSlot(_ctx.$slots, name, mergeProps({ ref_for: true }, slotData, { post }), null, _push3, _parent3, _scopeId2);
                        } else {
                          return [
                            renderSlot(_ctx.$slots, name, mergeProps({ ref_for: true }, slotData, { post }))
                          ];
                        }
                      })
                    };
                  })
                ]), _parent2, _scopeId));
              });
              _push2(`<!--]-->`);
            }, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default", {}, () => [
                (openBlock(true), createBlock(Fragment, null, renderList(__props.posts, (post, index) => {
                  return openBlock(), createBlock(_sfc_main$1, mergeProps({
                    key: index,
                    orientation: __props.orientation === "vertical" ? "horizontal" : "vertical"
                  }, { ref_for: true }, post), createSlots({ _: 2 }, [
                    renderList(getProxySlots(), (_2, name) => {
                      return {
                        name,
                        fn: withCtx((slotData) => [
                          renderSlot(_ctx.$slots, name, mergeProps({ ref_for: true }, slotData, { post }))
                        ])
                      };
                    })
                  ]), 1040, ["orientation"]);
                }), 128))
              ])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/BlogPosts.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _, _sfc_main$1 as a };
//# sourceMappingURL=BlogPosts-7auSsqAv.mjs.map
