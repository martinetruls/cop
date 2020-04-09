<template>
  <div class="home">
    <router-view />
    <Overview />
  </div>
</template>

<script>
import Overview from "../components/CompulsoryOverview.vue";

export default {
  name: "Home",
  components: {
    Overview
  }
};
</script>
