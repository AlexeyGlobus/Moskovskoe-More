import { createApp } from 'vue'

// Router
import * as VueRouter from 'vue-router';
import router from './routes.js';

// Lodash
import _ from 'lodash';

// App
import App from './App.vue'

import { loadFonts } from './plugins/webfontloader'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
})

loadFonts()

createApp(App)
  .use(router)
  .use(vuetify)
  .mount('#app')
