import { BsFillSignTurnRightFill } from 'react-icons/bs';
import { Link } from "react-router-dom"
import ware6 from '../../image/wave6.png'

export default function Mylodestinotion2() {
    return (
        <>
            {/*     Box My Location      */}
            <div className="box-mytolo">
                <div className="mytolocation">
                    <b><BsFillSignTurnRightFill size={25} /> บ้านสุขดี</b>
                    <b className='to'>ถึง</b>
                    <b><BsFillSignTurnRightFill size={25} /> ภัตตาคาร ตัวอย่าง</b>
                </div>
                <Link to='/trip' className='loconfirm'>เริ่มและแจ้งเตือนการเดินทาง</Link>
            </div>
            {/*     ware     */}
            <div id="ware">
                <img src={ware6} className='ware' alt="" />
            </div>
        </>
    )
}