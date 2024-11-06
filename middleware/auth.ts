export default defineNuxtRouteMiddleware((to, from) => {
  const logged = to.query.logged;
  if (logged !== "login") {
    return navigateTo("/login");
  }
});
