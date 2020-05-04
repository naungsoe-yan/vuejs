import service from "../service/index.js";

export default {
  namespaced: true,
  state: {
    principal: {
      id: 1, 
      firstName: "Martin",
      lastName: "Johnson"
    },
    settings: {
      language: "en",
      timezone: "Asia/Singapore"
    }
  },
  getters: {
    principalFullName: (state) => {
      const principal = state.principal;
      return `${principal.firstName} ${principal.lastName}`;
    }
  },
  mutations: {
    settings(state, payload) {
      state.settings = payload;
    }
  },
  actions: {
    fetchSettings(context, params) {
      return service.fetchSettings(params).then(response => {
        context.commit("settings", response.data);
      });
    }
  }
}