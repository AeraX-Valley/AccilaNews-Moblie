import { Link } from "react-router-dom"
import { FaChevronLeft } from "react-icons/fa";
import Mylodestinotion2 from './mylodestinition2';
import Map from "../Map";

export default function MapStarter2() {
    return (
        <>
            {/*       Back Button      */}
            <Link to='/mapstarter2' className='back-Button'><FaChevronLeft /></Link>
            {/*           Map            */}
            <div className="map">
                <Map />
            </div>
            {/*         Mylo         */}
            <Mylodestinotion2 />
        </>
    )
}