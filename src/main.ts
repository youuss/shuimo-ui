import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createWUI } from "../lib";
import { WMessage } from "../lib";
import { WPrinter } from "../lib";
import { WConfirm } from "../lib";
import PrismCode from './components/code/PrismCode.vue'
import ButtonDrawer from './components/code/ButtonDrawer.vue'
// import WUI from "../dist/wash-painting-ui.es.js";
// import {WMessage} from "../dist/wash-painting-ui.es.js";
import './style.scss'

const app = createApp(App);
const WUI = createWUI();
app.use(router)
  .use(WUI)
  .component('PrismCode', PrismCode)
  .component('ButtonDrawer', ButtonDrawer)
  .mount('#app');

app.config.globalProperties.$message = WMessage;
app.config.globalProperties.$confirm = WConfirm;
app.config.globalProperties.$print = WPrinter('水墨测试');
