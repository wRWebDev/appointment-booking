// Globals
const successPage = '/'

// React
import { useState, useEffect } from 'react'

// Components
import Layout from '../components/Layout'
import Booking from '../components/Booking'

// For Database
import { loadFirebase } from '../lib/db.js'
const firebase = loadFirebase()
const firestore = firebase.firestore()

// PAGE BEGINS //
const Appointments = ({ settings }) => {

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
        
        <Booking settings={settings} bookings={bookings} successPage={successPage} />
        
    </Layout>
  )
}

// PAGE LOAD PROPS FROM DB //
Appointments.getInitialProps = async (ctx) => {
  
  // Settings document in the db
  const settingsRef = firestore.collection('settings').doc('Mh0m5jIQfrwllD5HGLJk')
  
  // Fetch Settings ( start/end dates & times )
  var settings = await settingsRef.get()
  .then(doc => {return (doc.data())})
  .catch(err => {
    console.error(err.message)
  })

  // Pass settings and bookings to Appointments as props
  return { settings }

}

export default Appointments