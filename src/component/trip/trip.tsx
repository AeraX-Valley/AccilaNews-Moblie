import { Link } from "react-router-dom"
import { FaChevronLeft } from "react-icons/fa";
import map from '../../image/Test/Screenshot 2566-04-26 at 01.53 1.png'
import Mylotrip from './mylotrip';

export default function Trip() {
    return (
        <>
            {/*       Back Button      */}
            <Link to='/mapdestinition2' className='back-Button'><FaChevronLeft /></Link>
            {/*           Map            */}
            <div className="map">
                <img src={map} className="map" alt="" />
            </div>
            {/*         Mylo         */}
            <Mylotrip />
        </>
    )
}