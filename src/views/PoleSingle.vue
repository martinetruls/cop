<template>
  <div class="pole-single">
    <router-view />
    <Overview />
  </div>
</template>

<script>
import Overview from "../components/CompulsoryOverview.vue";

export default {
  name: "PoleSingle",
  components: {
    Overview,
  },
};
</script>
