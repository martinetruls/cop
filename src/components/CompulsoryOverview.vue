<template>
  <div>
    hei!
    <li v-for="trick in items" v-bind:key="trick">{{ trick.name }}</li>
  </div>
</template>

<script>
import Data from "../data/compulsories.json";

export default {
  name: "CompulsoryOverview",
  data: function() {
    return {
      items: Data.compulsories
    };
  }
};
</script>