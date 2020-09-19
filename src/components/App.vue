<template>
  <div id="app">
    <!-- Every page should have the header. -->
    <Header />

    <!-- Inject page content from router. -->
    <router-view></router-view>

    <!-- I like bottom of page whitespace. -->
    <br />
    <br />
    <br />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import { emojiCursor } from "@/scripts/emojicursor.js";

export default {
  name: "app",
  components: {
    Header
  },
  mounted() {
    if ("swag" in this.$route.query) {
      new emojiCursor();
    }
  }
};
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #262b26;
}
h3 {
  font-family: "Helvetica";
  font-weight: normal;
  color: #084009;
}
p {
  font-family: "Playfair Display", serif;
  font-size: 17px;
  margin-left: 31%;
  margin-right: 31%;
}
</style>
