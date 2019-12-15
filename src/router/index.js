// 配置所有的路由信息
import VueRouter from 'vue-router'
import Vue from 'vue'

import Home from '../components/home'
import About from '../components/about'

// 1. 通过Vue.use(插件) ， 来安装插件
Vue.use(VueRouter)

// 2. 创建路由对象
const routes =[{
    path:'/home',
    component:Home
},
{
    path:'/about',
    component:About
}]
const router = new VueRouter({
    // 配置路由和组件之间的应用关系
    routes 

    }
)

// 3. 将router 对象传入到 Vue
export default router