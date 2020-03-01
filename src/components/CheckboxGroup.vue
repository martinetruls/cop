<template>
  <div role="group" :aria-labelledby="id">
    <h3 :id="id">{{ label }}</h3>
    <Checkbox
      v-for="(item, index) in list"
      v-bind:key="index"
      :label="item"
      :filterValue="item.replace(/\s+/g, '-')"
      @handleFilterChange="value => $emit('handleFilterChange', value)"
    />
  </div>
</template>

<script>
import Checkbox from "./Checkbox";

export default {
  name: "CheckboxGroup",
  components: { Checkbox },
  props: {
    label: String,
    list: Array,
    id: String
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/vars.scss";

h3 {
  color: $dark-mode-10;
  font-family: "Lato";
  margin-bottom: $ws-s;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 400;
  font-size: 1.4rem;
}
</style>
