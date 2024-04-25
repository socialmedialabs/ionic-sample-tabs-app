import { createApp } from 'vue'
import { IonicVue } from '@ionic/vue'

import App from './App.vue'
import router from './router'

import '@ionic/vue/css/core.css'

import '@ionic/vue/css/normalize.css'
import '@ionic/vue/css/structure.css'
import '@ionic/vue/css/typography.css'

import '@ionic/vue/css/padding.css'
import '@ionic/vue/css/float-elements.css'
import '@ionic/vue/css/text-alignment.css'
import '@ionic/vue/css/text-transformation.css'
import '@ionic/vue/css/flex-utils.css'
import '@ionic/vue/css/display.css'
import '@ionic/vue/css/palettes/dark.class.css'
import './style.css'

const getConfig = () => {
  return {
    // mode: 'ios'
    hardwareBackButton: false,
    innerHTMLTemplatesEnabled: true,
    statusTap: true,
    swipeBackEnabled: false,
  }
}

const app = createApp(App)
  .use(IonicVue, getConfig())
  .use(router)

router.isReady().then(() => {
  app.mount('#app')
})