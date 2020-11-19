// Initialise firebase connection 

import firebase from 'firebase/app'
import 'firebase/firestore'

export function loadFirebase(){
    const firebaseSettings = {
      apiKey: process.env.NEXT_PUBLIC_API_KEY,
      authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
      databaseURL: process.env.NEXT_PUBLIC_DB_URL,
      projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
      storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
      messagingSenderId: process.env.NEXT_PUBLIC_MSG_SENDER_ID,
      appId: process.env.NEXT_PUBLIC_APP_ID
    }
    
    // only initialise if no other instances running
    if(!firebase.apps.length){
        firebase.initializeApp(firebaseSettings)
    }

    return firebase
}