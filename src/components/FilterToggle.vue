<template>
  <div
    :class="`toggle toggle-${type && type.replace(/\s+/g, '-')}`"
    @click="clickMe(type)"
  >
    {{ label }}
  </div>
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

.toggle {
  padding: 0.6rem 1rem;
  font-weight: 500;
  font-size: 1.4rem;
  box-shadow: $shadow-std;
  border-radius: 4px;

  /* default colors */
  background-color: white;
  color: $dark;
  border: 1px solid #aaa8b3;

  &:hover {
    background-color: #352bc7;
    border-color: #352bc7;
    color: white;
  }
}

.toggle-Flexibility {
  background-color: #d0e8ec;
  color: #008997;
}

.toggle-Strength {
  background-color: #fbded5;
  color: #ea4a1a;
  border: 1px solid #ea4a1a;
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
