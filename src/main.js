import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { VueFire, VueFireAuth } from 'vuefire'
//import { firebaseApp } from './firebase'
import './style.css'
import { initializeApp } from 'firebase/app';
const firebaseConfig = {
    apiKey: "AIzaSyAu0KSU8NK_gdw3kyHeAUdXK9QDVaPcErg ",
    authDomain: "localhost",
    projectId: "dev-auth-86e3c",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "881164084075"
  };
import App from './App.vue'
import router from './router'

const app = createApp(App)
const firebaseApp = initializeApp(firebaseConfig);
app.use(VueFire, {
    firebaseApp,
    modules: [
      VueFireAuth(),
    ],
  })

app.use(createPinia())
app.use(router)

app.mount('#app')
