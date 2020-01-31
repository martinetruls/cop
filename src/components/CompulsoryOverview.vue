<template>
  <div class="overview">
    <div class="flex">
      <p>Showing: {{ compulsories.length }}</p>
    </div>

    <div class="test-row">
      <Tag label="Strength" type="Strength" :clickMe="filterByType" />
      <Tag label="Spins on spinning" type="Spins on spinning" :clickMe="filterByType" />
      <Tag label="Spins on static" type="Spins on static" :clickMe="filterByType" />
      <Tag label="Flexibility" type="Flexibility" :clickMe="filterByType" />
    </div>

    <div class="grid">
      <CompulsoryCard
        v-for="compulsory in compulsories.filter(trick => filters.includes(trick.type))"
        v-bind:key="compulsory.id"
        v-bind:compulsory="compulsory"
      ></CompulsoryCard>
    </div>
  </div>
</template>

<script>
import Data from "../data/compulsories.json";
import CompulsoryCard from "./CompulsoryCard";
import Tag from "./Tag";

export default {
  name: "CompulsoryOverview",
  components: { CompulsoryCard, Tag },
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

.test-row {
  padding: $ws-s;
  margin: $ws-s 0;
  display: flex;
  background-color: white;
  div + div {
    margin-left: $ws-s;
  }
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
