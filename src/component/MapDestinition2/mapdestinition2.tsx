import { Link } from "react-router-dom"
import { FaChevronLeft } from "react-icons/fa";
import map from '../../image/Test/IMG_9458 1.png'
import Mylodestinotion2 from './mylodestinition2';

export default function MapStarter2() {
    return (
        <>
            {/*       Back Button      */}
            <Link to='/mapstarter2' className='back-Button'><FaChevronLeft /></Link>
            {/*           Map            */}
            <div className="map">
                <img src={map} className="map" alt="" />
            </div>
            {/*         Mylo         */}
            <Mylodestinotion2 />
        </>
    )
}