<template>
  <div class="overview">
    <FilterSection
      @handleTypeFilter="filterByType"
      @handleLevelFilter="filterByLevel"
      @handleSearch="filterbySearch"
    ></FilterSection>
    <!-- <p>{{ selectedTypes }}</p> -->
    <p
      class="showing"
    >Showing {{ totalNumber > filteredList.length ? filteredList.length + " of" : ""}} {{ totalNumber}} compulsories</p>

    <div class="grid">
      <CompulsoryCard
        v-for="compulsory in filteredList"
        v-bind:key="compulsory.id"
        v-bind:compulsory="compulsory"
      ></CompulsoryCard>
    </div>
  </div>
</template>

<script>
import Data from "../data/compulsories.json";
import CompulsoryCard from "./CompulsoryCard";
import FilterSection from "./FilterSection";

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
  components: { CompulsoryCard, FilterSection },
  data() {
    return {
      totalNumber: Data.compulsories.length,
      compulsories: Data.compulsories,
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
  methods: {
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

.search-wrapper {
  position: relative;

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
  width: 400px;

  &::placeholder {
    font-style: italic;
    font-weight: 300;
    color: #89888d;
  }
}

.showing {
  font-size: 1.4rem;
  text-align: right;
  font-weight: 400;
  flex-grow: 1;
}

.test-row {
  display: none;
  padding: $ws-s;
  margin: $ws-s 0;
  display: flex;
  background-color: white;
  div + div {
    margin-left: $ws-s;
  }

  display: none;
}

.temp-button {
  background-color: black; // to do
  border: none;
  padding: $ws-s $ws-m;
  font-weight: 500;
  letter-spacing: 0.5px;
  color: white;
  font-size: 1.4rem;
  border-radius: 3px;
}

.flex {
  display: flex;
  justify-content: space-between;
}

.overview {
  padding: $ws-xxl;

  @media all and (max-width: 850px) {
    padding: $ws-xl $ws-l;
  }
}

p {
  text-align: right;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  margin-left: -$ws-m;
  margin-right: -$ws-m;
}
</style>
