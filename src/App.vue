<template>
  <v-card>
    <v-layout>
      <v-app-bar color="primary" prominent>
        <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

        <v-spacer></v-spacer>

        <v-btn variant="text" icon="mdi-magnify"></v-btn>

        <v-btn variant="text" icon="mdi-filter"></v-btn>

        <v-btn variant="text" icon="mdi-dots-vertical"></v-btn>
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


      <div class="nav">
          <router-link to="/">Home</router-link>|
          <router-link to="/another/22">Another page ID=22</router-link>
      </div>

      <v-main>
        <v-card-text>
          <router-view></router-view>
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
        items: [
          {
            title: 'Home',
            url: '/',
          },
          {
            title: 'Another page ID=22',
            url: '/another/22',
          }
      ]
    }
  },
}
</script>
