import { createApp } from 'vue'
import App from './App.vue'
import Multiselect from '@vueform/multiselect'
// import router from './router' // <---
import router from './router/newroute'
import RolesMixin from './components/mixins/Roles'
//createApp(App).mount('#app')
import './assets/css/app.css'

const app = createApp(App)
app.mixin(RolesMixin)

app.use(router)

app.use('Multiselect',Multiselect)
app.mount('#app')
