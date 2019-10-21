<template>
  <div>
    <header id="header" class="upper-logo">
      <div id="upper-logo">
        <a href="/" id="title">SAGE + SONYA</a>
      </div>
      <hr />
      <div id="top-nav">
        <nav class="main-nav">
          <ul id="nav-list">
            <li>
              <a href="/" id="nava">HOME</a>
            </li>
            <li>
              <a href="/deets" id="nava">WEDDING</a>
            </li>
            <li>
              <a href="/faq" id="nava">FAQ</a>
            </li>
            <li>
              <a href="/registry" id="nava">REGISTRY</a>
            </li>
            <li>
              <a href="/rsvp" id="nava">RSVP</a>
            </li>
          </ul>
        </nav>
      </div>
      <hr />
    </header>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Header",
  components: {}
});
</script>

<style scoped>
header {
  padding: 1.5rem;
}
#main-nav {
  display: table;
  width: 100%;
  list-style: none;
}
#title {
  color: #084009;
  cursor: pointer;
  font-family: "Playfair Display", serif;
  font-size: 60px;
  line-height: 1.2em;
  text-decoration: none;
}
#nav-list {
  text-align: center;
  padding-inline-start: 0px;
}
#nav-list li {
  display: inline-block;
}
#nava {
  /* color: rgba(28, 28, 28, 0.8); */
  color: #084009;
  font-family: "Helvetica";
  text-decoration: none;
  font-size: 1.17em;
  margin: 5em;
}
#nav-list:first-child {
  color: rgba(28, 28, 28, 0.8);
  text-decoration: none;
  font-size: 12px;
}
hr {
  border-color: #c1dbc1;
  width: 60%;
}
</style>
