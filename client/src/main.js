import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

/**
 * Import Custom Styles Below
 */
import "@/scss/fonts.scss";
import "@/scss/normalize.scss";
import "@/scss/UniversalStyles.scss";
import "@/scss/mixins.scss";
import "@/scss/variables.scss";
import "animate.css/animate.css";
import "bootstrap-icons/font/bootstrap-icons.css";

/**
 * Import External Libraries Below
 */
import VueCookies from "vue3-cookies";
import vClickOutside from "click-outside-vue3";
import { Vue3Mq } from "vue3-mq";
import "bootstrap-icons/font/bootstrap-icons.css";

const app = createApp(App)
  .use(store)
  .use(router)
  .use(VueCookies)
  .use(vClickOutside)
  .use(Vue3Mq, {
    preset: "devices", // default
  });

app.mount("#app");
