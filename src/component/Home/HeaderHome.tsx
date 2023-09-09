import './Home.css'
import Banner from '../../image/2023-05-31-125727.155730d4.png'
import LogoBKK from '../../image/logoBkk.png'
import { FaChevronLeft } from 'react-icons/fa'

export default function HeaderHome() {
    return (
        <>
            <div className='title'>
                <FaChevronLeft className='icon-back' />
                <b className='text-welcome' style={{fontSize: 16}}>Welcome</b>
                <img className='logoBKK' src={LogoBKK} alt='LogoBKK' />
            </div>
            <img className='Banner' src={Banner} alt='Banner' />
            <div className='title-content'>
                <b style={{fontSize: 28}}>AccilaNews.ai</b>
                <p style={{fontSize: 16}}>หลีกเลี่ยงเส้นทางอุบัติเหตุ</p>
            </div>
        </>
    )
}