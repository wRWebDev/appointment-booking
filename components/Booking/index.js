import { useState } from 'react'

// Import modules and styles
import ShowSelections from './ShowSelections'
import Times from './Times'
import Dates from './Dates'
import Confirmation from './Confirmation'

// For DB
import { loadFirebase } from '../../lib/db.js'
const firebase = loadFirebase()
const firestore = firebase.firestore()

// For redirects
import Router from 'next/router'

// For smooth scroll
import * as Scroll from 'react-scroll'
let scroll = Scroll.animateScroll

// MAIN MODULE STARTS //
const Booking = ({ settings, bookings, successPage }) => {

    // Using a code for each screen:
    //  0 - Select Date || 1 - Select Time || 2 - Confirm?
    const [display, setDisplayTo] = useState(0)
    
    // State for selected date and time
    const [date, setDateTo] = useState('');
    const [time, setTimeTo] = useState('');

    // Handle date selections
    const dateHandler = option => {
        setDateTo(new Date(option))
        setDisplayTo(1)
        scroll.scrollToTop()
    }

    // Handle time selections
    const timeHandler = option => {
        setTimeTo(option)
        setDisplayTo(2)
        scroll.scrollToTop()
    }

    // Handle request to restart date/time selection
    const clearHandler = option => {
        setTimeTo('')
        setDateTo('')
        setDisplayTo(0)
        scroll.scrollToTop()
    }

    // Handle request to complete selection
    const confirmationHandler = () => {
        firestore.collection('bookings')
            .add({ date, time })
            .catch(err => console.error(err.message))
        Router.push(successPage)
    }

    return (
        
        <>
            {
                (date || time) && 
                    <ShowSelections date={date} time={time} />
            }
            {
                display === 0 &&
                    <Dates 
                        dateHandler={dateHandler} 
                        startDate={settings.startDate.seconds}
                        endDate={settings.endDate.seconds}
                        bookings={bookings}
                    />
            }
            {
                display === 1 && 
                    <Times 
                        chosenDate={date.getTime()/1000}
                        timeHandler={timeHandler} 
                        startTime={settings.startTime} 
                        endTime={settings.endTime}
                        bookings={bookings}
                    />
            } 
            {
                display === 2 && 
                    <Confirmation 
                        clearHandler={clearHandler} 
                        confirmationHandler={confirmationHandler}
                    />

            }    
        </>
    )

}

export default Booking