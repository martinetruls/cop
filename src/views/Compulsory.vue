<template>
  <div class="compulsory-page">
    <router-link to="/" class="backdrop"></router-link>
    <div class="modal">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="7.675"
        height="7.675"
        viewBox="0 0 7.675 7.675"
        class="close-x"
      >
        <path
          d="M4.98,3.837,7.43,1.388a.789.789,0,0,0,0-1.143.789.789,0,0,0-1.143,0L3.837,2.694,1.388.245a.789.789,0,0,0-1.143,0,.789.789,0,0,0,0,1.143L2.694,3.837.245,6.287a.789.789,0,0,0,0,1.143.789.789,0,0,0,1.143,0L3.837,4.98,6.287,7.43A.808.808,0,0,0,7.43,6.287Z"
          transform="translate(7.675 7.675) rotate(180)"
          fill="black"
        />
      </svg>

      <WaveBg :type="compulsory.type" />
      <div class="content-wrapper">
        <div class="img-wrapper">
          <img :src="require(`../assets/${compulsory.id}.png`)" />
          <div class="id">{{ compulsory.techValue.toFixed(1).toString() }}</div>
        </div>

        <div class="modal-header">
          <h2>{{ compulsory.name }}</h2>
          <!-- <div>{{ compulsory.type}}</div> -->
        </div>
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

.close-x {
  position: absolute;
  top: 22px;
  right: 22px;
  width: 16px;
  height: 16px;

  path {
    fill: $darker;
  }
}

.content-wrapper {
  margin-top: -160px;
  padding: $ws-xl;
  display: flex;
}

.img-wrapper {
  position: relative;
  flex: 0 0 180px;
}

.modal-header {
  padding-left: 6rem;
  height: 6rem;
  display: flex;
  align-items: flex-end;
}

img {
  border-radius: 10px;
  height: 180px;
  width: 180px;
  box-shadow: $shadow-darker;
}

.id {
  position: absolute;
  top: 26px;
  right: -44px;
  border-radius: 50%;
  background-image: linear-gradient(to right bottom, $dark 0%, $dark-90 100%);
  color: white;
  text-transform: uppercase;
  text-align: center;
  font-size: 1.8rem;
  letter-spacing: 0.8px;
  font-weight: 500;
  line-height: 3em;
  height: 3em;
  width: 3em;
  flex: 0 0 3em;
}

h2 {
  font-family: "Lato";
  text-align: left;
  font-weight: 400;
  font-size: 2.4rem;
  color: $darker;
}

.backdrop {
  background-color: rgba(27, 28, 40, 0.8);
  position: absolute;
  width: 100%;
  height: 100%;
}
</style>