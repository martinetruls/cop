<template>
  <div class="bar">
    <div class="label">{{ label }}</div>
    <div class="buttons">
      <ToggleButton
        v-for="(item, index) in list"
        v-bind:key="index"
        :label="item"
        :filterValue="item.replace(/\s+/g, '-')"
        @handleFilterChange="value => $emit('handleFilterChange', value)"
      />
    </div>
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
  width: 100%;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 4px;
  display: flex;
  align-items: center;
  padding: $ws-s;
  margin-bottom: $ws-m;

  @media all and (max-width: 1080px) {
    flex-direction: column;
    align-items: flex-start;
  }
}

.label {
  flex-grow: 1;
  padding: 0 $ws-m 0 $ws-xs;
  white-space: nowrap;

  @media all and (max-width: 1080px) {
    padding: $ws-xs 0 $ws-s;
  }
}

.buttons {
  display: flex;

  div + div {
    margin-left: $ws-s;
  }

  @media all and (max-width: 500px) {
    overflow-x: scroll;
    margin: -$ws-s;
    padding: $ws-s;
    max-width: calc(100% + 16px);
  }
}
</style>
