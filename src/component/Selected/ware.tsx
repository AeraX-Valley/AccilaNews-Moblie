import './selected.css'
import ware from '../../image/wave.png'
import ware6 from '../../image/wave6.png'
import bg from '../../image/bg.png'

export default function Ware() {
    return (
        <>
            {/*     ware     */}
            <div id="wareSelected">
                <img src={ware} className='ware1' alt="" />
            </div>
            <div id="ware6">
                <img src={ware6} className='ware6' alt="" />
            </div>
            <div id="bg">
                <img src={bg} className='bg' alt="" />
            </div>
        </>
    )
}