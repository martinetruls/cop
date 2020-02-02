<template>
  <div class="overview">
    <FilterSection></FilterSection>
    <p class="showing">Showing {{ compulsories.length }} compulsories</p>
    <!-- 
    <div class="test-row">
      <FilterToggle label="Strength" type="Strength" :clickMe="filterByType" />
      <Tag
        label="Spins on spinning"
        type="Spins on spinning"
        :clickMe="filterByType"
      />
      <Tag
        label="Spins on static"
        type="Spins on static"
        :clickMe="filterByType"
      />
      <Tag label="Flexibility" type="Flexibility" :clickMe="filterByType" />
    </div> -->

    <div class="grid">
      <CompulsoryCard
        v-for="compulsory in compulsories.filter(trick =>
          filters.includes(trick.type)
        )"
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

export default {
  name: "CompulsoryOverview",
  components: { CompulsoryCard, FilterSection },
  data() {
    return {
      compulsories: Data.compulsories,
      filters: [
        "Strength",
        "Flexibility",
        "Spins on spinning",
        "Spins on static"
      ]
    };
  },
  methods: {
    filterByType(type) {
      if (this.filters.includes(type)) {
        this.filters = this.filters.filter(x => x !== type);
      } else {
        this.filters.push(type);
      }
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
