import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue'
import VTooltip from 'v-tooltip'
// import 'ant-design-vue/dist/antd.css'
const app = createApp(App)

app.use(Antd, VTooltip)
app.mount('#app')
