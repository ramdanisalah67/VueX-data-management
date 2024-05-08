<template>
  <div class="body">
    <h2>
      Welcome, To Contact Page please if you want to contact us here is our
      E-mail => <span class="">{{ email }}</span>
    </h2>
    <p>name is {{ name }}</p>
  </div>
</template>
<script setup>
import { useStore } from "vuex";

const store = useStore();
const email = store.state.contactEmail;
const name = store.state.productModule.name;
</script>

<style>
.body {
  color: white;
}
</style>
