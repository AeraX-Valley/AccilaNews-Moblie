import { Link } from "react-router-dom"
import { FaChevronLeft } from "react-icons/fa";
import map from '../../image/Test/IMG_9458 1.png'
import Mylo from './mylo';

export default function MapStarter() {
    return (
        <>
            {/*       Back Button      */}
            <Link to='/selected' className='back-Button'><FaChevronLeft /></Link>
            {/*           Map            */}
            <div className="map">
                <img src={map} className="map" alt="" />
            </div>
            {/*         Mylo         */}
            <Mylo />
        </>
    )
}