<template>
  <div class="card-wrapper">
    <Heart
      :isSelected="isSelected"
      :id="compulsory.id"
      @update-favorites="$emit('update-favorites')"
    />
    <router-link
      :to="{ name: 'CompulsoryPage', params: { id: compulsory.id } }"
    >
      <div class="card">
        <div class="img-wrapper">
          <img
            :src="
              require(`../assets/compulsory-illustrations/${compulsory.id}.png`)
            "
            :alt="compulsory.name"
          />
        </div>
        <div class="text-wrapper">
          <div class="id">{{ compulsory.id }}</div>

          <Tag class="type" :label="compulsory.type" :type="compulsory.type" />
          <Tag class="value" :label="compulsory.techValue | techValueFormat" />

          <h2>{{ compulsory.name | capitalize }}</h2>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
import Tag from "./_shared/Tag";
import Heart from "./_shared/Heart";

export default {
  name: "CompulsoryCard",
  components: { Tag, Heart },
  props: {
    compulsory: Object,
    isSelected: Boolean,
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/vars.scss";

$card-border-radius: 4px;

.card-wrapper {
  position: relative;
}

.card {
  padding: $ws-m;
  box-sizing: border-box;
  background-color: white;
  box-shadow: $shadow-darker;
  border-radius: $card-border-radius;
  display: flex;
  flex-direction: column;
}

a {
  text-decoration: none;
  color: $dark;
}

.text-wrapper {
  margin: -$ws-m;
  margin-top: 1rem;
  padding: $ws-m;
  padding-top: $ws-s;
  background-color: $grey-10;
  border-radius: 0 0 $card-border-radius $card-border-radius;
  border-top: 1px solid $grey-15;
  flex-grow: 1;
  display: grid;
  grid-template-columns: min-content auto min-content;
  grid-template-rows: min-content auto;
  gap: $ws-s;
}

.id {
  text-transform: uppercase;
  letter-spacing: 1px;
  align-self: center;
}

.type {
  justify-self: end;
}

.value {
  align-self: center;
  justify-self: end;
}

.img-wrapper {
  width: 100%;
  height: 150px;
  position: relative;
  text-align: center;
}

img {
  object-fit: contain;
  max-height: 100%;
  max-width: 100%;
}

h2 {
  grid-area: 2 / 1 / 3 / 4; // Full bottom row
  text-align: left;
  font-weight: 600;
  font-size: 1.6rem;
}

@media all and (max-width: $mobile-breakpoint) {
  .card {
    padding: $ws-s;
    position: relative;
  }

  .img-wrapper {
    height: 130px;
    padding: $ws-s 0 $ws-m;
  }

  .text-wrapper {
    margin: -$ws-s;
    padding: 12px;
    margin-top: 0;

    grid-template-columns: auto min-content;
    grid-template-rows: min-content auto;
    grid-gap: $ws-s;
  }

  .id {
    font-size: 1.4rem;
    position: absolute;
    top: 10px;
    left: 12px;
    background-color: rgba(255, 255, 255, 0.9);
    box-shadow: 0 0 4px 4px rgba(255, 255, 255, 0.9);
  }

  .type {
    justify-self: start;
  }

  h2 {
    font-size: 1.4rem;
    grid-area: 2 / 1 / 3 /3; // Full bottom row
    font-weight: 600;
  }
}
</style>
