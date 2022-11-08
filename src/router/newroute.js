import { createWebHistory, createRouter } from "vue-router";


const routes = [

    {
        path: "/index.html",
        name: "Main",
        component: () => import("@/components/Explore/Main/main.vue")
    },
  {
    path: "/Project/Index",
    name: "ProjectList",
    component: () => import("@/components/Explore/Project/Index.vue")
},
{
    path: "/Project/Create",
    name: "CreateProject",
    component: () => import('@/components/Explore/Project/Create.vue')
},
{
    path: '/Project/Details/:id',
    name: 'ProjectDetails',
    component: () => import('@/components/Explore/Project/Details.vue')
},
{
    path: '/Projects/Edit/:id',
    name: 'ProjectEdit',
    component: () => import('@/components/Explore/Project/Edit.vue')
},




{
    path: "/News/Index",
    name: "IndexNews",
    component: () => import('@/components/Explore/News/NewsList.vue')
},
{
    path: "/News/Create",
    name: "CreateNews",
    component: () => import('@/components/Explore/News/Create.vue')
},
{
    path: "/News/Edit/:id",
    name: "EditNews",
    component: () => import('@/components/Explore/News/Edit.vue')
},

{
    path: "/Users/Index",
    name: "IndexUser",
    component: () => import('@/components/Explore/User/Index.vue')
},
{
    path: "/Users/Create",
    name: "CreateUser",
    component: () => import('@/components/Explore/User/CreateUser.vue')
},
{
    path: "/Users/Details/:id",
    name: "DetailsUser",
    component: () => import('@/components/Explore/User/Details.vue')
},
{
    path: "/Users/Edit/:id",
    name: "EditUser",
    component: () => import('@/components/Explore/User/Edit.vue')
},

{
    path: "/Login",
    name: "LoginUser",
    component: () => import('@/components/Explore/Auth/Login.vue')
},
{
    path: "/Register",
    name: "RegisterUser",
    component: () => import('@/components/Explore/Auth/Register.vue')
},

{
    path: "/Publications/Create",
    name: "CreatePublication",
    component: () => import('@/components/Explore/Publications/AddPublication.vue')
},
{
    path: "/Publications/Edit/:id",
    name: "EditPublication",
    component: () => import('@/components/Explore/Publications/Edit.vue')
},

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
