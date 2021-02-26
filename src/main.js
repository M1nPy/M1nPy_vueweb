import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import * as Sentry from '@sentry/vue'
import { Integrations } from '@sentry/tracing'

Sentry.init({
  Vue,
  dsn:
    'https://800e4a2ccd1b4a3cba7fd5a4e6eed53a@o534280.ingest.sentry.io/5653256',
  integrations: [new Integrations.BrowserTracing()],

  // We recommend adjusting this value in production, or using tracesSampler
  // for finer control
  tracesSampleRate: 1.0
})

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
