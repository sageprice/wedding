<template>
  <div>
    <header id="header" class="upper-logo">
      <div id="upper-logo">
        <a href="/" id="title">Sonya & Sage</a>
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
  color: #1c1c1c;
  cursor: pointer;
  font-family: garamond-premier-pro-display;
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
  color: rgba(28, 28, 28, 0.8);
  text-decoration: none;
  font-size: 12px;
  margin: 16px;
}
#nav-list:first-child {
  color: rgba(28, 28, 28, 0.8);
  text-decoration: none;
  font-size: 12px;
}
hr {
  width: 60%;
}
</style>
