<template>
  <div v-if="isFetchingSettings" class="dashboard">
    Loading Spinner
  </div>
  <div v-else class=”dashboard”>
    <h1>{{ $t("dashboard_label_title") }}</h1>
    <announcement-list />
    <assignment-list />
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
import dashboardModule from "../store/index.js";
import AnnouncementList from "./AnnouncementList";
import AssignmentList from "./AssignmentList";

export default {
  name: "Dashboard",
  components: { AnnouncementList, AssignmentList },
  props: {
    layout: { type: String, default: "default" }
  },
  data() {
    isFetchingSettings: false
  },
  computed: {
    ...mapGetters("application", [
      "principalFullName"
    ]),
    ...mapState("application", {
      principal: state => state.principal,
      settings: state => state.settings
    })
  },
  methods: {
    ...mapActions("application", {
      fetchSettings: "fetchSettings"
    })
  },
  provide() {
    return {
      principal: this.principal,
      settings: this.settings
    };
  },
  created() {
    this.$store.registerModule("dashboard", dashboardModule);

    const params = { locale: "en_SG" };
    this.isFetchingSettings = true;
    this.fetchSettings(params).then(() => {
      this.isFetchingSettings = false;
    });
  },
  beforeDestroy() {
    this.$store.unregisterModule("dashboard", dashboardModule);
  }
}
</script>

<style scoped>
  .dashboard {
    padding: 0;
    margin: 0;
  }
</style>