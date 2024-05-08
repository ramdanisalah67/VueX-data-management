<template>
  <div class="body">
    <div>Welcome,this is calcul Page</div>
    <div>
      <button class="btn btn-light" @click="store.commit('setAge', 29)">
        change Age
      </button>
      <p>actuel Age : {{ getters.getAge }}</p>
    </div>
  </div>
</template>
<script setup>
import { onMounted } from "vue";
import { useStore } from "vuex";

const store = useStore();
const getters = store.getters;
onMounted(async () => {
  await store.dispatch("doGetProducts");
  console.log(store.state.age);
  console.log(getters.getProducts);
});
</script>

<style>
.body {
  color: white;
}
</style>
