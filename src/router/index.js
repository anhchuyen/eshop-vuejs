import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

/* Layout */
import Layout from "@/layout";

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [{
        path: "/login",
        component: () =>
            import ("@/views/login/index"),
        hidden: true
    },

    {
        path: "/404",
        component: () =>
            import ("@/views/404"),
        hidden: true
    },

    {
        path: "/",
        component: Layout,
        redirect: "/dashboard",
        children: [{
            path: "dashboard",
            name: "hihi",
            component: () =>
                import ("@/views/dashboard/index"),
            meta: { title: "Trang chủ", icon: "dashboard" }
        }]
    },

    // {
    //   path: '/example',
    //   component: Layout,
    //   redirect: '/example/table',
    //   name: 'Example',
    //   meta: { title: 'haha', icon: 'el-icon-s-help' },
    //   children: [
    //     {
    //       path: 'table',
    //       name: 'Table',
    //       component: () => import('@/views/table/index'),
    //       meta: { title: 'huhu', icon: 'table' }
    //     },
    //     {
    //       path: 'tree',
    //       name: 'Tree',
    //       component: () => import('@/views/tree/index'),
    //       meta: { title: 'Tree', icon: 'tree' }
    //     }
    //   ]
    // },
    {
        path: "/example",
        component: Layout,

        name: "Example",
        meta: { title: "Danh mục sản phẩm ", icon: "el-icon-s-help" },
        children: [{
                path: "category",
                name: "category",
                component: () =>
                    import ("@/views/category/index"),
                meta: { title: "xem danh sách", icon: "table" }
            },
            {
                path: "tree",
                name: "Tree",
                component: () =>
                    import ("@/views/slider/index"),
                meta: { title: "Tree", icon: "tree" }
            }
        ]
    },

    {
        path: "/brand",
        component: Layout,
        // meta: { title: 'Danh mục sản phẩm ', icon: 'el-icon-s-help' },
        children: [{
            path: "",
            name: "brand",
            component: () =>
                import ("@/views/brand/index"),
            meta: { title: "Thương hiệu", icon: "form" }
        }]
    },
    {
        path: "",
        component: Layout,
        meta: { title: " Liên hệ ", icon: "el-icon-s-help" },
        children: [{
                path: "/contacts",
                name: "contacts",
                component: () =>
                    import ("@/views/contacts/index"),
                meta: { title: "Danh sách liên hệ", icon: "form" }
            },
            {
                path: "/handleContact",
                component: () =>
                    import ("@/views/handleContact/index"),
                name: "handleContact",
                meta: { title: "Xử lý liên hệ", icon: "form" }
            }
        ]
    },

    {
        path: "/no need",
        component: Layout,
        meta: { title: "Đơn Hàng", icon: "el-icon-s-help" },
        children: [{
                path: "/pending",
                name: "pending",
                component: () =>
                    import ("@/views/pending/index"),
                meta: { title: "Đơn chờ duyệt", icon: "form" }
            },
            {
                path: "/shipping",
                component: () =>
                    import ("@/views/shipping/index"),
                name: "shipping",
                meta: { title: "Đơn đang giao", icon: "form" }
            },
            {
                path: "/accomplished",
                component: () =>
                    import ("@/views/accomplished/index"),
                name: "accomplished",
                meta: { title: "Đơn đã hoàn thành", icon: "form" }
            }
        ]
    },

    {
        path: "/slider",
        component: Layout,
        children: [{
            path: "index",
            name: "slider",
            component: () =>
                import ("@/views/slider/index"),
            meta: { title: "Danh sách slider", icon: "form" }
        }]
    },

    {
        path: "/product",
        component: Layout,
        // redirect: '/product1',
        name: "Product",
        meta: {
            title: "Sản phẩm",
            icon: "nested"
        },
        children: [{
                path: "index",
                component: () =>
                    import ("@/views/addProduct/index"),
                name: "product",
                meta: { title: "Thêm sản phẩm" }
            },
            {
                path: "product1",
                component: () =>
                    import ("@/views/product1/index"),
                name: "product1",
                meta: { title: "Danh sách sản phẩm" }
            },
            {
                path: "updateProduct",
                name: "updateProduct",
                component: () =>
                    import ("@/views/updateProduct/index"),
                meta: { title: "UpdateProduct" }
            }
        ]
    },

    {
        path: "/updateProfile",
        component: Layout,
        children: [{
            path: "index",
            name: "updateProfile",
            component: () =>
                import ("@/views/updateProfile/index"),
            meta: { title: "Thông tin cá nhân", icon: "link" }
        }]
    },

    {
        path: "/supplier",
        component: Layout,
        children: [{
            path: "index",
            name: "spuplier",
            component: () =>
                import ("@/views/supplier/index"),
            meta: { title: "supplier", icon: "link" }
        }]
    },

    // 404 page must be placed at the end !!!
    { path: "*", redirect: "/404", hidden: true }
];

const createRouter = () =>
    new Router({
        // mode: 'history', // require service support
        scrollBehavior: () => ({ y: 0 }),
        routes: constantRoutes
    });

const router = createRouter();

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
    const newRouter = createRouter();
    router.matcher = newRouter.matcher; // reset router
}

export default router;