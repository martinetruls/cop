<template>
  <div :class="`${isOpen ? 'show' : 'hide'}`">
    <Button icon="search" @handleClick="openFilters" class="filters-btn" />

    <div class="filter-container">
      <div class="filter-header">
        <Button label="Close" icon="close" @handleClick="closeFilters" class="close-btn" />
      </div>

      <div class="search-wrapper">
        <label for="search">
          <i class="material-icons">search</i>
        </label>
        <input
          id="search"
          type="text"
          placeholder="Search"
          @input="event => $emit('handleSearch', event.target.value)"
        />
      </div>

      <div class="filter-bars">
        <CheckboxGroup
          id="filter-types"
          label="Filter by type"
          :list="typeOptions"
          @handleFilterChange="value => $emit('handleTypeFilter', value)"
        />
        <CheckboxGroup
          id="filter-levels"
          label="Filter by level"
          :list="levelOptions"
          @handleFilterChange="value => $emit('handleLevelFilter', value)"
        />
      </div>
      <a href="#" id="about">About this site</a>
    </div>
  </div>
</template>

<script>
import CheckboxGroup from "./CheckboxGroup";
import Button from "./Button";

const levelOptions = ["Amature", "Professional", "Elite"];
const typeOptions = [
  "Flexibility",
  "Strength",
  "Spins on spinning",
  "Spins on static"
];

export default {
  name: "FilterContainer",
  components: { CheckboxGroup, Button },
  data() {
    return {
      levelOptions: levelOptions,
      typeOptions: typeOptions,
      isOpen: false
    };
  },
  methods: {
    openFilters() {
      this.isOpen = true;
    },
    closeFilters() {
      this.isOpen = false;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/vars.scss";

.filter-container {
  z-index: 1;
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: $dark-mode-background;
  padding: $ws-xl $ws-l;
  width: 270px;
  height: 100vh;

  transition: transform 0.3s ease-in-out;

  @media all and (max-width: $mobile-breakpoint) {
    padding: $ws-l;
    transform: translateY(100%);
    height: auto;
    width: 100vw;
  }
}

.filter-header {
  display: none;
  justify-content: flex-end;
  margin-bottom: $ws-l;

  @media all and (max-width: $mobile-breakpoint) {
    display: flex;
  }
}

.close-btn {
  background-color: transparent;
  color: white;
  border: 2px solid $dark-mode-80;

  &:focus {
    outline: none;

    &:not(.hide-focus) {
      border-color: $dark-mode-focus-color;
      box-shadow: $dark-mode-focus;
    }
  }
}

.filters-btn {
  display: none;
  z-index: 1;
  position: fixed;
  box-shadow: $shadow-darker;
  bottom: $ws-m;
  right: $ws-m;
  background-color: $purple;
  color: white;
  padding: $ws-m;
  border-radius: 50%;
  line-height: 0;

  &:focus {
    outline: none;
    box-shadow: $dark-mode-focus;
  }

  @media all and (max-width: $mobile-breakpoint) {
    display: block;
  }
}

.search-wrapper {
  position: relative;
  margin-bottom: $ws-xl;

  i {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: $ws-m;
    font-size: 2.4rem;
    color: $purple-bright;
  }

  @media all and (max-width: 650px) {
    max-width: none;
    margin-right: 0;
  }
}

#search {
  padding: $ws-s $ws-m $ws-s 4.8rem;
  background-color: $dark-mode-90;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 1.6rem;
  line-height: 1.5;
  width: 100%;
  height: 47px;

  &::placeholder {
    font-style: italic;
    font-weight: 300;
    color: $dark-mode-20;
  }

  &:focus {
    outline: none;
    box-shadow: $dark-mode-focus;
  }
}

.filter-bars {
  div + div {
    margin-top: $ws-xl;
  }

  @media all and (max-width: 1340px) {
    width: 100%;
  }

  @media all and (max-width: 760px) {
    flex-direction: column;

    div + div {
      margin-left: 0;
    }
  }
}

#about {
  position: absolute;
  left: $ws-xl;
  bottom: $ws-xl;
  color: $dark-model-link-color;
  font-weight: 400;
  text-decoration: none;
}

.show {
  @media all and (max-width: $mobile-breakpoint) {
    .filter-container {
      transform: translateY(0);
    }
  }
}
</style>
