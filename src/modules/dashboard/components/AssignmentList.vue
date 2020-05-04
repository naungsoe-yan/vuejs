<template>
  <div v-if="isFetchingAssignments" class="assignment-list">
    Loading Spinner
  </div>
  <div v-else class=”assignment-list”>
    <h1>Completed Assignments</h1>
    <div v-for="assignment in completedAssignments" :key="assignment.uuid">
      <assignment-list-item :assignment="assignment" />
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
import AssignmentListItem from "./AssignmentListItem";

export default {
  name: "AssignmentList",
  components: { AssignmentListItem },
  inject: ["principal"],
  data() {
    return {
      isFetchingAssignments: false
    };
  },
  computed: {
    ...mapGetters("dashboard", [
      "completedAssignments"
    ])
  },
  methods: {
    ...mapActions("dashboard", {
      fetchAssignments: "fetchAssignments"
    })
  },
  created() {
    const params = { sortBy: "modifiedDate" };
    this.isFetchingAssignments = true;
    this.fetchAssignments(params).then(() => {
      this.isFetchingAssignments = false;
    });
  }
}
</script>