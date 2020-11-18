import Layout from '../components/Layout'
import Booking from '../components/Booking'
import Link from 'next/link'
import styles from '../components/Booking/booking.module.css'


export default function Home() {

  return (
    <Layout title="Booking Demo">
        
        <h1>Booking Demo Site</h1>
        
        <Link href="/appointments">
          <a className={styles.primaryCTA}>Choose a slot</a>
        </Link>
        
    </Layout>
  )
}
