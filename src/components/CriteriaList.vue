<template>
  <div>
    <div v-if="criteria.pointsOfContact.length" class="criteria-list">
      <div>
        <section v-if="criteria.grip">
          <h3>Grip:</h3>
          <p>{{criteria.grip}}</p>
        </section>

        <section v-if="criteria.armPosition">
          <h3>{{`Arm${!criteria.grip ? '/grip' : ''} position:`}}</h3>
          <p>{{criteria.armPosition}}</p>
        </section>

        <section>
          <h3>Leg position:</h3>
          <p>{{criteria.legPosition}}</p>
        </section>

        <section>
          <h3>Body position:</h3>
          <p>{{criteria.bodyPosition}}</p>
        </section>
      </div>

      <div>
        <section>
          <h3>Hold the position:</h3>
          <p>{{criteria.holdPosition}}</p>
        </section>

        <section v-if="criteria.spinDirection">
          <h3>Spin direction:</h3>
          <p>{{criteria.spinDirection}}</p>
        </section>

        <section v-if="criteria.splitAngle">
          <h3>Split angle:</h3>
          <p>{{criteria.splitAngle}}</p>
        </section>

        <section>
          <h3>Points of contact:</h3>
          <ul>
            <li
              v-for="(contactPoint, key) in criteria.pointsOfContact"
              :key="key"
            >{{ contactPoint }}</li>
          </ul>
        </section>
      </div>
    </div>

    <!-- Empty state - until all data is added  -->
    <div
      v-if="!criteria.pointsOfContact.length"
      class="missing-criteria"
    >Criterias for this compulsory will be added soon</div>
  </div>
</template>

<script>
export default {
  name: "CriteriaList",
  props: {
    criteria: Object
  }
};
</script>


<style lang="scss" scoped>
@import "../styles/vars.scss";

.criteria-list {
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

  @media all and (max-width: 640px) {
    grid-template-columns: 1fr;
    grid-gap: 0;
  }
}

ul {
  font-weight: 300;
  line-height: 2.2rem;
  list-style-position: inside;
  padding-left: 4px;
}

h3 {
  font-weight: 700;
  font-size: 1.6rem;
  margin-bottom: 4px;
}

.missing-criteria {
  padding: $ws-xxxl 0;
  text-align: center;
  margin: auto;
  color: $dark-70;
  font-weight: 300;
  max-width: 30rem;
}
</style>