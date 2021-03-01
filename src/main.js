// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import Vue from 'vue'
import App from './App'
import router from './router'
import VueLazyLoad from 'vue-lazyload'
Vue.use(VueLazyLoad,{
    error:'../static/error.png',
    // loading:'../static/loading.png'
})

Vue.config.productionTip = false

// 使页面跳转时不会下拉到上一个页面的高度
router.afterEach((to,from,next) => {
  window.scrollTo(0,0);

});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
