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
@import "../../styles/vars.scss";

.tag {
  padding: $ws-xs $ws-s;
  font-weight: 600;
  font-size: 1.2rem;
  box-shadow: $shadow-std;
  border-radius: 2px;

  @media all and (max-width: $mobile-breakpoint) {
    font-size: 1rem;
  }

  /* default colors */
  background-color: $dark-15;
  color: $dark;
}

.tag-Flexibility {
  background-color: $turquoise-light;
  color: $turquoise-dark;
}

.tag-Strength {
  background-color: $orange-light;
  color: $orange-dark;
}

.tag-Spins-on-static {
  background-color: $pink-light;
  color: $pink-dark;
}

.tag-Spins-on-spinning {
  background-color: $purple-18;
  color: $purple-dark;
}
</style>
