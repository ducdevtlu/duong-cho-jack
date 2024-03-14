import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import axios from 'axios'

import router from './router'
// Vuetify
import "vuetify/styles"
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'

import "@/assets/main.css"
window.axios = axios
window.axios.defaults.baseURL =  'https://api.ductran.site/api/'


const vuetify = createVuetify({
    icons: {
        defaultSet: 'mdi',
        aliases,
        sets: {
            mdi,
        },
    },
    components,
    directives,
})

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(vuetify)

app.mount('#app')
