<template>
  <div id="home">
    <img class="logo" src="../assets/images/logo.svg" alt="logo" />

    <h1>Hello Московское море!</h1>
    <table v-if="isReady">
      <tr> 
        <td>ВРУ</td> 
        <td>Участок</td> 
        <td>Владелец</td> 
      </tr>
      <tr v-for="counter in counters">
        <td> {{ counter.rack }} </td>
        <td> {{ counter.place }} </td>
        <td> {{ counter.owner }} </td>
      </tr>
    </table>
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
      console.log(this.counters)
    },
    methods: {
    },
    computed: {
      isReady() {
        return !_.isEmpty(this.counters);
      },
      counters() {
        return CountersList;
      }
    }
  }
</script>