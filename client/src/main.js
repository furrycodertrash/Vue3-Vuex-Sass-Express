import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

/**
 * Import Custom Styles Below
 */
import "@/scss/normalize.scss";
import "@/scss/UniversalStyles.scss";
import "@/scss/mixins.scss";
import "@/scss/variables.scss";

/**
 * Import Cookies Config Below
 */
import VueCookies from "vue3-cookies";

/**
 * Import External Libraries Below
 */
import vClickOutside from "click-outside-vue3";
import { Vue3Mq } from "vue3-mq";

createApp(App)
  .use(store)
  .use(router)
  .use(VueCookies)
  .use(vClickOutside)
  .use(Vue3Mq, {
    preset: "devices", // default
  })
  .mount("#app");
