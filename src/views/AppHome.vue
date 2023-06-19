<template>
  <div id="home">
<!--     <img class="logo" src="../assets/images/logo.svg" alt="logo" /> -->

    <table v-if="isReady">
      <tr> 
        <td>Номер</td> 
        <td>ВРУ</td> 
        <td>Участок</td> 
        <td>Владелец</td> 
      </tr>
      <tr v-for="counter in counters">
        <td> {{ counter.number }} </td>
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