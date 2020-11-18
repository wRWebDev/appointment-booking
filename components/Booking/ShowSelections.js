import styles from './booking.module.css'

const ShowSelections = ( { date, time } ) => {

    const dateOptions = {
        weekday: 'short', 
        year: '2-digit', 
        month: 'short', 
        day: 'numeric'
    }

    return (
        <>
            <div className={styles.infoBox}>
                {(date || time) && <h2>You have selected:</h2>}
                {date && `${new Date(date).toLocaleDateString('en-gb', dateOptions)}`}
                {(date && time) && ' at '}
                {time && `${time}`}
            </div>
        </>
    )

}

export default ShowSelections