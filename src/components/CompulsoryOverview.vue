<template>
  <div class="overview">
    <FilterContainer
      @handleTypeFilter="filterByType"
      @handleLevelFilter="filterByLevel"
      @handleSearch="filterbySearch"
    ></FilterContainer>

    <header>
      <h1>Pole Sport Compulsories</h1>
      <!-- Mobile only -->
      <router-link id="about" to="/about">About this site</router-link>
      <p
        class="show-count"
      >Showing {{ compulsories.length > filteredList.length ? filteredList.length + " of" : ""}} {{ compulsories.length}} compulsories</p>
    </header>

    <p v-if="isLoading">Loading...</p>
    <div class="grid" v-if="!isLoading && filteredList.length">
      <CompulsoryCard
        v-for="compulsory in filteredList"
        v-bind:key="compulsory.id"
        v-bind:compulsory="compulsory"
      ></CompulsoryCard>
    </div>

    <!-- Empty state -->
    <div v-if="!isLoading && !filteredList.length" class="no-search-result">
      Ops, searching for
      <span class="search-word">{{ searchWord }}</span> did not match anything!
      <div class="search-tip">Try searching for another compulsory name or ID</div>
    </div>
  </div>
</template>

<script>
import Data from "../data/compulsories.json";
import CompulsoryCard from "./CompulsoryCard";
import FilterContainer from "./FilterContainer";

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
  components: { CompulsoryCard, FilterContainer },
  data() {
    return {
      compulsories: [],
      isLoading: false,
      selectedTypes: [],
      selectedLevels: [],
      searchWord: "",
    };
  },
  computed: {
    filteredList() {
      let filteredList = Data.compulsories;

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
        setTimeout(() => resolve(Data.compulsories), 0);
      });
    },
    async loadCompulsories() {
      // Values before load
      this.compulsories = [];
      //this.isLoading = true; // temporarly removing this until proper design is added
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

header {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: $ws-l $ws-xxxl;
  background-color: rgba(255, 255, 255, 0.8);
  box-shadow: 0 0px 6px rgba(0, 0, 0, 0.1);

  // Desktop small view
  @media all and (max-width: 1150px) {
    padding: $ws-l $ws-xl;
  }

  // When it is time to move the count
  @media all and (max-width: 900px) {
    margin-bottom: 3.2rem;
  }

  // Mobile view - filter on the bottom
  @media all and (max-width: $desktop-breakpoint) {
    flex-direction: column;
    align-items: center;
  }

  // Mobile view - smallest
  @media all and (max-width: $mobile-breakpoint) {
    padding: $ws-l $ws-m;
  }
}

h1 {
  font-size: 2.6rem;
  line-height: 1;

  // Mobile view - filter on the bottom
  @media all and (max-width: $desktop-breakpoint) {
    font-size: 2.4rem;
    line-height: 1.5;
    text-align: center;
  }
}

.show-count {
  font-weight: 300;
  font-size: 1.4rem;
  line-height: 2rem;

  // When it is time to move the count
  @media all and (max-width: 900px) {
    position: absolute;
    bottom: -40px;
    right: 0;
    width: 100%;
    padding: 0 $ws-xl;
    text-align: right;
  }

  // Mobile view - smallest
  @media all and (max-width: $mobile-breakpoint) {
    text-align: center;
  }
}

.grid {
  display: grid;
  padding: $ws-xxl $ws-xxxl;
  grid-template-columns: repeat(auto-fill, minmax(23rem, 1fr));
  grid-template-rows: auto;
  grid-gap: $ws-xl;

  // Desktop small view
  @media all and (max-width: 1150px) {
    padding: $ws-xl;
  }

  // Mobile view - smallest
  @media all and (max-width: $mobile-breakpoint) {
    padding: $ws-xl $ws-m;
    grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
    grid-gap: $ws-m;
  }
}

$underline-gradient: linear-gradient(to right, $purple-20 0%, $ocean-20 100%);

#about {
  display: none;
  text-align: center;
  color: $purple-dark;
  font-weight: 400;
  text-decoration: none;
  padding: 6px 0.8rem;
  margin: 0 -0.8rem;
  background-image: $underline-gradient;
  background-position: bottom 2px right 0.8rem;
  background-size: calc(100% - 1.6rem) 2px;
  background-repeat: no-repeat;
  border-radius: 3px;

  transition: color 0.15s ease-in-out, background-size 0.15s ease-in-out,
    background-position 0.15s ease-in-out;

  @media all and (max-width: $desktop-breakpoint) {
    display: block;
  }

  &:hover {
    color: $dark-mode-90;
    background-position: bottom right 0px;
    background-size: 100% 100%;
  }
}

.no-search-result {
  padding: $ws-xxxl $ws-m;
  text-align: center;
  margin: auto;
  font-size: 2.4rem;
  font-weight: 300;
  max-width: 60rem;
  word-break: break-word;
}

.search-word {
  font-weight: 500;
  font-style: italic;
}

.search-tip {
  font-size: 1.6rem;
  color: $dark-70;
  margin-top: $ws-s;
}
</style>

