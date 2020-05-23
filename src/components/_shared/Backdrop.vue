<template>
  <div class="backdrop" @click="$emit('handleClick')" />
</template>

<script>
export default {
  name: "Backdrop"
};
</script>

<style lang="scss" scoped>
.backdrop {
  background-color: rgba(27, 28, 40, 0.7);
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  backdrop-filter: blur(4px);

  transition: background-color 0.2s ease-in-out,
    backdrop-filter 0.2s ease-in-out;
}
</style>