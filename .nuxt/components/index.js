export { default as ColorChange } from '../..\\components\\ColorChange.vue'
export { default as Progress } from '../..\\components\\Progress.vue'
export { default as SkeletonLoader } from '../..\\components\\SkeletonLoader.vue'
export { default as Status } from '../..\\components\\Status.vue'
export { default as CommonNavbar } from '../..\\components\\common\\Navbar.vue'

export const LazyColorChange = import('../..\\components\\ColorChange.vue' /* webpackChunkName: "components/color-change" */).then(c => wrapFunctional(c.default || c))
export const LazyProgress = import('../..\\components\\Progress.vue' /* webpackChunkName: "components/progress" */).then(c => wrapFunctional(c.default || c))
export const LazySkeletonLoader = import('../..\\components\\SkeletonLoader.vue' /* webpackChunkName: "components/skeleton-loader" */).then(c => wrapFunctional(c.default || c))
export const LazyStatus = import('../..\\components\\Status.vue' /* webpackChunkName: "components/status" */).then(c => wrapFunctional(c.default || c))
export const LazyCommonNavbar = import('../..\\components\\common\\Navbar.vue' /* webpackChunkName: "components/common-navbar" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
export function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
