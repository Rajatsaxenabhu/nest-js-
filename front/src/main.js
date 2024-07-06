import { createApp } from 'vue'
import { createRouter ,createWebHistory} from 'vue-router'
import Home from './views/Home.vue'
import login from './views/login.vue'
import signup from './views/signup.vue'
import './style.css'
import App from './App.vue'
import Task from './views/displaytask.vue'
import store from './store.js'
const router=createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/',component: Home,name:"home"},
        {path: '/login',component: login,name:"login"},
        {path: '/signup',component: signup,name:"signup"},
        {path: '/dashboard',component: Task,name:"task"},
    ]
})
createApp(App)
.use(router)
.use(store)
.mount('#app')
