import { useState, useEffect } from 'react'

import ShowSelections from './ShowSelections'
import Times from './Times'
import Dates from './Dates'
import Confirmation from './Confirmation'
import styles from './booking.module.css'

// For smooth scroll
import * as Scroll from 'react-scroll'
let scroll = Scroll.animateScroll

const Booking = () => {

    // Using a code for each screen:
    //  0 - Select Date
    //  1 - Select Time
    //  2 - Confirm?
    const [display, setDisplayTo] = useState(0)
    const [date, setDateTo] = useState('');
    const [time, setTimeTo] = useState('');

    const scrollUp = () => {
        scroll.scrollToTop()
    }

    const dateHandler = option => {
        setDateTo(new Date(option))
        setDisplayTo(1)
        scrollUp()
    }

    const timeHandler = option => {
        setTimeTo(option)
        setDisplayTo(2)
        scrollUp()
    }

    const clearHandler = option => {
        setTimeTo('')
        setDateTo('')
        setDisplayTo(0)
        scrollUp()
    }

    const confirmationHandler = () => {
        alert('Now to payment!')
    }

    return (
        
        <>

            {
                (date || time) && 
                    <ShowSelections date={date} time={time} />
            }

            {display === 0 && <Dates dateHandler={dateHandler} />}
            {display === 1 && <Times timeHandler={timeHandler} />} 
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