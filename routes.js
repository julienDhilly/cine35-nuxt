export const injectRoutes = (routes, resolve) => {
  routes.push([
    // 404
    routes.push({
      name: "custom",
      path: "*",
      component: resolve(__dirname, "pages/404.vue"),
    }),
  ])
}
