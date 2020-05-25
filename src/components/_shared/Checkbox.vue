<template>
  <div>
    <input
      type="checkbox"
      class="visually-hidden"
      :id="filterValue"
      :value="filterValue"
      :checked="isChecked"
      @input="clickedFilter($event.target)"
      @keydown="showFocus"
    />

    <label :class="{ 'hide-focus': focusHidden }" @mousedown="hideFocus" :for="filterValue">
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
  name: "Checkbox",
  props: {
    label: String,
    filterValue: String
  },
  data() {
    return {
      isChecked: false,
      focusHidden: false
    };
  },
  methods: {
    clickedFilter(target) {
      this.isChecked = target.checked;
      this.$emit("handleFilterChange", target.value);
    },
    hideFocus() {
      this.focusHidden = true;
    },
    showFocus() {
      this.focusHidden = false;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../styles/vars.scss";

.box {
  border-radius: 2px;
  width: 14px;
  height: 14px;
  margin-right: 10px;
  background-color: $dark-mode-80;
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

label {
  display: flex;
  align-items: center;
  padding: $ws-s 1rem;
  font-weight: 400;
  letter-spacing: 0.5px;
  font-size: 1.6rem;
  border-radius: 4px;
  cursor: pointer;
  color: white;

  transition: transform ease-in-out 0.2s, background-color ease-in-out 0.2s,
    color ease-in-out 0.2s, border ease-in-out 0.2s;

  &:hover {
    @media (hover: hover) and (pointer: fine) {
      background-color: $dark-mode-90;
    }
  }
}

input:checked + label {
  .box {
    background-color: $purple-bright;
  }

  svg {
    display: block;
  }

  svg path {
    fill: $dark-mode-background;
  }
}

input:focus + label:not(.hide-focus) {
  box-shadow: $dark-mode-focus;
}
</style>
