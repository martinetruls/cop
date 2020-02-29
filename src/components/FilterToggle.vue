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
    <label class="toggle" :for="filterValue">
      <div class="box">
        <svg width="169" height="169" viewBox="0 0 169 169">
          <g transform="translate(-587.605 -106.773) rotate(-45)">
            <path
              d="M7.5,68.451a3,3,0,0,1-3-3v-91a3,3,0,0,1,3-3h28a3,3,0,0,1,3,3v60h105a3,3,0,0,1,3,3v28a3,3,0,0,1-3,3Z"
              transform="translate(264.501 590.548)"
            />
          </g>
        </svg>
      </div>
      {{ label }}
    </label>
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

.box {
  border-radius: 2px;
  width: 14px;
  height: 14px;
  margin-right: 10px;
  background-color: #434665;
  position: relative;

  svg {
    display: none;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    height: 80%;
    width: 80%;
  }
}

.toggle {
  display: flex;
  align-items: center;
  padding: 0.6rem 1rem;
  font-weight: 500;
  font-size: 1.4rem;
  border-radius: 4px;
  cursor: pointer;
  color: white;

  transition: transform ease-in-out 0.2s, background-color ease-in-out 0.2s,
    color ease-in-out 0.2s, border ease-in-out 0.2s;

  &:hover {
    background-color: #292a3d;
  }
}

input:checked + label.toggle {
  .box {
    background-color: #7369fe;
  }

  svg {
    display: block;
  }

  svg path {
    fill: #232434;
  }
}
</style>
