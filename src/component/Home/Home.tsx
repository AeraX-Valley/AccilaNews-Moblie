import './Home.css'
import Boxalert from './Boxalert'
import TabBar from './TabBar'
import HeaderHome from './HeaderHome'


export default function Home() {
    return (
        <div className='Homepage'>
            <HeaderHome />
            <Boxalert />
            <TabBar />
        </div>
    )
}