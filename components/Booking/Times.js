import styles from './booking.module.css'
import TimeSelectButton from './TimeSelectButton'

// MODULE STARTS //
const Times = ({ chosenDate, timeHandler, startTime, endTime, bookings }) => {

    //Get start and end times from settings
    const timeToInt = time => {
        return parseInt(time.split(':')[0])
    }

    // Populates array of times from provided start/end times
    const getTimesArray = ( startTime, endTime ) => {
        for(var arr=[], i=startTime; i<=endTime; i++){
            arr.push(`${i.toString().padStart(2,'0')}:00`)
        }
        return arr
    }

    // Populate the array of times to be booked
    var timeList = getTimesArray( timeToInt(startTime), timeToInt(endTime) )
        
    return (
        <>
            <div className={styles.selectionWrapper}>
                <h2 className={styles.sectionHeader}>Pick a time</h2>
                {
                    timeList.map(( time, i ) => {
                        return (
                            <TimeSelectButton
                                key={i}
                                chosenDate={chosenDate}
                                option={time}
                                timeHandler={timeHandler}
                                bookings={bookings}
                            />
                        )
                    })
                }
            </div>
        </>
    )
}

export default Times