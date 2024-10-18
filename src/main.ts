import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'
import Lara from '@primevue/themes/Lara'
import 'primeicons/primeicons.css'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'
import { VueFire, VueFireAuth } from 'vuefire'
import { app as firebaseApp } from '@/firebase'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue, {
  theme: {
    preset: Lara,
    options: {
      cssLayer: false,
    },
  },
})
app.use(autoAnimatePlugin)
app.use(VueFire, {
  // imported above but could also just be created here
  firebaseApp,
  modules: [
    // we will see other modules later on
    VueFireAuth(),
  ],
})

app.mount('#app')
