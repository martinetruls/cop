<template>
  <div class="overview">
    <FilterContainer
      @handleTypeFilter="filterByType"
      @handleLevelFilter="filterByLevel"
      @handleSearch="filterbySearch"
    ></FilterContainer>

    <div>
      <header>
        <h1>Pole Sport Compulsories</h1>
        <p
          class="show-count"
        >Showing {{ compulsories.length > filteredList.length ? filteredList.length + " of" : ""}} {{ compulsories.length}} compulsories</p>
      </header>

      <p v-if="isLoading">Loading...</p>
      <div class="grid" v-if="!isLoading">
        <CompulsoryCard
          v-for="compulsory in filteredList"
          v-bind:key="compulsory.id"
          v-bind:compulsory="compulsory"
        ></CompulsoryCard>
      </div>
    </div>
  </div>
</template>

<script>
import Data from "../data/compulsories.json";
import CompulsoryCard from "./CompulsoryCard";
import FilterContainer from "./FilterContainer";

const verifyTrickLevel = (value, selectedLevels) => {
  return selectedLevels.some(level => {
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
      searchWord: ""
    };
  },
  computed: {
    filteredList() {
      let filteredList = Data.compulsories;
      if (this.selectedTypes.length > 0) {
        filteredList = this.compulsories.filter(trick =>
          this.selectedTypes.includes(trick.type.replace(/\s+/g, "-"))
        );
      }

      if (this.selectedLevels.length > 0) {
        filteredList = filteredList.filter(trick => {
          return verifyTrickLevel(trick.techValue, this.selectedLevels);
        });
      }

      if (this.searchWord.length > 0) {
        filteredList = filteredList.filter(trick =>
          trick.name.toLowerCase().includes(this.searchWord.toLowerCase())
        );
      }
      return filteredList;
    }
  },
  created() {
    this.loadCompulsories();
  },
  methods: {
    async getCompulsories() {
      return new Promise(resolve => {
        setTimeout(() => resolve(Data.compulsories), 0);
      });
    },
    async loadCompulsories() {
      // values before load
      this.compulsories = [];
      this.isLoading = true;
      // values after load
      this.compulsories = await this.getCompulsories();
      this.isLoading = false;
    },
    filterByType(type) {
      if (this.selectedTypes.includes(type)) {
        this.selectedTypes = this.selectedTypes.filter(x => x !== type);
      } else {
        this.selectedTypes.push(type);
      }
    },
    filterByLevel(level) {
      if (this.selectedLevels.includes(level)) {
        this.selectedLevels = this.selectedLevels.filter(x => x !== level);
      } else {
        this.selectedLevels.push(level);
      }
    },
    filterbySearch(word) {
      this.searchWord = word;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/vars.scss";

header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: $ws-xl 0;
}

h1 {
  font-size: 3.8rem;
  line-height: 1;

  @media all and (max-width: $desktop-breakpoint) {
    text-align: center;
    width: 100%;
    font-size: 2.6rem;
  }
}

.overview {
  padding: $ws-xxxl;
  padding-top: 0;
  margin-left: 270px;

  @media all and (max-width: 1150px) {
    padding: $ws-xl $ws-l;
    padding-top: 0;
  }

  @media all and (max-width: $desktop-breakpoint) {
    margin-left: 0;
    margin-bottom: $mobile-filter-height;
  }

  @media all and (max-width: $mobile-breakpoint) {
    padding: $ws-l $ws-m;
    padding-top: 0;
  }
}

.show-count {
  font-weight: 400;

  @media all and (max-width: 900px) {
    display: none;
  }
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(23rem, 1fr));
  grid-gap: $ws-xl;

  @media all and (max-width: $mobile-breakpoint) {
    grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
    grid-gap: $ws-m;
  }
}
</style>
