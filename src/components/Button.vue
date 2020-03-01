<template>
  <button
    type="button"
    @click="$emit('handleClick')"
    @mousedown="hideFocus"
    @keydown="showFocus"
    :class="`${focusHidden && 'hide-focus'}`"
  >
    <i class="material-icons">{{ icon }}</i>
    {{ label }}
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    label: String,
    icon: String
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
  display: flex;
  align-items: center;

  i {
    color: inherit;
    margin-right: 0.8rem;
  }

  i:empty {
    display: none;
  }

  &.hideFocus {
    box-shadow: none;
  }
}
</style>