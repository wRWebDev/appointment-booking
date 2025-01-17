// Initialise firebase connection 

import firebase from 'firebase/app'
import 'firebase/firestore'

export function loadFirebase(){
    const firebaseSettings = {
      apiKey: process.env.FIREBASE_API_KEY,
      authDomain: process.env.FIREBASE_AUTH_DOMAIN,
      databaseURL: process.env.FIREBASE_DB_URL,
      projectId: process.env.FIREBASE_PROJECT_ID,
      storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.FIREBASE_MSG_SENDER_ID,
      appId: process.env.FIREBASE_APP_ID
    }
    
    // only initialise if no other instances running
    if(!firebase.apps.length){
        firebase.initializeApp(firebaseSettings)
    }

    return firebase
}