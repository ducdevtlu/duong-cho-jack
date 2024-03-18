import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import axios from 'axios'

import router from './router'
// Vuetify
import "vuetify/styles";
import "vuetify/dist/vuetify.min.css";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import SvgIcon from "@jamescoyle/vue-icon";

import "@mdi/font/css/materialdesignicons.css";

import "@/assets/main.css"

window.axios = axios
window.axios.defaults.baseURL =  'https://api.ductran.site/api/'


const vuetify = createVuetify({
    components,
    directives,
    SvgIcon
})

const app = createApp(App)

app.use(createPinia()).use(router).use(vuetify)

app.mount('#app')
