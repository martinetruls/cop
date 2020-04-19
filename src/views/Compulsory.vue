<template>
  <div class="compulsory-page">
    <router-link to="/" class="backdrop"></router-link>
    <div class="modal">
      <WaveBg :type="compulsory.type" />
      <div class="content-wrapper">
        <img :src="require(`../assets/${compulsory.id}.png`)" />
        <div class="modal-header">
          <div class="id">{{ compulsory.techValue.toFixed(1).toString() }}</div>
          <div>{{ compulsory.type}}</div>
        </div>

        <h2>{{ compulsory.name }}</h2>
      </div>
    </div>
  </div>
</template>

<script>
import WaveBg from "../components/WaveBg";

export default {
  name: "Compulsory",
  components: { WaveBg },
  props: {
    id: String,
    compulsory: Object
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/vars.scss";

.compulsory-page {
  z-index: 1000;
  position: fixed;
  width: 100vw;
  height: 100vh;
}

.modal {
  background-color: $grey-10;
  border-radius: 20px;
  position: absolute;
  top: 50px;
  left: 50%;
  transform: translateX(-50%);
  width: 600px;
  height: 500px;
}

.content-wrapper {
  margin-top: -160px;
  padding: $ws-xl;
  display: flex;
}

.modal-header {
  display: flex;
}

img {
  border-radius: 10px;
  height: 180px;
  width: 180px;
  box-shadow: $shadow-darker;
  margin-right: $ws-m;
}

.id {
  border-radius: 50%;
  background-image: linear-gradient(
    to right bottom,
    $ocean-20 0%,
    $purple-20 100%
  );
  text-transform: uppercase;
  text-align: center;
  font-size: 1.8rem;
  letter-spacing: 0.8px;
  font-weight: 600;
  line-height: 3em;
  height: 3em;
  width: 3em;
  margin-left: -$ws-l;
  margin-top: $ws-l;
}

h2 {
  font-family: "Lato";
  text-align: left;
  font-weight: 400;
  font-size: 2.4rem;
  margin-top: 1rem;
}

.backdrop {
  background-color: rgba(27, 28, 40, 0.8);
  position: absolute;
  width: 100%;
  height: 100%;
}
</style>