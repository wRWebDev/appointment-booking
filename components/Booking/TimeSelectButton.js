import styles from './booking.module.css'

// MODULE STARTS //
const TimeSelectButton = ( { chosenDate, option, timeHandler, bookings } ) => {

    // Get only the bookings that apply to today
    const thisTimesBookings = bookings.filter(booking => {
        if((booking.date.seconds === chosenDate)
            && booking.time === option){
                return booking
            }
    })

    // Disable the option if that time is already booked
    // TODO: Admin control & % booked controlling whether available for double booking or not
    const clickHandler = (option) => {
        thisTimesBookings.length
            ? ''
            : timeHandler(option)
    }

    return (

            <div 
                className={`${styles.selectButton} ${thisTimesBookings.length && styles.unavailable} `}
                onClick={()=>clickHandler(option)}
                
            >
            {option}<br/>
            <span className={styles.unavailable}>{thisTimesBookings.length ? 'unavailable' : ''}</span>
        </div>

    )

}

export default TimeSelectButton