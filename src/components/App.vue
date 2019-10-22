<template>
  <div id="app">
    <Header />
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  name: "app",
  components: {
    Header
  }
};
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #262b26;
  margin-top: 60px;
}
#app:last-child {
  margin-bottom: 200px;
}
p {
  font-family: "Playfair Display", serif;
  font-size: 20px;
  margin-left: 30%;
  margin-right: 30%;
}
</style>
