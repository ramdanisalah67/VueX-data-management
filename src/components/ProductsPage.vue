<template>
  <div class="body">
    <div>Welcome,this is products page</div>
    <p>
      <button class="btn btn-dark m-3" @click="checkProducts">
        checkProducts
      </button>
    </p>
    <div class="content">
      <div class="card w-50 m-auto bg-light" v-for="p in products" :key="p.id">
        <div class="card-body">
          <h5 class="card-title">{{ p.title }}</h5>
          <p class="card-text">
            {{ p.description }}
          </p>
          <a href="#" class="btn btn-primary"> Go somewhere </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import { useStore } from "vuex";

const store = useStore();
const products = ref([]);
const chargeProducts = async () => {
  await store.dispatch("doGetProducts");
  products.value = store.getters.getProducts;
  console.log(products.value);
};

onMounted(() => {
  chargeProducts();
});

const checkProducts = () => {
  console.log(store.getters.getProducts);
};
</script>
