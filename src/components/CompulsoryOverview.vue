<template>
  <div class="overview">
    <div class="flex">
      <button
        class="temp-button"
        type="button"
        v-on:click="compulsories = filterByStrength()"
      >Show only strength</button>
      <p>Showing: {{ compulsories.length }}</p>
    </div>

    <div class="grid">
      <CompulsoryCard
        v-for="compulsory in compulsories"
        v-bind:key="compulsory.id"
        v-bind:compulsory="compulsory"
      ></CompulsoryCard>
    </div>
  </div>
</template>

<script>
import Data from "../data/compulsories.json";
import CompulsoryCard from "./CompulsoryCard";

const filterByStrength = () => {
  const filteredList = Data.compulsories.filter(
    compulsory => compulsory.type === "Strength"
  );
  return filteredList;
};

export default {
  name: "CompulsoryOverview",
  components: { CompulsoryCard },
  data: function() {
    return {
      compulsories: Data.compulsories
    };
  },
  methods: {
    filterByStrength: filterByStrength
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/vars.scss";

.temp-button {
  background-color: #f56f86; // to do
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
