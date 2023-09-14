import { Link } from "react-router-dom"
import { FaChevronLeft } from "react-icons/fa";
import Mylotrip from './mylotrip';
import Map from "../Map";

export default function Trip() {
    return (
        <>
            {/*       Back Button      */}
            <Link to='/mapdestinition2' className='back-Button'><FaChevronLeft /></Link>
            {/*           Map            */}
            <div className="map">
                <Map />
            </div>
            {/*         Mylo         */}
            <Mylotrip />
        </>
    )
}