<template>
  <div>
    <p>Showing: {{ compulsories.length }}</p>
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

export default {
  name: "CompulsoryOverview",
  components: { CompulsoryCard },
  data: function() {
    return {
      compulsories: Data.compulsories
    };
  }
};
</script>

<style  scoped>
p {
  padding-top: 1.5rem;
  padding-right: 3rem;
  text-align: right;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  padding: 1rem 2rem;
}
</style>