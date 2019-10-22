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
            <!-- Note: router-link is rendered as an <a> element -->
            <router-link to="/">HOME</router-link>
            <router-link to="/deets">WEDDING</router-link>
            <router-link to="/faq">FAQ</router-link>
            <router-link to="/registry">REGISTRY</router-link>
            <router-link to="/rsvp">RSVP</router-link>
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
  name: "Header"
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
a {
  color: #084009;
  font-family: "Helvetica";
  text-decoration: none;
  font-size: 1.17em;
  margin: 5em;
}
a:hover {
  color: #c1dbc1;
}
.router-link-exact-active {
  font-weight: bold;
}
hr {
  border-color: #c1dbc1;
  width: 60%;
}
</style>
