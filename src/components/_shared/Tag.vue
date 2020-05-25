<template>
  <div :class="type | dashedType" @click="clickMe(type)">{{ label }}</div>
</template>

<script>
export default {
  name: "Tag",
  props: {
    label: [String, Number],
    type: String,
    clickMe: Function
  }
};
</script>

<style lang="scss" scoped>
@import "../../styles/vars.scss";

*[class*="type"] {
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

.type-flexibility {
  background-color: $turquoise-light;
  color: $turquoise-dark;
}

.type-strength {
  background-color: $orange-light;
  color: $orange-dark;
}

.type-spins-on-static {
  background-color: $pink-light;
  color: $pink-dark;
}

.type-spins-on-spinning {
  background-color: $purple-18;
  color: $purple-dark;
}
</style>
