<template>
  <div class="compulsory-page">
    <router-link to="/" class="backdrop"></router-link>
    <div class="content">
      <p>{{ data.name }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Compulsory",
  props: {
    id: String,
    data: Object
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/vars.scss";

.compulsory-page {
  z-index: 1000;
  position: fixed;
  width: 100vw;
  height: 100vh;
}

.content {
  background-color: white;
  position: absolute;
  top: 50px;
  left: 50%;
  transform: translateX(-50%);
  width: 500px;
  height: 500px;
}

.backdrop {
  background-color: rgba(27, 28, 40, 0.8);
  position: absolute;
  width: 100%;
  height: 100%;
}
</style>