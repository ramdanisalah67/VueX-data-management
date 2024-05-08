import { createStore } from "vuex";
import productModule from "@/store/ProductService/ProductsOperations";
export default createStore({
  strict: true,
  state: {
    contactEmail: "ramdanisalah67@gmail.com",
    age: 26,
    counter: 0,
  },
  getters: {
    getAge(state) {
      return state.age;
    },
  },
  mutations: {
    setAge(state, age) {
      state.age = age;
    },
  },
  actions: {},
  modules: {
    productModule,
  },
});
