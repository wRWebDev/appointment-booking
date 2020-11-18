import styles from './booking.module.css'
import TimeSelectButton from './TimeSelectButton'

const Times = ({ timeHandler, startTime, endTime }) => {

    //Get start and end times from settings
    const timeToInt = time => {
        return parseInt(time.split(':')[0])
    }

    const getTimesArray = ( startTime, endTime ) => {
        for(var arr=[], i=startTime; i<=endTime; i++){
            arr.push(`${i.toString().padStart(2,'0')}:00`)
        }
        return arr
    }

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
                                option={time}
                                timeHandler={timeHandler}
                            />
                        )
                    })
                }

            </div>
            
        </>
    )
}

export default Times