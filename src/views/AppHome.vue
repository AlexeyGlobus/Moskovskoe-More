<template>
  <div id="home">
  <!--     <img class="logo" src="../assets/images/logo.svg" alt="logo" /> -->
    <v-table v-if="isReady">
      <thead>
        <tr>
          <th class="text-left">
            Номер
          </th>
          <th class="text-left">
            ВРУ
          </th>
          <th class="text-left">
            Участок
          </th>
          <th class="text-left">
            Владелец
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="counter in filteredCounters"
          :key="counter.number"
        >
          <td>
          <router-link :to="'/counters/' + counter.id"> {{ counter.number }} </router-link>
        </td>
<!--           <td> {{ counter.number }}  ( {{ counter.id }}  )</td> -->
          <td> {{ counter.rack }} </td>
          <td> {{ counter.place }} </td>
          <td> {{ counter.owner }} </td>
        </tr>
      </tbody>
    </v-table>
  </div>
</template>

<script>
  const CountersList = require('../assets/data/list.json');
  export default {
    props: ['keyword'],
    components: {
    },
    data: function () {
      return {
      }
    },
    mounted() {
    },
    methods: {
    },
    computed: {
      isReady() {
        return !_.isEmpty(this.counters);
      },
      counters() {
        return CountersList;
      },
      filteredCounters() {
        return CountersList.filter(counter => {
          return counter.number.indexOf(this.keyword) !== -1 || 
          counter.owner.indexOf(this.keyword) !== -1 ||
          counter.rack.indexOf(this.keyword) !== -1;
        });
      }
    }
  }
</script>