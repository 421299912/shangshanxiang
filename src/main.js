// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'onsenui/css/onsenui.css'// Onsen UI basic CSS
import 'onsenui/css/onsen-css-components.css'// Default Onsen UI CSS components

import Vue from 'vue'
import Vuex from 'vuex'
import VueOnsen from 'vue-onsenui'// For UMD
import VueResource from 'vue-resource'
import storeLike from './store'
import CustomToolbar from './partials/CustomToolbar.vue'
import AppNavigator from './AppNavigator.vue'
import dateTime from 'hy-datepick-tool'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import Qs from 'qs'




Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.prototype.Qs = Qs
Vue.use(Vuex)
Vue.use(VueOnsen)
Vue.use(VueResource)
Vue.use(ElementUI)
//axios.defaults.baseURL = '/api/'

// Register components globally
// Object.values(OnsenComponents).forEach(component => Vue.component(component.name, component)) // For ESM
Vue.component('custom-toolbar', CustomToolbar) // Common toolbar
Vue.component('data-time', dateTime)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // 添加路由
  render: h => h(AppNavigator),
  // storeLike 的实例注入到根组件下的所有的子组件中，子组建可以通过this.$store访问到
  store: new Vuex.Store(storeLike),
  beforeCreate: function () {
    // 设置成ios风格，不设置会根据系统选择相应的风格
    this.$ons.platform.select('ios')
    // Shortcut for Material Design
    Vue.prototype.md = this.$ons.platform.isAndroid()
    // Set iPhoneX flag based on URL
    if (window.location.search.match(/iphonex/i)) {
      document.documentElement.setAttribute('onsflag-iphonex-portrait', '')
      document.documentElement.setAttribute('onsflag-iphonex-landscape', '')
    }
  }
})
