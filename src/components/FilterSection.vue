<template>
  <div>
    <button
      @click="openFilters"
      type="button"
      :class="`show-filters-button ${isOpen ? 'show' : 'hide'}`"
    >
      <i class="material-icons">search</i>
    </button>
    <div :class="`filter-section ${isOpen ? 'show' : 'hide'}`">
      <button
        @click="closeFilters"
        type="button"
        :class="`hide-filters-button ${isOpen ? 'show' : 'hide'}`"
      >Close</button>
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
        <ToggleBar
          label="Filter by types"
          :list="typeOptions"
          @handleFilterChange="value => $emit('handleTypeFilter', value)"
        />
        <ToggleBar
          label="Filter by level"
          :list="levelOptions"
          @handleFilterChange="value => $emit('handleLevelFilter', value)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ToggleBar from "./ToggleBar";

const levelOptions = ["Amature", "Professional", "Elite"];
const typeOptions = [
  "Flexibility",
  "Strength",
  "Spins on spinning",
  "Spins on static"
];

export default {
  name: "FilterSection",
  components: { ToggleBar },
  data() {
    return {
      levelOptions: levelOptions,
      typeOptions: typeOptions,
      isOpen: true
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

.show-filters-button {
  display: none;
  z-index: 1;

  @media all and (max-width: 850px) {
    display: block;
    position: fixed;
    box-shadow: $shadow-darker;
    bottom: $ws-m;
    right: $ws-m;
    background-color: #232434;
    background-color: #7369fe;
    color: white;
    padding: $ws-m;
    border-radius: 50%;

    i {
      color: white;
    }

    &:focus {
      outline: none;
    }
  }
}

.hide-filters-button {
  padding: $ws-s;
  display: none;

  @media all and (max-width: 850px) {
    display: block;
  }
}

.filter-section {
  z-index: 1;
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: #1b1c28;
  padding: $ws-xxl $ws-l;
  width: 270px;
  height: 100vh;

  transition: transform 0.3s ease-in-out;

  @media all and (max-width: 850px) {
    transform: translateY(100%);
    height: auto;
    width: 100vw;
  }

  &.show {
    @media all and (max-width: 850px) {
      transform: translateY(0);
    }
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
    color: #7369fe;
  }

  @media all and (max-width: 650px) {
    max-width: none;
    margin-right: 0;
  }
}

#search {
  padding: $ws-s $ws-m $ws-s 4.8rem;
  background-color: rgba(255, 255, 255, 0.5);
  background-color: #232434;
  color: white;
  border: 1px solid transparent;
  border-radius: 6px;
  font-size: 1.6rem;
  line-height: 1.5;
  width: 100%;
  height: 47px;

  &::placeholder {
    font-style: italic;
    font-weight: 300;
    color: #89888d;
  }

  &:focus {
    outline: none;
    // border: 1px solid rgba(33, 22, 179, 1);
    // border: 1px solid #7369fe;
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
</style>
