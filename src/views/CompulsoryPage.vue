<template>
  <Modal>
    <div class="decorations" :class="compulsory.type | dashedType" />
    <div class="modal-header">
      <div class="img-wrapper">
        <img :src="require(`../assets/compulsory-illustrations/${compulsory.id}.png`)" />
      </div>

      <div class="id-and-name">
        <div class="id">{{compulsory.id}}</div>
        <h2>{{ compulsory.name }}</h2>
      </div>

      <div class="type-and-value">
        <Tag class="type" :label="compulsory.type" :type="compulsory.type" />
        <div class="value">Technical value: {{ compulsory.techValue | techValueFormat }}</div>
      </div>
    </div>
    <CriteriaList :criteria="compulsory.criteria" />
  </Modal>
</template>

<script>
import Modal from "../components/_shared/Modal";
import CriteriaList from "../components/CriteriaList";
import Tag from "../components/_shared/Tag";
import Data from "../data/compulsories.json";

export default {
  name: "Compulsory",
  components: { Modal, CriteriaList, Tag },
  props: {
    id: String
  },
  data() {
    return {
      compulsory: Data.compulsories.find(comp => comp.id === this.id)
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/vars.scss";

.modal-header {
  display: grid;
  grid-template-columns: min-content auto;
  grid-template-rows: calc(200px - 30px - #{$ws-xxl}) min-content 1fr;
  column-gap: $ws-m;
}

.decorations {
  margin: -$ws-xxl;
  margin-bottom: calc(-200px + #{$ws-xxl});
  height: 200px;
  border-radius: 20px 20px 0 0;
  position: relative;
  z-index: -1;

  @media all and (max-width: 600px) {
    border-radius: 0;
    height: 140px;
  }
}

.decorations:after {
  content: "";
  position: absolute;
  bottom: 30px;
  right: 0;
  background-image: url("../assets/visual-elements/white-corner.svg");
  width: 30px;
  height: 30px;
}

.decorations:before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 30px;
  border-radius: 30px 0 0 0;
  background-color: white;
}

.decorations.type-flexibility {
  background-image: linear-gradient(145deg, $turquoise-60 0%, $purple-20 120%);
}

.decorations.type-strength {
  background-image: linear-gradient(145deg, $orange-60 0%, $pink-40 120%);
}

.decorations.type-spins-on-static {
  background-image: linear-gradient(145deg, $pink-60 0%, $yellow 140%);
}

.decorations.type-spins-on-spinning {
  background-image: linear-gradient(
    145deg,
    $purple-60 0%,
    $turquoise-light 120%
  );
}

.img-wrapper {
  grid-area: 1 / 1 / 3 / 2;
  border-radius: 10px;
  padding: $ws-s;
  box-shadow: $image-shadow;
  background-color: white;
  text-align: center;
}

img {
  object-fit: contain;
  width: 15.5rem;
  height: 15.5rem;
}

.id-and-name {
  grid-area: 1/2/2/3;
  align-self: end;
}

.type-and-value {
  grid-area: 2/2/3/3;
  display: flex;
  align-items: center;

  div + div {
    margin-left: $ws-m;
  }
}

.id {
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 500;
  font-size: 1.8rem;
  margin-right: $ws-m;
  color: white;
  text-shadow: $text-shadow;
}

.type {
  padding: 0 1rem;
  font-size: 1.2rem;
  line-height: 2.6rem;
  border-radius: 3px;
}

h2 {
  font-weight: 600;
  font-size: 2.4rem;
  margin: $ws-s 0 $ws-m;
  color: white;
  letter-spacing: 0.5px;
  text-shadow: $text-shadow;
}

.value {
  color: $dark-70;
  font-weight: 400;
  font-size: 1.6rem;
}

@media all and (max-width: 640px) {
  .decorations {
    height: 240px;
    margin: -$ws-xl;
    margin-bottom: calc(-220px + #{$ws-xxl});
    border-radius: 0;
  }

  .modal-header {
    display: block;
  }

  .id {
    position: absolute;
    top: $ws-xl;
    left: $ws-xl;
    color: $darker;
    text-shadow: none;
    font-weight: 600;
    font-size: 2.2rem;
  }

  .img-wrapper {
    margin: auto;
    width: min-content;
  }

  h2 {
    color: $dark;
    text-shadow: none;
    text-align: center;
    margin: $ws-l $ws-s $ws-m;
  }

  .type-and-value {
    flex-direction: column-reverse;

    div + div {
      margin-left: 0;
    }
  }

  .type {
    margin-top: $ws-m;
  }
}
</style>