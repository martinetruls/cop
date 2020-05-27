import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

Vue.filter("capitalize", function(value) {
  if (!value) return "";
  value = value.toString();
  return value.charAt(0).toUpperCase() + value.slice(1);
});

Vue.filter("dashedType", function(value) {
  return value ? `type-${value.toLowerCase().replace(/\s+/g, "-")}` : "type";
});

Vue.filter("techValueFormat", function(value) {
  return value.toFixed(1).toString();
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
