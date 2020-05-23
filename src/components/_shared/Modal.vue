<template>
  <div class="modal-wrapper">
    <BackDrop @handleClick="goBack" />

    <div class="modal" role="dialog">
      <CloseButton @handleClose="goBack" class="modal-close" />
      <slot />
    </div>
  </div>
</template>

<script>
import CloseButton from "./CloseButton";
import BackDrop from "./Backdrop";

export default {
  name: "Modal",
  components: { CloseButton, BackDrop },
  methods: {
    goBack() {
      this.$router.back();
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../styles/vars.scss";

.modal-wrapper {
  z-index: 1000;
  position: fixed;
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
}

.modal {
  z-index: 1;
  background-color: $grey-10;
  border-radius: 20px;
  position: absolute;
  top: 50px;
  left: 50%;
  margin-bottom: 50px;
  transform: translateX(-50%);
  width: 100vw;
  max-width: 600px;
  min-height: 500px;
  padding: $ws-xl;

  @media all and (max-width: 600px) {
    border-radius: 0;
    top: 0;
    min-height: 100vh;
  }
}

.modal-close {
  position: absolute;
  top: $ws-s;
  right: $ws-s;

  @media all and (max-width: 600px) {
    top: 21px;
    right: $ws-m;
  }
}

.backdrop {
  background-color: rgba(27, 28, 40, 0.8);
  position: fixed;
  width: 100%;
  height: 100%;
}
</style>