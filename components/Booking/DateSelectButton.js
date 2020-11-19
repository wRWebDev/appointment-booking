import styles from './booking.module.css'

// MODULE STARTS //
const DateSelectButton = ({ option, dateHandler, bookings }) => {
    
    // Convert the date of this box to a unix timestamp for comparrison
    const thisUnixDate = option.getTime()/1000

    // Get only the bookings for this date
    const thisDaysBookings = bookings.filter(booking => {
        return booking.date.seconds === thisUnixDate
    })

    // Format the date
    const thisDate = option.toLocaleDateString('en-GB', {
        weekday: 'short', 
        year: '2-digit', 
        month: 'short', 
        day: 'numeric'
    }).split(',')

    // Get day name (Mon, Tue, Wed etc.)
    const weekday = thisDate[0]
    // Split into array [ D, MMM, YY ]
    const dateSplit = thisDate[1].split(' ').slice(1)
    
    // FIXME:
    // determine superscript letters
    const superScript = `th`

    // Show other exercisers on this day?
    const showOthers = () => {
        return !thisDaysBookings.length
            ? ''
            : thisDaysBookings.length === 1
                ? <span className={styles.smallPrint}>Exercise with {thisDaysBookings.length} other</span>
                : <span className={styles.smallPrint}>Exercise with {thisDaysBookings.length} others</span>
    }

    return (
        <div 
            className={styles.selectButton}
            onClick={() => dateHandler(option)}
        >
            <span className={styles.highlight}>{weekday}</span>
            {` ${dateSplit[0]} ${dateSplit[1]} '${dateSplit[2]}`}<br/>
            {showOthers()}
        </div>
    )

}

export default DateSelectButton