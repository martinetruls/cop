<template>
  <div class="bar">
    <div class="label">{{ label }}</div>
    <ToggleButton
      v-for="(item, index) in list"
      v-bind:key="index"
      :label="item"
      :filterValue="item.replace(/\s+/g, '-')"
      @onFilterClick="updateFilter"
      v-model="selectedFilters"
    />
    <div>Selected data: {{ selectedFilters }}</div>
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
  },
  data() {
    return {
      selectedFilters: []
    };
  },
  methods: {
    updateFilter(value, checked) {
      if (checked) {
        this.selectedFilters.push(value);
      } else {
        this.selectedFilters = this.selectedFilters.filter(x => x !== value);
      }
    }
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
