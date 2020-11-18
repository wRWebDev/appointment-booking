import styles from './booking.module.css'

const Confirmation = ({ clearHandler, confirmationHandler }) => {

    return (
        <>
            <button 
                className={styles.primaryCTA}
                onClick={confirmationHandler}
            >
                Continue
            </button>
            <button 
                className={styles.secondaryCTA}
                onClick={clearHandler}
            >
                Start again
            </button>
        </>
    )

}

export default Confirmation