<template>
  <div>
    <input
      type="checkbox"
      class="visually-hidden"
      :id="filterValue"
      :value="filterValue"
      :checked="isChecked"
      v-on:input="clickedFilter($event.target)"
    />
    <label class="toggle" :for="filterValue">{{ label }}</label>
  </div>
</template>

<script>
export default {
  name: "FilterToggle",
  props: {
    label: String,
    filterValue: String
  },
  data() {
    return {
      isChecked: false
    };
  },
  methods: {
    clickedFilter(target) {
      this.isChecked = target.checked;
      this.$emit("handleFilterChange", target.value);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/vars.scss";

.toggle {
  display: block;
  padding: 0.6rem 1rem;
  font-weight: 500;
  font-size: 1.4rem;
  box-shadow: $shadow-std;
  border-radius: 4px;
  white-space: nowrap;
  cursor: pointer;

  transition: transform ease-in-out 0.2s, background-color ease-in-out 0.2s,
    color ease-in-out 0.2s, border ease-in-out 0.2s;

  /* default colors */
  background-color: rgba(33, 22, 179, 0.05);
  color: rgba(33, 22, 179, 1);
  border: 1px solid rgba(33, 22, 179, 1);

  &:hover {
    background-color: rgba(33, 22, 179, 0.2);
  }

  &:active {
    background-color: rgba(33, 22, 179, 0.3);
    transform: scale(0.95);
  }
}

input:checked + label.toggle {
  background-color: rgba(33, 22, 179, 1);
  border-color: rgba(33, 22, 179, 1);
  color: white;
}

input:focus + label.toggle {
  box-shadow: 0 0 0 4px rgba(33, 22, 179, 0.2);
}

// .toggle-Flexibility {
//   background-color: #d0e8ec;
//   color: #008997;
// }

// .toggle-Strength {
//   background-color: #fbded5;
//   color: #ea4a1a;
//   border: 1px solid #ea4a1a;
// }

// .tag-Spins-on-static {
//   background-color: #fedee6;
//   color: #e91e64;
// }

// .tag-Spins-on-spinning {
//   background-color: #d6d7f2;
//   color: #2117b3;
// }
</style>
