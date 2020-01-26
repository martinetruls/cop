<template>
  <div class="overview">
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

<style lang="scss" scoped>
@import "../styles/vars.scss";

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
