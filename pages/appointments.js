import { useState, useEffect } from 'react'

import Layout from '../components/Layout'
import Booking from '../components/Booking'

import { loadFirebase } from '../lib/db.js'


const Appointments = ({ settings }) => {

  return (
    <Layout title="Booking Demo">
        
        <h1>Booking Demo</h1>
        
        <Booking settings={settings} />
        
    </Layout>
  )
}

Appointments.getInitialProps = async (ctx) => {
  
  const firebase = loadFirebase()
  const firestore = firebase.firestore()
  
  const settingsRef = firestore.collection('settings').doc('Mh0m5jIQfrwllD5HGLJk')
  var settings = await settingsRef.get()
    .then(doc => {return (doc.data())})
    .catch(err => {
      console.error(err.message)
    })

  return { settings }

}

export default Appointments