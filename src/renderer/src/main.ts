import { createApp } from 'vue'
import App from './App.vue'

// 引入ELementPlus
import ElementPlus from "element-plus"
import "element-plus/dist/index.css"
import "@renderer/assets/css/cust-elementplus.scss"
// 路由
import router from "@renderer/router"

createApp(App).use(ElementPlus).use(router).mount('#app')
