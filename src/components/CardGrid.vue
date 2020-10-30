<template>
  <div class="card-grid-wrapper">
    <!-- Loading feedback  -->
    <transition name="fade">
      <LoadingBubbles v-if="isLoading" />
    </transition>

    <transition name="fade">
      <!-- Grid of cards -->
      <div class="grid" v-if="!isLoading && compulsories.length">
        <CompulsoryCard
          v-for="compulsory in compulsories"
          :key="compulsory.id"
          :compulsory="compulsory"
          :isSelected="favorites.includes(compulsory.id)"
          @update-favorites="$emit('update-favorites')"
        ></CompulsoryCard>
      </div>
    </transition>

    <!-- Empty state - No search match  -->
    <div v-if="!isLoading && !compulsories.length" class="no-search-result">
      Ops, searching for
      <span class="search-word">{{ searchWord }}</span> did not match anything!
      <div class="search-tip">
        Try searching for another compulsory name or ID
      </div>
    </div>
  </div>
</template>

<script>
import CompulsoryCard from "./CompulsoryCard";
import LoadingBubbles from "./_shared/LoadingBubbles";

export default {
  name: "CardGrid",
  components: { CompulsoryCard, LoadingBubbles },
  props: {
    isLoading: Boolean,
    compulsories: Array,
    searchWord: String,
    favorites: Array,
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/vars.scss";

.card-grid-wrapper {
  position: relative;
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
