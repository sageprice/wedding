<template>
  <div id="app">
    <Header />
    <p>
      If you're here, ideally you have been invited to our wedding. If you've
      found this by some other means, please appreciate the majesty of Mollycat.
    </p>
    <img src="../../assets/GRACE.jpg" title="fearful leader" width="40%" />
    <p>
      We're getting married! Please join us on September 19, 2020 to celebrate!
    </p>
    <p>
      Mollycat will not be officiating.
    </p>
    <br />
    <br />
    <br />
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
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#app:last-child {
  margin-bottom: 200px;
}
p {
  font-family: garamond-premier-pro-display;
  font-size: 20px;
  margin-left: 30%;
  margin-right: 30%;
}
</style>
