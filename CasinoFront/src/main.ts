import { createApp } from "vue";
import App from "@/App.vue";
import router from "@/routers"; // Import du router
// @ts-ignore

import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';


const app = createApp(App);
app.use(Toast, {
  position: 'bottom-center',
  timeout: 3000,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  showCloseButtonOnHover: false,
  hideProgressBar: false,
});


app.use(router);
app.mount("#app");