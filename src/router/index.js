import { createWebHistory, createRouter } from "vue-router";


const routes = [
  {
    path: "/Project/Index",
    name: "ProjectList",
    component: () => import("@/components/Pages/Project/Index.vue")
},
{
    path: "/Project/Create",
    name: "CreateProject",
    component: () => import('@/components/Pages/Project/Create.vue')
},
{
    path: '/Project/Details/:id',
    name: 'ProjectDetails',
    component: () => import('@/components/Pages/Project/Details.vue')
},
{
    path: '/Projects/Edit/:id',
    name: 'ProjectEdit',
    component: () => import('@/components/Pages/Project/Edit.vue')
},



{
    path: "/News/Index",
    name: "IndexNews",
    component: () => import('@/components/Pages/News/NewsList.vue')
},
{
    path: "/News/Create",
    name: "CreateNews",
    component: () => import('@/components/Pages/News/Create.vue')
},
{
    path: "/News/Edit/:id",
    name: "EditNews",
    component: () => import('@/components/Pages/News/Edit.vue')
},

{
    path: "/Users/Index",
    name: "IndexUser",
    component: () => import('@/components/Pages/User/Index.vue')
},
{
    path: "/Users/Create",
    name: "CreateUser",
    component: () => import('@/components/Pages/User/CreateUser.vue')
},
{
    path: "/Users/Details/:id",
    name: "DetailsUser",
    component: () => import('@/components/Pages/User/Details.vue')
},
{
    path: "/Users/Edit/:id",
    name: "EditUser",
    component: () => import('@/components/Pages/User/Edit.vue')
},

{
    path: "/Login",
    name: "LoginUser",
    component: () => import('@/components/Pages/Auth/Login.vue')
},
{
    path: "/Register",
    name: "RegisterUser",
    component: () => import('@/components/Pages/Auth/Register.vue')
},

{
    path: "/Publications/Create",
    name: "CreatePublication",
    component: () => import('@/components/Pages/Publications/AddPublication.vue')
},
{
    path: "/Publications/Edit/:id",
    name: "EditPublication",
    component: () => import('@/components/Pages/Publications/Edit.vue')
},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
