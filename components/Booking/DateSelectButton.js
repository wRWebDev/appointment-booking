import styles from './booking.module.css'

const DateSelectButton = ({ option, dateHandler }) => {
    
    const thisDate = option.toLocaleDateString('en-GB', {
        weekday: 'short', 
        year: '2-digit', 
        month: 'short', 
        day: 'numeric'
    }).split(',')

    const weekday = thisDate[0]
    const dateSplit = thisDate[1].split(' ')
    
    // determine superscript letters
    const superScript = `th`

    return (
        <div 
            className={styles.selectButton}
            onClick={() => dateHandler(option)}
        >
            <span className={styles.highlight}>{weekday}</span>
            {`${dateSplit[0]} ${dateSplit[1]} ${dateSplit[2]} '${dateSplit[3]}`}
        </div>
    )

}

export default DateSelectButton