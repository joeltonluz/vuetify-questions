/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from './plugins'

// Components
import App from './App.vue'
import router from './router'
import { store } from './store'

// Composables
import { createApp } from 'vue'

const app = createApp(App)

app.use(router)
app.use(store)

registerPlugins(app)

app.mount('#app')
