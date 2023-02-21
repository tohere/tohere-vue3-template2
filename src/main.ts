import { createApp } from "vue";
import ElementPlus from "element-plus";
import "./assets/style/tailwind.css";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import i18n from "./plugins/i18n";

const pinia = createPinia();
const app = createApp(App);

app.use(router);
app.use(pinia);
app.use(ElementPlus);
app.use(i18n);

app.mount("#app");
