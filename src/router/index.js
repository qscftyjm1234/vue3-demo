import { createRouter, createWebHistory} from 'vue-router'
// 非動態載入，缺點一進來就全部載入
import Home from "../views/HomeView.vue"

const router = createRouter({
    history: createWebHistory(),
    routes: [
        // 首頁
        {
            path: "/",
            name: "home",
            component: Home,
        },
        // Quiz 1 - Random User
        {
            path: "/q1",
            name: "q1",
            // 動態仔入，return一個import，進入這個頁面才仔入
            component: () => import("../views/Q1View.vue"),
        },
        // Quiz 2 - Nested Key-Value Pair Tree Viewer
        {
            path: "/q2",
            name: "q2",
            // 動態載入，最一開始進來不會載入，速度可優化
            component: () => import("../views/Q2View.vue"),
        },
        // Quiz 3 - v-model教學
        {
            path: "/q3",
            name: "q3",
            // 動態載入，最一開始進來不會載入，速度可優化
            component: () => import("../views/Q3VModel.vue"),
        },
        // Quiz 4 - pinia
        {
            path: "/q4",
            name: "q4",
            // 動態載入，最一開始進來不會載入，速度可優化
            component: () => import("../views/Q4Pinia.vue"),
        },
        // 404 part輸入錯誤導入，放置最後
        {
            path: "/:domain(.*)*", // 斜線後面接冒號，後面接的路由隨意取名，亂輸入，盤到404
            name:  "notFound",
            component: () => import("../views/404.vue"),
        }
    ],
})

export default router