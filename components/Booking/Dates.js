import styles from './booking.module.css'
import DateSelectButton from './DateSelectButton'

// MODULE STARTS //
const Dates = ({ dateHandler, startDate, endDate, bookings }) => {

    // Populates dates between provided start/end dates
    const getDaysArray = ( startDate, endDate ) => {
        let arr = []
        for( let curr = new Date(startDate); curr <= endDate; curr.setDate(curr.getDate()+1) ){
            arr.push(new Date(curr))
        }
        return arr
    }
    
    // Call the function to populate an array of dates to be booked on
    var dateList = getDaysArray( new Date(startDate * 1000), new Date(endDate * 1000))

    return (
        <>
            <div className={styles.selectionWrapper}>
                <h2 className={styles.sectionHeader}>Pick a date</h2>
                {
                    dateList.map(( date, i ) => { 
                        return  ( 
                            <DateSelectButton 
                                key={i}
                                option={date} 
                                dateHandler={dateHandler}
                                bookings={bookings}
                            />
                        ) 
                    })
                }
            </div>
        </>
    )
}

export default Dates