<template>
  <div class="compulsory-page">
    <router-link to="/" class="backdrop"></router-link>
    <div :class="`modal type-${compulsory.type.replace(/\s+/g, '-')}`">
      <router-link to="/">
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
      </router-link>
      <div class="top-row">
        <img :src="require(`../assets/${compulsory.id}.png`)" />

        <div class="modal-header">
          <div class="id-and-type">
            <div class="id">{{compulsory.id}}</div>
            <div class="type">{{ compulsory.type}}</div>
          </div>

          <h2>{{ compulsory.name }}</h2>
          <div class="value">Technical value: {{ compulsory.techValue.toFixed(1).toString() }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Compulsory",
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
  width: 100vw;
  max-width: 600px;
  height: 500px;
  padding: $ws-xl;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100px;
    border-radius: 20px 20px 0 0;
  }
}

.type-Flexibility:before {
  background-image: linear-gradient(
    to right bottom,
    rgba(0, 137, 151, 0.2) 0%,
    rgba(0, 137, 151, 0.6) 100%
  );
}

.type-Strength:before {
  background-image: linear-gradient(
    to right bottom,
    $orange-o2 0%,
    $orange-o6 100%
  );
}

.type-Spins-on-static:before {
  background-image: linear-gradient(
    to right bottom,
    rgba(233, 30, 100, 0.2) 0%,
    rgba(0233, 30, 100, 0.6) 100%
  );
}

.type-Spins-on-spinning:before {
  background-image: linear-gradient(
    to right bottom,
    $purple-o2 0%,
    $purple-o6 100%
  );
}

.close-x {
  position: absolute;
  top: $ws-s;
  right: $ws-s;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  padding: $ws-m;

  transition: background-color 0.5s ease-in-out;

  path {
    fill: $darker;
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.3);
  }
}

.top-row {
  display: flex;
}

img {
  border-radius: 10px;
  width: 18rem;
  height: 18rem;
  object-fit: cover;
  flex-shrink: 0;
  box-shadow: $shadow-darker;
}

.modal-header {
  padding-left: $ws-l;
}

.id-and-type {
  padding-top: $ws-l;
  display: flex;
  align-items: center;
  margin-bottom: $ws-xl;
}

.id {
  text-transform: uppercase;
  font-weight: 700;
  font-size: 2.4rem;
  margin-right: $ws-m;
}

.type {
  padding: 0 1rem;
  font-weight: 600;
  font-size: 1.4rem;
  line-height: 2.8rem;
  box-shadow: $shadow-std;
  border-radius: 2px;
  background-color: rgba(255, 255, 255, 0.3);
}

h2 {
  font-family: "Lato";
  text-align: left;
  font-weight: 400;
  font-size: 2.4rem;
  color: $darker;
  margin-bottom: $ws-s;
}

.value {
  color: $dark-70;
  font-weight: 400;
}

.backdrop {
  background-color: rgba(27, 28, 40, 0.8);
  position: absolute;
  width: 100%;
  height: 100%;
}
</style>