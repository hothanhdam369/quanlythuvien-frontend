import { createWebHistory, createRouter } from "vue-router";
import Book from "@/views/Book.vue";
import NXB from "@/views/NXB.vue";
import QLMS from "@/views/QLMS.vue"
// import Login from "@/views/Login.vue";
const routes = [
    // {
    //     path: "/",
    //     redirect: "/login", // Chuyển hướng trang chính đến trang đăng nhập
    // },
    // {
    //     path: "/login",
    //     name: "login",
    //     component: Login
    //   },
    {
        path: "/book",
        name: "book",
        component: Book,
    },
    {
        path: "/book/:id",
        name: "book.edit",
        component: () => import("@/views/BookEdit.vue"),
        props: true // Truyền các biến trong $route.params vào làm props
    },
    {
        path: "/book",
        name: "book.add",
        component: () => import("@/views/BookAdd.vue"),
        props: true // Truyền các biến trong $route.params vào làm props
    },
    {
        path: "/nxb",
        name: "NXB",
        component: NXB,
    },
    {
        path: "/nxb/:id",
        name: "nxb.edit",
        component: () => import("@/views/NXBEdit.vue"),
        props: true // Truyền các biến trong $route.params vào làm props
    },
    {
        path: "/nxb",
        name: "nxb.add",
        component: () => import("@/views/NXBAdd.vue"),
        props: true // Truyền các biến trong $route.params vào làm props
    },
    {
        path: "/qlms",
        name: "QLMS",
        component: QLMS,
    },
    {
        path: "/qlms/:id",
        name: "qlms.edit",
        component: () => import("@/views/QLMSEdit.vue"),
        props: true // Truyền các biến trong $route.params vào làm props
    },
    {
        path: "/qlms",
        name: "qlms.add",
        component: () => import("@/views/QLMSAdd.vue"),
        props: true // Truyền các biến trong $route.params vào làm props
    },
    {
        path: "/:pathMatch(.*)*",
        name: "notfound",
        component: () => import("@/views/NotFound.vue"),
    },
];
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});
// router.beforeEach((to, from, next) => {
//     const isAuthenticated = localStorage.getItem("token"); // Kiểm tra xem người dùng đã đăng nhập chưa
//     if (to.matched.some(record => record.meta.requiresAuth)) {
//         if (!isAuthenticated) {
//             // Nếu chưa đăng nhập, chuyển hướng đến trang đăng nhập
//             next({
//                 path: "/login",
//                 query: { redirect: to.fullPath }, // Lưu trữ đường dẫn hiện tại để chuyển hướng sau khi đăng nhập thành công
//             });
//         } else {
//             next(); // Nếu đã đăng nhập, cho phép truy cập bình thường
//         }
//     } else {
//         next(); // Cho phép truy cập vào các route không cần xác thực
//     }
// });
export default router;