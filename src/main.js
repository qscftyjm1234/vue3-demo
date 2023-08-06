import { createApp } from 'vue'
import { createPinia } from 'pinia' // 套件
import './style.css'
import App from './App.vue'
import router from './router'
import VImg from './components/VImg.vue' //.跟目錄
import "./index.css"
const pinia = createPinia()
const app = createApp(App);

app.component("VImg", VImg) // 全域compontents，針對圖片包裝處理
app.use(pinia);
app.use(router);
app.mount('#app');
