import { v as useAsyncData, q as _sfc_main$5 } from './server.mjs';
import { _ as _sfc_main$1, a as _sfc_main$1$1 } from './BlogPosts-7auSsqAv.mjs';
import { withAsyncContext, withCtx, unref, mergeProps, createBlock, openBlock, Fragment, renderList, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';
import { q as queryCollection } from './client-DiYjOoUC.mjs';

const _sfc_main = {
  __name: "AppProjectCard",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data: projects } = ([__temp, __restore] = withAsyncContext(() => useAsyncData("/projects", () => queryCollection("projects").all())), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UContainer = _sfc_main$5;
      const _component_UBlogPosts = _sfc_main$1;
      const _component_UBlogPost = _sfc_main$1$1;
      _push(ssrRenderComponent(_component_UContainer, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="space-y-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UBlogPosts, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(unref(projects), (post, index) => {
                    _push3(ssrRenderComponent(_component_UBlogPost, mergeProps({ key: index }, { ref_for: true }, post, {
                      to: post.path,
                      image: post.meta.thumbnail
                    }), null, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(projects), (post, index) => {
                      return openBlock(), createBlock(_component_UBlogPost, mergeProps({ key: index }, { ref_for: true }, post, {
                        to: post.path,
                        image: post.meta.thumbnail
                      }), null, 16, ["to", "image"]);
                    }), 128))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "space-y-4" }, [
                createVNode(_component_UBlogPosts, null, {
                  default: withCtx(() => [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(projects), (post, index) => {
                      return openBlock(), createBlock(_component_UBlogPost, mergeProps({ key: index }, { ref_for: true }, post, {
                        to: post.path,
                        image: post.meta.thumbnail
                      }), null, 16, ["to", "image"]);
                    }), 128))
                  ]),
                  _: 1
                })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/App/ProjectCard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=ProjectCard-ARbnzZnM.mjs.map
