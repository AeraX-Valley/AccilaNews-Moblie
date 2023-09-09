import './Home.css'
import Boxalert from './Boxalert'
import TabBar from './TabBar'


export default function Home() {
    return (
        <div className='Homepage'>
            <Boxalert />
            <TabBar />
        </div>
    )
}