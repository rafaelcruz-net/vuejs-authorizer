import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";

import Vuelidate from "vuelidate";
Vue.use(Vuelidate);

Vue.use(Vuetify);

const vuetify = new Vuetify({
  theme: {
    dark: true,
  },
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
