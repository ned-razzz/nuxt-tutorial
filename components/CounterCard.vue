<template>
  <div>
    Counter: {{ store.count }}
    <button @click="store.count++">+</button>
    <button @click="store.count--">-</button>
  </div>
</template>

<script lang="ts" setup>
// const count = useCounter();

import { useCounterStore } from "~/stores/myStore";

const store = useCounterStore();
</script>
