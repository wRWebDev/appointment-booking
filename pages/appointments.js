import { useState, useEffect } from 'react'

import Layout from '../components/Layout'
import Booking from '../components/Booking'

import { loadFirebase } from '../lib/db.js'

const Appointments = ({ settings }) => {

  const firebase = loadFirebase()
  const firestore = firebase.firestore()

  const [bookings, setBookings] = useState([])

  useEffect(()=>{
    firestore.collection('bookings')
      .where('date', '>=', settings.startDate)
      .where('date', '<=', settings.endDate)
      .onSnapshot(snap => {
        const apps = snap.docs.map(booking => booking.data())
        setBookings(apps)
      })
  }, [])

  return (
    <Layout title="Booking Demo">
        
        <h1>Booking Demo</h1>
        <h3>Join {bookings.length} others in the Relay for Life!</h3>
        
        <Booking settings={settings} bookings={bookings} />
        
    </Layout>
  )
}

Appointments.getInitialProps = async (ctx) => {
  
  const firebase = loadFirebase()
  const firestore = firebase.firestore()
  
  const settingsRef = firestore.collection('settings').doc('Mh0m5jIQfrwllD5HGLJk')
  
  // Fetch Settings ( start/end dates & times )
  var settings = await settingsRef.get()
  .then(doc => {return (doc.data())})
  .catch(err => {
    console.error(err.message)
  })
  
  // Fetch Bookings between start and end dates ( inclusive )
  // Server stores bookings in order of date, asc. for speed of query
  /*
  const bookingsRef = firestore.collection('bookings')
  var bookings = await bookingsRef
    .where('date', '>=', settings.startDate)
    .where('date', '<=', settings.endDate)
    .get()
    .then(snapshot => {
      return snapshot.docs.map(doc => doc.data())
    })
    .catch(err=>{console.error(err.message)})
  */

  // Pass settings and bookings to Appointments as props
  return { settings }

}

export default Appointments