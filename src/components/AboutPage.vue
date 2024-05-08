<template>
  <div class="body">
    <div>Welcome, this is About Page</div>
    <div>Developed By</div>
    <div>{{ info }}</div>
  </div>
</template>
<script setup>
import { useStore } from "vuex";

const store = useStore();
const info = store.getters.getInfo;
</script>

<style>
.body {
  color: white;
}
</style>
