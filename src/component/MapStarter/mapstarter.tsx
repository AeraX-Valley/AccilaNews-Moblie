import './mapstarter.css'
import { Link } from "react-router-dom"
import { FaChevronLeft } from "react-icons/fa";
import Mylo from './mylo';
import Map from './Map';

export default function MapStarter() {
    return (
        <>
            {/*       Back Button      */}
            <Link to='/' className='back-Button'><FaChevronLeft /></Link>
            {/*           Map            */}
            <div className="map">
                <Map />
            </div>
            {/*         Mylo         */}
            <Mylo />
        </>
    )
}