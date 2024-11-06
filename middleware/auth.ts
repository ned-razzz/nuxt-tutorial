export default defineNuxtRouteMiddleware((to, from) => {
  const logged = to.query.logged;
  console.log("login state: ", logged);
  if (logged !== "login") {
    return navigateTo("/login");
  }
});
