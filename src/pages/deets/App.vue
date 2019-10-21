<template>
  <div id="app">
    <Header />
    <h3>WHO</h3>
    <p>
      Us! Also hopefully you!
    </p>
    <br />
    <h3>WHAT</h3>
    <p>
      A wedding! Followed by dinner and a reception.
    </p>
    <br />
    <h3>WHEN</h3>
    <p>
      September 19, 2020. Ceremony will take place at 4:30 PM, with reception to
      follow.
    </p>
    <br />
    <h3>WHERE</h3>
    <p>
      The ceremony, dinner, and reception will take place at the MIT Endicott
      House, in Dedham, MA (right outside of Boston).
    </p>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d140467.64723413566!2d-71.11180482678029!3d42.33612020496984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e37f8779b4942b%3A0x2cb28e8b915e7c52!2sMIT%20Endicott%20House!5e0!3m2!1sen!2sus!4v1571618119251!5m2!1sen!2sus"
      width="400"
      height="300"
      frameborder="0"
      style="border:0;"
      allowfullscreen=""
    >
    </iframe>
    <br />
    <h3>WHY</h3>
    <p>
      We've been together a long time and we like each other a lot. Throwing a
      party seemed like a good thing to do.
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
  color: #262b26;
  font-size: 20px;
  margin-left: 30%;
  margin-right: 30%;
}
</style>
