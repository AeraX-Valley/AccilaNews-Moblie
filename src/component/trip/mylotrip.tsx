import { BsFillSignTurnRightFill } from 'react-icons/bs';
import { Link } from "react-router-dom"
import ware6 from '../../image/wave6.png'

export default function Mylotrip() {
    return (
        <>
            {/*     Box My Location      */}
            <div className="box-mytolo-end">
                <div className="mytolocation" style={{color: 'white'}}>
                    <b><BsFillSignTurnRightFill size={25} /> บ้านสุขดี</b>
                    <b className='to'>ถึง</b>
                    <b><BsFillSignTurnRightFill size={25} /> ภัตตาคาร ตัวอย่าง</b>
                </div>
                <Link to='/selected' className='loend'>สิ้นสุดการเดินทางและแจ้่งเตือน</Link>
            </div>
            {/*     ware     */}
            <div id="ware">
                <img src={ware6} className='ware' alt="" />
            </div>
        </>
    )
}