<template>
  <div class="body">
    <div>
      Welcome, {{ messageWelcome }} you are {{ store.getters.getProfile }} right
      ?
    </div>
    <button class="btn btn-secondary" @click="fireMutation">
      Fire mutation
    </button>
  </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import { useStore } from "vuex";
const messageWelcome = ref("welcome salah-eddine to Home Page");
const store = useStore();
onMounted(() => {
  console.log(store.state.contactEmail);
});
const fireMutation = () => {
  store.commit("changeProfile");
};
</script>
