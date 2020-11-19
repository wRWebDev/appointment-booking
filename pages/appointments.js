import { useState, useEffect } from 'react'

import Layout from '../components/Layout'
import Booking from '../components/Booking'

import { loadFirebase } from '../lib/db.js'


const Appointments = ({ settings, bookings }) => {

  return (
    <Layout title="Booking Demo">
        
        <h1>Booking Demo</h1>
        
        <Booking settings={settings} bookings={bookings} />
        
    </Layout>
  )
}

Appointments.getInitialProps = async (ctx) => {
  
  const firebase = loadFirebase()
  const firestore = firebase.firestore()
  
  const settingsRef = firestore.collection('settings').doc('Mh0m5jIQfrwllD5HGLJk')
  const bookingsRef = firestore.collection('bookings')

  var settings = await settingsRef.get()
    .then(doc => {return (doc.data())})
    .catch(err => {
      console.error(err.message)
    })

  var bookings = await bookingsRef
    .get()
    .then(snapshot => {
      console.log(snapshot.docs)
      return snapshot.docs.map(doc => doc.data())
    })
    .catch(err=>{console.error(err.message)})

  console.log(bookings)

  return { settings, bookings }

}

export default Appointments