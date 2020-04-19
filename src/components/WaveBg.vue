<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    width="903"
    height="260.438"
    viewBox="0 0 903 260.438"
    :class="`type-${type && type.replace(/\s+/g, '-')}`"
  >
    <defs>
      <linearGradient id="a" x1="0" y1="0" x2="1" y2="0.6" gradientUnits="objectBoundingBox">
        <stop class="gradient-dark" offset="0" stop-color="#e91e64" stop-opacity="0.6" />
        <stop class="gradient-light" offset="1" stop-color="#e91e64" stop-opacity="0.2" />
      </linearGradient>
    </defs>
    <path
      d="M0,192.425S81.16,145.1,214.809,138.048s231.988,61.9,377.157,90.938S903,199.142,903,199.142v198.84H0Z"
      transform="translate(903 397.983) rotate(180)"
      fill="url(#a)"
    />
  </svg>
</template>

<script>
export default {
  name: "WaveBg",
  props: {
    type: String
  }
};
</script>


<style lang="scss" scoped>
@import "../styles/vars.scss";

svg {
  width: 100%;
  height: auto;
  border-radius: 20px 20px 0 0;
}

.type-Flexibility {
  .gradient-dark,
  .gradient-light {
    stop-color: $turquoise-dark;
  }
}

.type-Strength {
  .gradient-dark,
  .gradient-light {
    stop-color: $orange-dark;
  }
}

.type-Spins-on-static {
  .gradient-dark,
  .gradient-light {
    stop-color: $pink-dark;
  }
}

.type-Spins-on-spinning {
  .gradient-dark,
  .gradient-light {
    stop-color: $purple-dark;
  }
}
</style>