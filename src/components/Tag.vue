<template>
  <div :class="`tag tag-${type && type.replace(/\s+/g, '-')}`">{{ label }}</div>
</template>

<script>
export default {
  name: "Tag",
  props: {
    label: String,
    type: String
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/vars.scss";

.tag {
  padding: $ws-xxs $ws-s;
  font-weight: 600;
  font-size: 1.2rem;
  box-shadow: $shadow-std;
  border-radius: 2px;

  /* default colors */
  background-color: $dark-07;
  color: $dark;
}

.tag-Flexibility {
  background-color: $pink-03;
  color: $pink-dark;
}

.tag-Strength {
  background-color: $orange-02;
  color: $orange-darker;
}

.tag-Spins-on-static {
  background-color: $blue-15;
  color: $blue-dark;
}

.tag-Spins-on-spinning {
  background-color: $turquoise-3;
  color: $turquoise-dark;
}
</style>
