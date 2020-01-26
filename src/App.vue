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

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

h1,
h2,
h3 {
  font-family: "Muli";
}

h2 {
  font-size: 18px;
  margin-bottom: 0;
}

#app {
  font-family: "Lato", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #4d495e;
  background-image: linear-gradient(
    to right,
    rgba(255, 195, 160, 0.2) 0%,
    rgba(255, 175, 189, 0.2) 100%
  );
  min-height: 100vh;
}
</style>
