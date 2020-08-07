// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import Buefy from 'buefy'
// import infiniteScroll from 'vue-infinite-scroll'
import '~/code/main.scss'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  // Use buefy
  Vue.use(Buefy)
//  Vue.use(infiniteScroll)
  Vue.config.productionTip  = false
}
