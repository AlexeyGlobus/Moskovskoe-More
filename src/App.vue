<template>
  <v-card>
    <v-layout style="min-height: 99vh">
      <v-app-bar color="primary" prominent>
        <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

        <v-text-field
          style="min-width: 100px; max-width: 90%;"
          class="flex-grow-1 flex-shrink-0"
          density="compact"
          variant="solo"
          label="Поиск"
          append-inner-icon="mdi-magnify"
          single-line
          hide-details
          v-model="keyword"
        >
        </v-text-field>
        
      </v-app-bar>

      <v-navigation-drawer
        v-model="drawer"
        location="start"
        temporary
      >
        <v-list>
          <v-list-item
            v-for="item of items"
            :key="item.title"
            :to="item.url"
            @click.prevent=""
            exact
          >
            <router-link :to="item.url"> {{ item.title }} </router-link>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-main>
        <v-card-text>
          <router-view :keyword="keyword"></router-view>
        </v-card-text>
      </v-main>
    </v-layout>
  </v-card>
</template>

<script>

export default {
  name: 'App',

  data: () => {
    return {
      drawer: false,
      keyword: '',
        items: [
          {
            title: 'Home',
            url: '/',
          },
          {
            title: 'Another page',
            url: '/counters/22',
          }
      ]
    }
  }
}
</script>
