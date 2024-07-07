import { createApp } from "vue";
import "./style.css";
import App from "./views/App.vue";
import router from "./router/router";

const app = createApp(App).use(router);

app.mount("#app");
