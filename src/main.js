import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;



//-- Using in ALL components ---
Vue.mixin({
  methods: {
    
  },
  
  created() {
    Vue.prototype.$userData = JSON.parse(sessionStorage.getItem('userLogin')) || ''
    console.log('Read Session Storage')
  },

      
    

})




new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
