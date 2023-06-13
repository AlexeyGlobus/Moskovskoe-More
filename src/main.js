import * as Vue from 'vue';

// Router
import * as VueRouter from 'vue-router';
import router from './routes.js';

Vue.createApp(App)
    .use(router)
    .mount('#app');