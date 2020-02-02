<template>
  <div class="filter-section">
    <div class="search-wrapper">
      <label for="search">
        <i class="material-icons">search</i>
      </label>
      <input id="search" type="text" placeholder="Search" />
    </div>
    <div class="flex">
      <ToggleBar label="Filter by levels" :list="levels" />
      <ToggleBar label="Filter by type" :list="types" />
    </div>
  </div>
</template>

<script>
import ToggleBar from "./ToggleBar";

const levels = ["Amature", "Professional", "Elite"];
const types = [
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
      levels: levels,
      types: types
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/vars.scss";

.flex {
  display: flex;

  div + div {
    margin-left: $ws-m;
  }
}

.filter-section {
  display: flex;
  align-items: center;
  margin-bottom: $ws-m;
  justify-content: space-between;
}

.search-wrapper {
  position: relative;
  flex-grow: 1;
  margin-right: $ws-m;

  i {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: $ws-m;
    font-size: 2.4rem;
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
</style>
