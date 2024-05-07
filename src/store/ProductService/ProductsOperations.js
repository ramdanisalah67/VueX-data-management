export default {
  state: {
    products: [],
  },
  getters: {
    getProducts(state) {
      return state.products;
    },
  },
  mutations: {
    setProducts(state, result) {
      state.products = result;
      console.log(result);
    },
  },

  actions: {
    async doGetProducts(context) {
      await fetch("https://dummyjson.com/products")
        .then((res) => res.json())
        .then((data) => {
          context.commit("setProducts", data.products);
        });
    },
  },
};
