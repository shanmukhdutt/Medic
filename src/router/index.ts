import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Login from '../views/Login.vue';
import Home from '../views/Home.vue';
import SignUp from '../views/SignUp.vue';
import PersonalDetails from '../views/Personaldetails.vue';
import Details from '../views/Details.vue';
import About from '../views/About.vue';
import Help from '../views/Help.vue';
import AccountSettings from '../views/AccountSettings.vue';
import IconPage from '../views/IconPage.vue'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path:'/home',
    name:'Home',
    component:Home
  },
  {
    path:'/signUp',
    name:'SignUp',
    component:SignUp
  },
  {
    path:'/personalDetails',
    name:'PersonalDetails',
    component:PersonalDetails
  },
  {
    path:'/details/:id',
    name:'Details',
    component:Details
  },
  {
    path:'/about',
    name:'About',
    component:About
  },
  {
    path:'/help',
    name:'Help',
    component:Help
  },
  {
    path:'/accountsettings',
    name:'AccountSettings',
    component:AccountSettings
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
