import { computed, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderSlot } from 'vue/server-renderer';
import { b as useAppConfig, t as tv } from './server.mjs';
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
import 'reka-ui';
import '@vueuse/core';
import 'tailwind-variants';
import '@iconify/utils/lib/css/icon';
import 'vue-use-fixed-header';

const theme = {
  "base": "px-1.5 py-0.5 text-sm font-mono font-medium rounded-md inline-block",
  "variants": {
    "color": {
      "primary": "border border-primary/25 bg-primary/10 text-primary",
      "secondary": "border border-secondary/25 bg-secondary/10 text-secondary",
      "success": "border border-success/25 bg-success/10 text-success",
      "info": "border border-info/25 bg-info/10 text-info",
      "warning": "border border-warning/25 bg-warning/10 text-warning",
      "error": "border border-error/25 bg-error/10 text-error",
      "neutral": "border border-muted text-highlighted bg-muted"
    }
  },
  "defaultVariants": {
    "color": "neutral"
  }
};
const _sfc_main = {
  __name: "ProseCode",
  __ssrInlineRender: true,
  props: {
    lang: { type: String, required: false },
    color: { type: null, required: false },
    class: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    const appConfig = useAppConfig();
    const ui = computed(() => tv({ extend: tv(theme), ...appConfig.ui?.prose?.code || {} }));
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<code${ssrRenderAttrs(mergeProps({
        class: ui.value({ class: (props.class || "").split(",").join(" "), color: props.color })
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</code>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/prose/Code.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Code-CjnWXdVD.mjs.map
