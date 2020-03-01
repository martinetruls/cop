<template>
  <button
    type="button"
    @click="$emit('handleClick')"
    @mousedown="hideFocus"
    @keydown="showFocus"
    :class="`${focusHidden? 'hide-focus' : ''}`"
  >
    <i v-if="icon" class="material-icons">{{ icon }}</i>
    <span v-if="label">{{ label }}</span>
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
  }

  &.hideFocus {
    box-shadow: none;
  }

  * + * {
    margin-left: 0.8rem;
  }
}
</style>