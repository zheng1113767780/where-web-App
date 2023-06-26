import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import SwiperClass, { /* swiper modules... */ } from 'swiper'
import '@/assets/style/reset.css'
import '@/assets/style/border.css'
import '@/assets/style/iconfont.css'
import 'swiper/css/swiper.css'
import 'swiper/css/swiper.min.css'

Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)
Vue.use(router);
SwiperClass.use([/* swiper modules... */])

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
