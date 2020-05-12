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
      <div class="modal-header">
        <img :src="require(`../assets/${compulsory.id}.png`)" />

        <div class="id-and-type">
          <div class="id">{{compulsory.id}}</div>
          <!-- <div class="type">{{ compulsory.type}}</div> -->
          <Tag class="type" :label="compulsory.type" :type="compulsory.type" />
        </div>

        <h2>{{ compulsory.name }}</h2>
        <div class="value">Technical value: {{ compulsory.techValue.toFixed(1).toString() }}</div>
      </div>
      <div class="spec-list">
        <div>
          <section v-if="compulsory.criteria.grip">
            <h3>Grip:</h3>
            <p>{{compulsory.criteria.grip}}</p>
          </section>

          <section>
            <h3>{{`Arm${compulsory.criteria.grip ? '' : '/grip'} position:`}}</h3>
            <p>{{compulsory.criteria.armPosition}}</p>
          </section>

          <section>
            <h3>Leg position:</h3>
            <p>{{compulsory.criteria.legPosition}}</p>
          </section>

          <section>
            <h3>Body position:</h3>
            <p>{{compulsory.criteria.bodyPosition}}</p>
          </section>
        </div>

        <div>
          <section>
            <h3>Hold the position:</h3>
            <p>{{compulsory.criteria.holdPosition}}</p>
          </section>

          <section v-if="compulsory.criteria.splitAngle">
            <h3>Split angle:</h3>
            <p>{{compulsory.criteria.splitAngle}}</p>
          </section>

          <section>
            <h3>Points of contact:</h3>
            <ul>
              <li
                v-for="(contactPoint, key) in compulsory.criteria.pointsOfContact"
                :key="key"
              >{{ contactPoint }}</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Tag from "../components/Tag";
export default {
  name: "Compulsory",
  components: { Tag },
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
  min-height: 500px;
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

  transition: background-color 0.2s ease-in-out;

  path {
    fill: $darker;
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.3);
  }
}

.modal-header {
  display: grid;
  grid-template-columns: min-content auto;
  grid-template-rows: calc(100px - #{$ws-xl}) min-content 1fr;
  column-gap: 3.2rem;
}

img {
  grid-area: 1 / 1 / 4 / 2;
  border-radius: 10px;
  width: 18rem;
  height: 18rem;
  object-fit: cover;
  flex-shrink: 0;
  box-shadow: $shadow-darker;
}

.id-and-type {
  grid-area: 1/2/2/3;
  display: flex;
  align-items: center;
}

.id {
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 400;
  font-size: 2.2rem;
  margin-right: $ws-m;
  color: $darker;
}

.type {
  padding: 0 1rem;
  font-size: 1.4rem;
  line-height: 2.8rem;
  border-radius: 3px;
}

h2 {
  grid-area: 2/2/3/3;
  font-weight: 700;
  font-size: 2.4rem;
  margin: $ws-m 0 $ws-s;
}

.value {
  grid-area: 3/2/4/3;
  color: $dark-70;
  font-weight: 400;
}

.spec-list {
  padding-top: $ws-xl;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: $ws-xl;

  section {
    padding-bottom: $ws-l;

    p {
      font-weight: 300;
      line-height: 2.2rem;
    }
  }
}

ul {
  font-weight: 300;
  line-height: 2.2rem;
  list-style-position: inside;
  padding-left: 4px;
}

h3 {
  font-weight: 600;
  font-size: 1.6rem;
  margin-bottom: 4px;
}

.backdrop {
  background-color: rgba(27, 28, 40, 0.8);
  position: absolute;
  width: 100%;
  height: 100%;
}

@media all and (max-width: 600px) {
  .modal {
    border-radius: 0;
    top: 0;
    min-height: 100vh;

    &:before {
      border-radius: 0;
    }
  }
}
</style>