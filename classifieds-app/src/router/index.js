import Vue from "vue";
import Router from "vue-router";

import AppAuth from "@/views/AppAuth";
import AppLogin from "@/views/auth/AppLogin";

Vue.use(Router);

console.log(AppLogin);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "auth",
      component: AppAuth,
      children: [
        {
          name: "login",
          path: "login",
          props: true,
          component: AppLogin,
          meta: {
            isAuthenticated: false
          }
        }
      ]
    }
  ]
});

export default router;
