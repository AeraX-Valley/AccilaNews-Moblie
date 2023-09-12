import { BsFillSignTurnRightFill } from 'react-icons/bs';
import { Link } from "react-router-dom"
import ware6 from '../../image/wave6.png'

export default function Mylostarter2() {
    return (
        <>
            {/*     Box My Location      */}
            <div className="box-mylo">
                <b className='mylocation'><BsFillSignTurnRightFill size={20} />&nbsp; บ้านสุขดี</b>
                <Link to='/mapdestinition2' className='loconfirm'>ยืนยันต้นทาง</Link>
            </div>
            {/*     ware     */}
            <div id="ware">
                <img src={ware6} className='ware' alt="" />
            </div>
        </>
    )
}