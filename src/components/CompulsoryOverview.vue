<template>
  <div class="overview">
    <FilterContainer
      @handleTypeFilter="filterByType"
      @handleLevelFilter="filterByLevel"
      @handleSearch="filterbySearch"
    ></FilterContainer>

    <Header
      :isLoading="isLoading"
      :totalLength="compulsories.length"
      :currentLength="filteredList.length"
    />

    <CardGrid
      :compulsories="filteredList"
      :isLoading="isLoading"
      :searchWord="searchWord"
    />
  </div>
</template>

<script>
import Data from "../data/compulsories.json";
import CardGrid from "./CardGrid";
import FilterContainer from "./FilterContainer";
import Header from "./Header";

const verifyTrickLevel = (value, selectedLevels) => {
  return selectedLevels.some((level) => {
    if (level === "Amature" && value <= 0.5) {
      return true;
    } else if (level === "Professional" && value >= 0.3 && value <= 0.8) {
      return true;
    } else if (level === "Elite" && value >= 0.5) {
      return true;
    }
    return false;
  });
};

export default {
  name: "CompulsoryOverview",
  components: { CardGrid, FilterContainer, Header },
  data() {
    return {
      compulsories: [],
      isLoading: true,
      selectedTypes: [],
      selectedLevels: [],
      searchWord: "",
    };
  },
  computed: {
    filteredList() {
      let filteredList = this.compulsories;

      // filter by type
      if (this.selectedTypes.length > 0) {
        filteredList = this.compulsories.filter((trick) =>
          this.selectedTypes.includes(trick.type.replace(/\s+/g, "-"))
        );
      }

      // Filter by level
      if (this.selectedLevels.length > 0) {
        filteredList = filteredList.filter((trick) => {
          return verifyTrickLevel(trick.techValue, this.selectedLevels);
        });
      }

      // filter by search word
      if (this.searchWord.length > 0) {
        filteredList = filteredList.filter((trick) => {
          // check for name match
          const matchesName = trick.name
            .toLowerCase()
            .includes(this.searchWord);
          // check for id match
          const matchesId = trick.id.toLowerCase().includes(this.searchWord);
          return matchesName | matchesId;
        });
      }
      return filteredList;
    },
  },
  created() {
    this.loadCompulsories();
  },
  methods: {
    async getCompulsories() {
      return new Promise((resolve) => {
        // Fake fetching
        setTimeout(() => resolve(Data.compulsories), 1000);
      });
    },
    async loadCompulsories() {
      // Values before load
      this.compulsories = [];
      this.isLoading = true;
      // Values after load
      this.compulsories = await this.getCompulsories();
      this.isLoading = false;
    },
    filterByType(type) {
      if (this.selectedTypes.includes(type)) {
        // Removeing type from filter
        this.selectedTypes = this.selectedTypes.filter((x) => x !== type);
      } else {
        // Adding type to filter
        this.selectedTypes.push(type);
      }
    },
    filterByLevel(level) {
      if (this.selectedLevels.includes(level)) {
        // Removing level from filter
        this.selectedLevels = this.selectedLevels.filter((x) => x !== level);
      } else {
        // Adding level to filter
        this.selectedLevels.push(level);
      }
    },
    filterbySearch(word) {
      this.searchWord = word.toLowerCase();
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/vars.scss";
.overview {
  margin-left: $filter-desktop-width;

  // Mobile view - filter on the bottom
  @media all and (max-width: $desktop-breakpoint) {
    margin-left: 0;
    margin-bottom: $mobile-filter-height;
  }
}
</style>
