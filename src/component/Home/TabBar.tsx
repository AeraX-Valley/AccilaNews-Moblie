import './Home.css'
import { BsCursorFill, BsGeoAltFill, BsLine, BsStarFill } from 'react-icons/bs';
import { IoHome } from 'react-icons/io5';
import { Link } from 'react-router-dom';

export default function TabBar() {

    return (
        <>
            {/* TapBar */}
            <div id='TabBar'>
                {/* location */}
                <div className='IconBar'>
                    <Link className='Icon' to="/location"><BsCursorFill /></Link>
                    <span className='IconText'>Location</span>
                </div>
                {/* Destination */}
                <div className='IconBar'>
                    <Link className='Icon' to="/destination"><BsGeoAltFill /></Link>
                    <span className='IconText'>Destination</span>
                </div>
                {/* Home */}
                <div className='IconBar'>
                    <Link className='Icon' to="/"><IoHome /></Link>
                    <span className='IconText'>Home</span>
                </div>
                {/* Line */}
                <div className='IconBar'>
                    <Link className='Icon' to="/line"><BsLine /></Link>
                    <span className='IconText'>Line</span>
                </div>
                {/* Favaorite */}
                <div className='IconBar'>
                    <Link className='Icon' to="/favaorite"><BsStarFill /></Link>
                    <span className='IconText'>Favaorite</span>
                </div>
            </div>
        </>
    )
}