<template>
  <button @click="$emit('handleClose')" class="close-x">
    <svg xmlns="http://www.w3.org/2000/svg" width="7.675" height="7.675" viewBox="0 0 7.675 7.675">
      <path
        d="M4.98,3.837,7.43,1.388a.789.789,0,0,0,0-1.143.789.789,0,0,0-1.143,0L3.837,2.694,1.388.245a.789.789,0,0,0-1.143,0,.789.789,0,0,0,0,1.143L2.694,3.837.245,6.287a.789.789,0,0,0,0,1.143.789.789,0,0,0,1.143,0L3.837,4.98,6.287,7.43A.808.808,0,0,0,7.43,6.287Z"
        transform="translate(7.675 7.675) rotate(180)"
        fill="black"
      />
    </svg>
  </button>
</template>

<script>
export default {
  name: "CloseButton"
};
</script>

<style lang="scss" scoped>
@import "../../styles/vars.scss";

.close-x {
  border-radius: 50%;
  padding: $ws-m;
  background-color: transparent;
  border: none;
  transition: background-color 0.2s ease-in-out;

  svg {
    width: 1.4rem;
    height: 1.4rem;
  }

  path {
    fill: $darker;
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.3);
  }
}
</style>