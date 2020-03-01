<template>
  <button
    type="button"
    @click="$emit('handleClick')"
    @mousedown="hideFocus"
    @keydown="showFocus"
  >{{ label }}</button>
</template>

<script>
export default {
  name: "Button",
  props: {
    label: String
  },
  data() {
    return {
      focusHidden: false
    };
  },
  methods: {
    hideFocus() {
      this.focusHidden = true;
    },
    showFocus() {
      this.focusHidden = false;
    }
  }
};
</script>

<style lang="scss" scoped>
button {
  padding: 1rem 1.6rem;
  font-size: 1.6rem;
  border-radius: 4px;
}
</style>