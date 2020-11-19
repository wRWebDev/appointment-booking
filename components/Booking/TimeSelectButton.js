import styles from './booking.module.css'

const TimeSelectButton = ( { chosenDate, option, timeHandler, bookings } ) => {

    const thisTimesBookings = bookings.filter(booking => {
        if((booking.date.seconds === chosenDate)
            && booking.time === option){
                return booking
            }
    })

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