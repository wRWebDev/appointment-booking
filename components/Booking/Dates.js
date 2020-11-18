import styles from './booking.module.css'
import DateSelectButton from './DateSelectButton'

const Dates = ({ dateHandler }) => {

    const getDaysArray = ( startDate, endDate ) => {
        let arr = []
        for( let curr = new Date(startDate); curr <= endDate; curr.setDate(curr.getDate()+1) ){
            arr.push(new Date(curr))
        }
        return arr
    }
    
    var dateList = getDaysArray( new Date("2020-12-04"), new Date("2020-12-12"))

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
                            />
                        ) 
                    })
                }

            </div>
        </>
    )
}

export default Dates