<template>
  <div class="home">
    <Overview />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "../components/HelloWorld.vue";
import Overview from "../components/CompulsoryOverview.vue";

export default {
  name: "Home",
  components: {
    Overview
  }
};
</script>
