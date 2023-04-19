<template>
  <router-view />
</template>

<script>
export default { 
  name: "app",
  mounted() {
    this.$nextTick(() => {
      let link = document.createElement("link");
      link.type = "text/css";
      link.id = "theme";
      link.rel = "stylesheet";
      link.href = "./theme_red.css";
      console.log(link);
      document.getElementsByTagName("head")[0].appendChild(link);

      // document.getElementById('app').setAttribute('class', 'theme_red');
    });
  },
};
</script>

<style lang="scss">
:root {
  --theme_bg_color: #eb6161;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
