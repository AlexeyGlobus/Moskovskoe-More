<template>
  <div id="app">
    <div class="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/another/22">Another page ID=22</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  components: {
  },
  data: function () {
    return {
    }
  },
  mounted() {
  },
  methods: {
  }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap");

:root {
  --font: Roboto, sans-serif;
  --textColor: #374961;
  --linkActiveColor: #41b783;
}

#app {
  font-family: var(--font);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--textColor);
}

.logo {
  width: 20%;
}

a {
  font-weight: 500;
  color: var(--textColor);
  margin: 0 5px;
}

a.router-link-exact-active {
  color: var(--linkActiveColor);
}
</style>
