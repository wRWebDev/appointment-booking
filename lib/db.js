// Initialise firebase connection 

import firebase from 'firebase/app'
import 'firebase/firestore'

export function loadFirebase(){
    const firebaseSettings = {
      apiKey: process.env.API_KEY,
      authDomain: process.env.AUTH_DOMAIN,
      databaseURL: process.env.DB_URL,
      projectId: process.env.PROJECT_ID,
      storageBucket: process.env.STORAGE_BUCKET,
      messagingSenderId: process.env.MSG_SENDER_ID,
      appId: process.env.APP_ID
    }
    
    // only initialise if no other instances running
    if(!firebase.apps.length){
        firebase.initializeApp(firebaseSettings)
    }

    return firebase
}