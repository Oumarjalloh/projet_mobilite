import { createApp } from 'vue'
// import VueFire from 'vuefire';
// import Vue from 'vue';
import App from './App.vue'
import router from './router'
import store from './store'
// Vue.use(VueFire);

// // new Vue({
// //  el: '#app',
// //  render: h => h(App)
// // });
// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyAFEUBxrY-4adLtnDQPUblZeVQKRHbEJzk",
//   authDomain: "mia-antony.firebaseapp.com",
//   projectId: "mia-antony",
//   storageBucket: "mia-antony.appspot.com",
//   messagingSenderId: "190642780517",
//   appId: "1:190642780517:web:f22ff1d2cdec81e6e5898c",
//   measurementId: "G-VZH4QSFXHQ"
// };

// // Initialize Firebase
// initializeApp(firebaseConfig);
// const db = getFirestore()
// export default db

createApp(App).use(store).use(router).mount('#app')

