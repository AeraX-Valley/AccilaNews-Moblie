import { Link } from "react-router-dom"
import { FaChevronLeft } from "react-icons/fa";
import Mylostarter2 from './mylostarter2';
import Map from "../Map";

export default function MapStarter2() {
    return (
        <>
            {/*       Back Button      */}
            <Link to='/mapdestinition' className='back-Button'><FaChevronLeft /></Link>
            {/*           Map            */}
            <div className="map">
                <Map />
            </div>
            {/*         Mylo         */}
            <Mylostarter2 />
        </>
    )
}