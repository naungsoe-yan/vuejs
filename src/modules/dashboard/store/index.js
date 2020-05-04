import Vue from "vue";
import service from "../service/index.js";

export default {
  namespaced: true,
  state: {
    assignmentsByUuid: {},
    assignmentUuids: []
  },
  getters: {
    findAssignment: (state) => (uuid) => {
      return state.assignmentsByUuid[uuid];
    },
    completedAssignments: (state, getters) => {
      return state.assignmentUuids.map((uuid) => {
        const assignment = getters.findAssignment(uuid);
        if (assignment.completed) return assignment;
      });
    }
  },
  mutations: {
    addAssignment(state, payload) {
      Vue.set(state.assignmentsByUuid, payload.uuid, payload);
      if (state.assignmentUuids.includes(payload.uuid)) return;
      state.assignmentUuids.push(payload.uuid);
    }
  },
  actions: {
    fetchAssignments(context, params) {
      return service.fetchAssignments(params).then(response => {
        response.data.forEach((assignment) => {
          context.commit("addAssignment", assignment);
        });
      });
    }
  }
}