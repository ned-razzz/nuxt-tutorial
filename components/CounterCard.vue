<template>
  <div>
    Counter: {{ store.count }}
    <button @click="store.increment">+</button>
  </div>
</template>

<script lang="ts" setup>
// const count = useCounter();

import { useCounterStore } from "~/stores/myStore";

const store = useCounterStore();
</script>
