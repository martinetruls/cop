<template>
  <!-- <router-link :to="`/compulsories/${compulsory.id}`"> -->
  <router-link :to="{name: 'Compulsory', params:{ id: compulsory.id, compulsory: compulsory } }">
    <div class="card">
      <div class="img-wrapper">
        <img :src="require(`../assets/${compulsory.id}.png`)" />
      </div>
      <div class="text-wrapper">
        <div class="info-row">
          <div class="id">{{ compulsory.id }}</div>

          <div class="right-side">
            <Tag :label="compulsory.type" :type="compulsory.type" />
            <Tag :label="compulsory.techValue.toFixed(1).toString()" />
          </div>
        </div>
        <h2>{{ compulsory.name }}</h2>
      </div>
    </div>
  </router-link>
</template>

<script>
import Tag from "./Tag";

export default {
  name: "CompulsoryCard",
  components: { Tag },
  props: {
    compulsory: Object
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/vars.scss";

a {
  text-decoration: none;
  color: $dark;
}

.card {
  padding: $ws-m;
  box-sizing: border-box;
  background-color: white;
  box-shadow: $shadow-darker;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.text-wrapper {
  margin: -$ws-m;
  margin-top: 1rem;
  padding: $ws-m;
  padding-top: $ws-s;
  background-color: $grey-10;
  border-radius: 0 0 4px 4px;
  border-top: 1px solid $grey-15;
  flex-grow: 1;
}

.info-row {
  display: flex;
  justify-content: space-between;
  padding: $ws-s 0;
  align-items: center;
}

.right-side {
  display: flex;
}

.right-side div + div {
  margin-left: $ws-s;
}

.id {
  text-transform: uppercase;
  font-weight: 700;
  margin-right: $ws-s;
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
}

h2 {
  font-family: "Lato";
  text-align: left;
  font-weight: 400;
}
</style>
