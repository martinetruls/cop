<template>
  <div class="filter-section">
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
      typeOptions: typeOptions
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/vars.scss";

.filter-section {
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media all and (max-width: 1340px) {
    flex-wrap: wrap;
  }
}

.search-wrapper {
  position: relative;
  flex-grow: 1;
  max-width: 400px;
  margin-right: $ws-m;
  margin-bottom: $ws-m;

  i {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: $ws-m;
    font-size: 2.4rem;
  }

  @media all and (max-width: 650px) {
    max-width: none;
    margin-right: 0;
  }
}

#search {
  padding: $ws-s $ws-m $ws-s 4.8rem;
  background-color: rgba(255, 255, 255, 0.5);
  //border: 1px solid #cddfe6;
  border: none;
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
    border: 1px solid rgba(33, 22, 179, 1);
  }
}

.filter-bars {
  display: flex;

  div + div {
    margin-left: $ws-m;
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
