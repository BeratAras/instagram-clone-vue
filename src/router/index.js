import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import(/* webpackChunkName: "home" */ '../views/home/index'),
  },
  {
    path: "/direct",
    name: "Direct",
    component: () => import(/* webpackChunkName: "direct" */ '../views/direct/index'),
  },
  {
    path: "/explore",
    name: "Explore",
    component: () => import(/* webpackChunkName: "explore" */ '../views/explore/index'),
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import(/* webpackChunkName: "profile" */ '../views/profile/index'),
    children: [
      {
        path: "",
        name: "ProfilePost",
        component: () => import(/* webpackChunkName: "post" */ '../views/profile/post')
      },
      {
        path: "igtv",
        name: "ProfileIGTV",
        component: () => import(/* webpackChunkName: "igtv" */ '../views/profile/igtv')
      },
      {
        path: "save",
        name: "ProfileSave",
        component: () => import(/* webpackChunkName: "save" */ '../views/profile/save')
      },
      {
        path: "tag",
        name: "ProfileTag",
        component: () => import(/* webpackChunkName: "tag" */ '../views/profile/tag')
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
