import { BsFillSignTurnRightFill } from 'react-icons/bs';
import { Link } from "react-router-dom"
import ware6 from '../../image/wave6.png'

export default function Mylo() {
    return (
        <>
            {/*     Box My Location      */}
            <div className="box-mylo">
                <b className='mylocation'><BsFillSignTurnRightFill size={20} />&nbsp; ภัตตาคาร ตัวอย่าง</b>
                <Link to='mapstarter2' className='loconfirm'>ยืนยันปลายทาง</Link>
            </div>
            {/*     ware     */}
            <div id="ware">
                <img src={ware6} className='ware' alt="" />
            </div>
        </>
    )
}