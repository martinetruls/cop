<template>
  <Modal>
    <div class="modal-header" :class="compulsory.type | dashedType">
      <div class="img-wrapper">
        <img :src="require(`../assets/${compulsory.id}.png`)" />
      </div>

      <div class="id-and-type">
        <div class="id">{{compulsory.id}}</div>
        <Tag class="type" :label="compulsory.type" :type="compulsory.type" />
      </div>

      <h2>{{ compulsory.name }}</h2>
      <div class="value">Technical value: {{ compulsory.techValue }}</div>
    </div>
    <CriteriaList :criteria="compulsory.criteria" />
  </Modal>
</template>

<script>
import Modal from "../components/_shared/Modal";
import CriteriaList from "../components/CriteriaList";
import Tag from "../components/_shared/Tag";

export default {
  name: "Compulsory",
  components: { Modal, CriteriaList, Tag },
  props: {
    id: String,
    compulsory: Object
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/vars.scss";

.modal-header {
  display: grid;
  grid-template-columns: min-content auto;
  grid-template-rows: calc(100px - #{$ws-xl}) min-content 1fr;
  column-gap: 3.2rem;
}

.modal-header:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100px;
  border-radius: 20px 20px 0 0;

  @media all and (max-width: 600px) {
    border-radius: 0;
    height: 140px;
  }
}

.type-flexibility:before {
  background-image: linear-gradient(
    to right bottom,
    rgba(0, 137, 151, 0.2) 0%,
    rgba(0, 137, 151, 0.6) 100%
  );
}

.type-strength:before {
  background-image: linear-gradient(
    to right bottom,
    $orange-o2 0%,
    $orange-o6 100%
  );
}

.type-spins-on-static:before {
  background-image: linear-gradient(
    to right bottom,
    rgba(233, 30, 100, 0.2) 0%,
    rgba(0233, 30, 100, 0.6) 100%
  );
}

.type-spins-on-spinning:before {
  background-image: linear-gradient(
    to right bottom,
    $purple-o2 0%,
    $purple-o6 100%
  );
}

.img-wrapper {
  grid-area: 1 / 1 / 4 / 2;
  border-radius: 10px;
  padding: $ws-s;
  box-shadow: $shadow-darker;
  background-color: white;
  text-align: center;
}

img {
  object-fit: cover;
  width: 18rem;
  height: 16rem;
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

@media all and (max-width: 600px) {
  .modal-header {
    grid-template-columns: 1fr;
    grid-template-rows: min-content min-content min-content min-content;
  }

  .id-and-type {
    grid-area: 1/1/2/2;
    padding-bottom: $ws-l;
  }

  .img-wrapper {
    grid-area: 2/1/3/2;
    width: 32rem;
    max-width: calc(100vw - #{$ws-xxl});
    margin: auto;
  }

  h2 {
    grid-area: 3/1/4/2;
  }

  .value {
    grid-area: 4/1/5/2;
  }
}
</style>