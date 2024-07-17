import { createApp } from "vue";
import "./style.css";
import App from "./views/App.vue";
import router from "./router/router";
import Paginate from "vuejs-paginate-next";
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

const app = createApp(App);
app.use(Paginate);
app.use(router);
app.use(VueSweetalert2);
app.mount("#app");
