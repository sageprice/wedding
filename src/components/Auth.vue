<template>
  <div id="auth">
    <h2>Password pls</h2>
    <div>Password pls <input v-model="password" /></div>
    <img
      id="believe"
      src="../assets/i-want-to-believe.jpg"
      title="stay woke"
      width="20%"
      v-bind:style="this.isWoke ? 'display:inline' : 'display:none'"
    />
  </div>
</template>

<script>
export default {
  name: "auth",
  data() {
    return { password: "", isWoke: false };
  },
  watch: {
    password(newPw) {
      const pw = newPw.toLowerCase();
      localStorage.pw = pw;
      // lol client-side auth. pls don't hack me
      if (pw === "epsteindidntkillhimself" || pw === "staywoke") {
        this.password = "";
        this.isWoke = true;
      } else if (pw === "mollycat") {
        this.$router.push("/");
      } else if (pw === "ourunion") {
        this.password = "";
        window.open("https://www.youtube.com/watch?v=U06jlgpMtQs");
      }
    }
  }
};
</script>
