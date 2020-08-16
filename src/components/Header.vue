<template>
  <header>
    <h1>Pole Sport Compulsories</h1>
    <!-- Mobile only -->
    <router-link class="about-link" to="/about">About this site</router-link>
    <p class="show-count" v-if="!isLoading">
      Showing
      {{ totalLength > currentLength ? currentLength + " of" : "" }}
      {{ totalLength }} compulsories
    </p>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: {
    isLoading: Boolean,
    totalLength: Number,
    currentLength: Number,
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/vars.scss";

header {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: $ws-l $ws-xxxl;
  background-color: rgba(255, 255, 255, 0.8);
  box-shadow: 0 0px 6px rgba(0, 0, 0, 0.1);

  // Desktop small view
  @media all and (max-width: 1150px) {
    padding: $ws-l $ws-xl;
  }

  // When it is time to move the count
  @media all and (max-width: 900px) {
    margin-bottom: 3.2rem;
  }

  // Mobile view - filter on the bottom
  @media all and (max-width: $desktop-breakpoint) {
    flex-direction: column;
    align-items: center;
  }

  // Mobile view - smallest
  @media all and (max-width: $mobile-breakpoint) {
    padding: $ws-l $ws-m;
  }
}

h1 {
  font-size: 2.6rem;
  line-height: 1;

  // Mobile view - filter on the bottom
  @media all and (max-width: $desktop-breakpoint) {
    font-size: 2.4rem;
    line-height: 1.5;
    text-align: center;
  }
}

.show-count {
  font-weight: 300;
  font-size: 1.4rem;
  line-height: 2rem;

  // When it is time to move the count
  @media all and (max-width: 900px) {
    position: absolute;
    bottom: -40px;
    right: 0;
    width: 100%;
    padding: 0 $ws-xl;
    text-align: right;
  }

  // Mobile view - smallest
  @media all and (max-width: $mobile-breakpoint) {
    text-align: center;
  }
}

$underline-gradient: linear-gradient(to right, $purple-20 0%, $ocean-20 100%);

.about-link {
  display: none;
  text-align: center;
  color: $purple-dark;
  font-weight: 400;
  text-decoration: none;
  padding: 6px 0.8rem;
  margin: 0 -0.8rem;
  background-image: $underline-gradient;
  background-position: bottom 2px right 0.8rem;
  background-size: calc(100% - 1.6rem) 2px;
  background-repeat: no-repeat;
  border-radius: 3px;

  transition: color 0.15s ease-in-out, background-size 0.15s ease-in-out,
    background-position 0.15s ease-in-out;

  @media all and (max-width: $desktop-breakpoint) {
    display: block;
  }

  &:hover {
    color: $dark-mode-90;
    background-position: bottom right 0px;
    background-size: 100% 100%;
  }
}
</style>
