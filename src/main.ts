import { createApp } from 'vue'
import App from './App.vue'

import '@unocss/reset/tailwind.css'
import './styles/main.css'
import 'uno.css'

if (typeof window !== 'undefined')
  import('./pwa')

const app = createApp(App)
app.mount('#app')
