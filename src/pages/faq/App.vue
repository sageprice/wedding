<template>
  <div id="app">
    <Header />
    <h3>WHERE TO STAY</h3>
    <p>
      If you want to stay right on site, we've booked a block of 10 rooms at the
      Endicott House itself, and 10 in the adjacent Brooks Center. To book, use
      <a href="https://mitendicotthouse.org/?p=15279">this link</a> with the
      password "LP Wedding" (note, there is a space between those words). Please
      let us know if you're interested!
    </p>
    <p>
      You're also welcome to stay anywhere else in Boston! We're still figuring
      out the story on shuttles to/from Endicott House, check back later. For
      reference, the Endicott House is about a 25 minute drive from South
      Station, and there are a number of hotels in Dedham itself, about a 5-10
      minute drive away.
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
  font-family: "Playfair Display", serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
#app:last-child {
  margin-bottom: 200px;
}
h3 {
  font-family: "Helvetica";
  font-weight: normal;
  color: #084009;
}
p {
  font-size: 20px;
  margin-left: 30%;
  margin-right: 30%;
}
</style>
