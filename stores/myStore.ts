export const useCounterStore = defineStore("counter", () => {
  const storage = useCookie("count");
  const count = ref(parseInt(storage.value ?? "0"));
  function increment() {
    count.value++;
    storage.value = count.value.toString();
  }
  return { count, increment };
});
