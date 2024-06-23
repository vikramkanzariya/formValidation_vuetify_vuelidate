import { createRouter , createWebHistory } from "vue-router";

import HomeView from './components/HomeView.vue';
import FormView from './components/FormView.vue';
import LoginView from "./components/LoginView.vue";

const routes = [
  {
    path:'/register',
    name:'Registration',
    component:FormView
  },
  {
    path:'/login',
    name:'Login',
    component:LoginView,
    beforeEnter:(to , from , next) => {
      let isAuth = false;
      let authenticate = localStorage.getItem('email');

      if(!authenticate){
        isAuth = false;
        next({ path:'/login'})
      }
      else{
        isAuth = true;
        next();
      }
    }
  },

  {
    path:'/home',
    name:'Home',
    component:HomeView
  }
];

const router = createRouter({
  history:createWebHistory(),
  routes,
});

export default router;
