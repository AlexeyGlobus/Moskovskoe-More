<template>
  <div id="home">
    <img class="logo" src="../assets/images/logo.svg" alt="logo" />

    <h1>Hello Московское море!</h1>
  </div>
</template>

<script>
  const CountersList = require('../assets/data/list.json');
  export default {
    components: {
    },
    data: function () {
      return {
      }
    },
    mounted() {
      console.log(_.isEmpty(CountersList))
    },
    methods: {
    }
  }
</script>