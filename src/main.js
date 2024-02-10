import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import fontAwesome from './plugins/font-awesome'
import vuetify from './plugins/vuetify'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(fontAwesome)
app.use(vuetify)

app.mount('#app')
