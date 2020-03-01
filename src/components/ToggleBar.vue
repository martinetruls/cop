<template>
  <div>
    <div class="label">{{ label }}</div>
    <div class="buttons">
      <FilterToggle
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
import FilterToggle from "./FilterToggle";
export default {
  name: "ToggleBar",
  components: { FilterToggle },
  props: {
    label: String,
    list: Array
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/vars.scss";

.label {
  color: #b6b8c8;
  margin-bottom: $ws-s;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 400;
  font-size: 1.4rem;
}

.buttons {
  div + div {
    margin-top: $ws-s;
  }

  @media all and (max-width: 500px) {
    overflow-x: scroll;
    margin: -$ws-s;
    padding: $ws-s;
    max-width: calc(100% + 16px);
  }
}
</style>
