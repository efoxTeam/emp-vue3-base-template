import {createApp, defineAsyncComponent} from 'vue'
import Layout from './Layout.vue'

const Content = defineAsyncComponent(() => import('vue3Components/Content'))
const Button = defineAsyncComponent(() => import('vue3Components/Button'))

const app = createApp(Layout)

app.component('content-element', Content)
app.component('button-element', Button)

app.mount('#emp-root')
