<template>
  <span class="heart">
    <button v-if="!isSelected" @click="addFavorite()">
      <span class="visually-hidden">Add {{ id }} as favorite</span>
      <i class="material-icons" aria-hidden="true">favorite_border</i>
    </button>
    <button v-if="isSelected" @click="removeFavorite()">
      <span class="visually-hidden">Remove {{ id }} as favorite</span>
      <i class="material-icons" aria-hidden="true">favorite</i>
    </button>
  </span>
</template>

<script>
export default {
  name: "Heart",
  props: { isSelected: Boolean, id: String },
  methods: {
    removeFavorite() {
      let favorites = JSON.parse(localStorage.getItem("favorites"));
      favorites = favorites.filter((id) => id !== this.id);
      localStorage.setItem("favorites", JSON.stringify(favorites));
      this.$emit("update-favorites");
    },
    addFavorite() {
      const currentState = JSON.parse(localStorage.getItem("favorites"));
      let favorites = currentState !== null ? currentState : [];
      favorites.push(this.id);
      localStorage.setItem("favorites", JSON.stringify(favorites));
      this.$emit("update-favorites");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../styles/vars.scss";

.heart {
  position: absolute;
  top: 0;
  right: 0;
}

.heart button {
  color: $darker;
  background-color: transparent;
  border: none;
  padding: 11px;

  .material-icons {
    font-size: 16px;
  }

  &:focus {
    outline: none;
    box-shadow: $focus;
  }
}

// when user is using mouse / touch
.hide-focus .heart button:focus {
  box-shadow: none;
}
</style>
