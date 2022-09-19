import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const router = new Router({
    mode: "history",

    // scrollBehavior() {
    //     return {
    //         x: 0,
    //         y: 0
    //     };
    // },

    base: process.env.cdn_url,
    routes: [
        // ======================
        // Blank Layout
        // ======================
        {
            path: "",
            component: () => import("./layout/main/MainContainer.vue"),
            children: [
                {
                    path: "/",
                    name: "Home Page",
                    index: 1,
                    component: () => import("./pages/Home.vue")
                },
                {
                    path: "/:faq",
                    name: "Home Page1",
                    index: 2,
                    component: () => import("./pages/Home.vue")
                },
                {
                    path: "/quote/:id",
                    name: "Quote",
                    index: 2,
                    component: () => import("./pages/Quote.vue")
                },
            ]
        },
        {
            path: "",
            component: () => import("./layout/blank/Blank.vue"),
            children: [
                {
                    path: "/Error404",
                    name: "404 Page",
                    index: 3,
                    component: () => import("./pages/Error404.vue")
                },
                {
                    path: "*",
                    redirect: "/Error404"
                }
            ]
        }
    ]
});

export default router;