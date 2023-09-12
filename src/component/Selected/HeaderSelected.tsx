import './selected.css'
import { InputGroup, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'

// Signboard
import Signboard from '../../image/Signboard/signboard.png'
import wat from '../../image/Signboard/wat-phra-kaew.png'
import sing from '../../image/Signboard/giant-swing.png'

import { BsGeoAltFill } from 'react-icons/bs'
import { FaMapLocationDot } from 'react-icons/fa6'
import { FaChevronLeft } from 'react-icons/fa'

export default function HeaderSelected() {
    return (
        <div className='headerse'>
            <Link to='/' className='back-Button'><FaChevronLeft /></Link>
            {/*     SignBoard    */}
            <div id="signboard">
                <img src={Signboard} className='assetsign' alt="" />
                <img src={wat} className='assetwat' alt="" />
                <img src={sing} className='assetsing' alt="" />
            </div>
            {/*     Search    */}
            <div id="search">
                <Link to="/mapdestinition"><b className='assetsearch'><FaMapLocationDot /> เลือกจากแผนที่</b></Link>
                <InputGroup>
                    <InputGroup.Text className='Textsearch'><BsGeoAltFill className="iconsearch" /></InputGroup.Text>
                    <Form.Control className='inpsearch' placeholder='สถานที่ ?' />
                </InputGroup>
            </div>
            {/*     Text     */}
            <div id="text">
                <b className='text1'>จุดหมายการเดินทาง</b>
                <p className='text2'>เพลิดเพลินกับการเดินทาง <br />หลีกเลี่ยงเส้นทางอุบัติเหต</p>
            </div>
        </div>
    )
}