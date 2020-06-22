import Vue from 'vue';
import Buefy from 'buefy';
import * as firebase from 'firebase/app';
import App from './App.vue';
import router from './router';
import store from './store';
import 'firebase/auth';
import 'firebase/analytics';
import 'buefy/dist/buefy.css';

Vue.config.productionTip = false;

Vue.use(Buefy, {
  defaultIconPack: 'fab'
});

new Vue({
  router,
  store,
  created() {
    const firebaseConfig = {
      apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
      authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
      databaseURL: process.env.VUE_APP_FIREBASE_DATABASE_URL,
      projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
      appId: process.env.VUE_APP_FIREBASE_APP_ID,
      measurementId: process.env.VUE_APP_FIREBASE_MEASUREMENT_ID
    };
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
    firebase.auth().onAuthStateChanged(user => {
      this.$store.dispatch('changeAuthState', user);
    });
  },
  render: h => h(App)
}).$mount('#app');
