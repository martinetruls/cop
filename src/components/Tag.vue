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

<style scoped>
.tag {
  padding: 0.3rem 0.5rem;
  font-weight: 600;
  font-size: 12px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07);
  border-radius: 2px;

  /* default colors */
  background-color: rgba(77, 73, 94, 0.07);
  color: rgba(77, 73, 94, 1);
}

.tag-Flexibility {
  background-color: rgba(255, 175, 189, 0.3);
  /* color: #e6667d; */
  color: #d45168;
}

.tag-Strength {
  background-color: rgba(255, 195, 160, 0.2);
  /* color: #e27535; */
  color: #f06818;
}

.tag-Spins-on-static {
  background-color: rgba(40, 57, 101, 0.15);
  /* color: #283965; */
  color: #2b3f85;
}

.tag-Spins-on-spinning {
  background-color: rgba(117, 228, 214, 0.3);
  /* color: #0eb19c; */
  color: #0ca287;
}
</style>