import { createApp } from 'vue'
// import ElementPlus from 'element-plus'
// import '../node_modules/element-plus/dist/index.css'
import App from './App.vue'
import './index.css'

import router from './route/router'

const app=createApp(App)

app.use(router)
// .use(ElementPlus)

app.mount('#app')