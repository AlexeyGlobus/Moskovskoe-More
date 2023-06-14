import * as Vue from 'vue';

// Router
import * as VueRouter from 'vue-router';
import router from './routes.js';

//  App
import App from './App.vue';

Vue.createApp(App)
    .use(router)
    .mount('#app');