<template>
  <div :class="`tag tag-${type && type.replace(/\s+/g, '-')}`" @click="clickMe(type)">{{ label }}</div>
</template>

<script>
export default {
  name: "Tag",
  props: {
    label: String,
    type: String,
    clickMe: Function
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/vars.scss";

.tag {
  padding: $ws-xs $ws-s;
  font-weight: 600;
  font-size: 1.2rem;
  box-shadow: $shadow-std;
  border-radius: 2px;

  /* default colors */
  background-color: $dark-15;
  color: $dark;
}

.tag-Flexibility {
  background-color: #d0e8ec;
  color: #008997;
}

.tag-Strength {
  background-color: #fbded5;
  color: #ea4a1a;
}

.tag-Spins-on-static {
  background-color: #fedee6;
  color: #e91e64;
}

.tag-Spins-on-spinning {
  background-color: #d6d7f2;
  color: #2117b3;
}
</style>
