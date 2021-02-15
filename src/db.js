import firebase from "firebase/app"
import "firebase/database" 

const config = {
    // API KEYS
    apiKey: "AIzaSyBCSe9ax5t2wQMx5y6ppdV1wNPVcO0GgTE",
    authDomain: "firechat-vue-12011.firebaseapp.com",
    projectId: "firechat-vue-12011",
    storageBucket: "firechat-vue-12011.appspot.com",
    messagingSenderId: "395340590933",
    appId: "1:395340590933:web:dba47c1b5ab631db3849dc",
    measurementId: "G-1GTYQNTB9H"
}

const db = firebase. initializeApp(config);
export default db; 