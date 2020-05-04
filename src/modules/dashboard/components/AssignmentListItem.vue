<template>
  <div class="assignment-list-item">
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
  }
}
</script>