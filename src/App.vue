<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
function handleFirstTab(e) {
  if (e.keyCode === 9) {
    document.body.classList.remove("hide-focus");

    window.removeEventListener("keydown", handleFirstTab);
    window.addEventListener("mousedown", handleMouseDownOnce);
  }
}

function handleMouseDownOnce() {
  document.body.classList.add("hide-focus");

  window.removeEventListener("mousedown", handleMouseDownOnce);
  window.addEventListener("keydown", handleFirstTab);
}

window.addEventListener("keydown", handleFirstTab);
document.body.classList.add("hide-focus");

export default {
  name: "App"
};
</script>

<style lang="scss">
@import "./styles/global.scss";
</style>
