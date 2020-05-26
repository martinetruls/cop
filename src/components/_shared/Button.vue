<template>
  <button type="button" @click="$emit('handleClick')">
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
  }
};
</script>

<style lang="scss" scoped>
@import "../../styles/vars.scss";

button {
  padding: $ws-s $ws-m;
  font-size: $ws-m;
  border-radius: 4px;
  display: flex;
  align-items: center;
  border: transparent;

  transition: background-color 0.2s ease-in-out;

  i {
    color: inherit;
  }

  * + * {
    margin-left: $ws-s;
  }
}

// Hiding focus style for mouse users
.hide-focus button {
  box-shadow: none;
}
</style>