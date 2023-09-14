import { Link } from "react-router-dom"
import { FaChevronLeft } from "react-icons/fa";
import Mylodes from './mylo';
import Map from "../Map";

export default function MapDestinition() {
    return (
        <>
            {/*       Back Button      */}
            <Link to='/selected' className='back-Button'><FaChevronLeft /></Link>
            {/*           Map            */}
            <div className="map">
                <Map />
            </div>
            {/*         Mylo         */}
            <Mylodes />
        </>
    )
}