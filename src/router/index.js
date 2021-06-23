import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
// import Dashboard from "../views/Dashboard.vue";
import AddStation from "../views/AddStation.vue";
import signup from "../views/Signup.vue";
// import Account from "../views/Account.vue";
const routes = [{
        path: "/",
        name: "Dashboard",
        component: function() {
            return import ( /* webpackChunkName: "about" */ "../views/Dashboard.vue");
        }
    },
    {
        path: "/signup",
        name: "Signup",
        component: signup

    },
    {
        path: "/addstation",
        name: "AddStation",
        component: AddStation

    },
    // {
    //     path: "/account",
    //     name: "Account",
    //     component: Account,
    //     children: [{
    //             path: "/signin",

    //         },
    //         {
    //             path: "/signup",
    //             component: signup
    //         }
    //     ]
    // }, 
    {
        path: "/about",
        name: "About",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: function() {
            return import ( /* webpackChunkName: "about" */ "../views/About.vue");
        },
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;