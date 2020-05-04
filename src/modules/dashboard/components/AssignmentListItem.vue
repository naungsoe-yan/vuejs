<template>
  <div class="assignment-list-item" @click="handleLaunch">
    <div class="title">
      {{ assignment.title }}
    </div>
    <div class=”description”>
      {{ assignment.description }}
    </div>
  </div>
</template>

<script>
export default {
  name: "AssignmentListItem",
  functional: true,
  props: {
    assignment: { type: Object, required: true }
  },
  methods: {
    handleLaunch() {
      const assignmentId = this.assignment.id;
      const path = `/assignment/${assignmentId}`;
      this.$router.push({ path: path });
    }
  }
}
</script>