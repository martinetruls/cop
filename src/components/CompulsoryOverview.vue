<template>
  <div class="overview-page">
    <FilterSection
      @handleTypeFilter="filterByType"
      @handleLevelFilter="filterByLevel"
      @handleSearch="filterbySearch"
    ></FilterSection>

    <div>
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

.overview-page {
  padding: $ws-xxl;
  padding-top: 0;
  margin-left: 270px;

  @media all and (max-width: 1150px) {
    padding: $ws-xl $ws-l;
    padding-top: 0;
  }

  @media all and (max-width: 850px) {
    margin-left: 0;
  }
}

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
  background-color: #292a3d;
  border: none;
  border-radius: 6px;
  font-size: 1.8rem;
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
  line-height: $ws-xxl;
  text-align: right;
  font-weight: 400;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  margin: -$ws-m;
}
</style>
