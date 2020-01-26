<template>
  <div id="app">
    <CompulsoryOverview></CompulsoryOverview>
  </div>
</template>

<script>
import CompulsoryOverview from "./components/CompulsoryOverview";

export default {
  name: "app",
  components: {
    CompulsoryOverview
  }
};
</script>

<style lang="scss">
@import "./styles/global.scss";
</style>
