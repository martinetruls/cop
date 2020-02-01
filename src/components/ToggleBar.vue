<template>
  <div class="bar">
    <div class="label">{{ label }}</div>
    <ToggleButton
      v-for="(item, index) in list"
      :label="item"
      v-bind:key="index"
    />
  </div>
</template>

<script>
import ToggleButton from "./FilterToggle";
export default {
  name: "ToggleBar",
  components: { ToggleButton },
  props: {
    label: String,
    list: Array
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/vars.scss";

.bar {
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 4px;
  display: flex;
  align-items: center;
  padding: $ws-s;

  div + div {
    margin-left: $ws-s;
  }
}

.label {
  padding: 0 $ws-xs;
}
</style>
