import './mapstarter.css'
import ware6 from '../../image/wave6.png'

export default function Mylo() {
    return (
        <>
            {/*     Box My Location      */}
            <div className="box-mylo">
                <b className="lostart">ระหว่างการเดินทาง</b>
                <b className='mylocation'>ตำแหน่งปัจจุบัน : บ้านสุขดี</b>
                <b className='loend'>สิ้นสุดการตามตำแหน่ง</b>
            </div>
            {/*     ware     */}
            <div id="ware">
                <img src={ware6} className='ware' alt="" />
            </div>
        </>
    )
}