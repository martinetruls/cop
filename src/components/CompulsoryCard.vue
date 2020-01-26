<template>
  <div class="card">
    <div class="img-wrapper">
      <img :src="require(`../assets/${compulsory.id}.png`)" />
    </div>

    <div class="info-row">
      <div class="id">{{ compulsory.id}}</div>

      <div class="right-side">
        <Tag v-bind:label="compulsory.type" v-bind:type="compulsory.type" />
        <Tag v-bind:label="compulsory.techValue.toString()" />
      </div>
    </div>
    <h2>{{ compulsory.name }}</h2>
  </div>
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

<style scoped>
.card {
  padding: 1rem;
  margin: 1rem;
  box-sizing: border-box;
  background-color: white;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  border-radius: 2px;
}

.info-row {
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0;
  align-items: center;
}

.right-side {
  display: flex;
}

.right-side div + div {
  margin-left: 0.5rem;
}

.id {
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 700;
  margin-right: 0.5rem;
}

.img-wrapper {
  width: 100%;
  height: 150px;
  border: 1px solid rgba(77, 73, 94, 0.15);
  position: relative;
}

img {
  object-fit: contain;
  max-height: 100%;
}

h2 {
  text-align: left;
}
</style>