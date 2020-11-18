import styles from './booking.module.css'

const TimeSelectButton = ( { option, timeHandler } ) => {

    return (

        <div
            className={styles.selectButton}
            onClick={ ()=>timeHandler(option) }
        >
            {option}
        </div>

    )

}

export default TimeSelectButton