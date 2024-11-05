import { createRouter, createWebHashHistory } from "vue-router"
import Login from "@renderer/views/Login/Index.vue"
import Register from "@renderer/views/Register/Index.vue"
import Home from "@renderer/views/t/Index.vue"

const routes = [
  {
    path: "/",
    name: "默认路径",
    redirect: "/login"
  },
  {
    path: "/login",
    name: "登录",
    component: Login
  },
  {
    path: "/register",
    name: "注册",
    component: Register
  },
  {
    path: "/home",
    name: "主页",
    component: Home
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
export default router