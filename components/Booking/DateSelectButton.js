import styles from './booking.module.css'

const DateSelectButton = ({ option, dateHandler }) => {
    
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
    
    // determine superscript letters
    const superScript = `th`

    return (
        <div 
            className={styles.selectButton}
            onClick={() => dateHandler(option)}
        >
            <span className={styles.highlight}>{weekday}</span>
            {` ${dateSplit[0]} ${dateSplit[1]} '${dateSplit[2]}`}
        </div>
    )

}

export default DateSelectButton