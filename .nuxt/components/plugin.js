import Vue from 'vue'
import { wrapFunctional } from './index'

const components = {
  ColorChange: () => import('../..\\components\\ColorChange.vue' /* webpackChunkName: "components/color-change" */).then(c => wrapFunctional(c.default || c)),
  Progress: () => import('../..\\components\\Progress.vue' /* webpackChunkName: "components/progress" */).then(c => wrapFunctional(c.default || c)),
  SkeletonLoader: () => import('../..\\components\\SkeletonLoader.vue' /* webpackChunkName: "components/skeleton-loader" */).then(c => wrapFunctional(c.default || c)),
  Status: () => import('../..\\components\\Status.vue' /* webpackChunkName: "components/status" */).then(c => wrapFunctional(c.default || c)),
  CommonNavbar: () => import('../..\\components\\common\\Navbar.vue' /* webpackChunkName: "components/common-navbar" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
