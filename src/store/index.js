import { createStore } from "vuex";

export default createStore({
  state: {
    contactEmail: "ramdanisalah67@gmail.com",
    profile: "JAVA DEVELOPER",
  },
  getters: {
    getInfo(state) {
      return (
        "email => " + state.contactEmail + " | profile => " + state.profile
      );
    },
    getProfile(state) {
      return state.profile;
    },
  },
  mutations: {
    changeProfile(state) {
      state.profile = "FullStack Java/Angular Developer";
      console.log(state);
    },
  },
});
