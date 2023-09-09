import './Home.css'
import '@coreui/coreui/dist/css/coreui.min.css'
import { CCard, CRow, CCol, CCardBody, CCardText } from '@coreui/react'

import { BsCursorFill } from "react-icons/bs";


export default function Boxalert() {
    return (
        <>
            <b className='topBoxalert'>โปรดเลือกประเภทการแจ้งเตือน</b>
            {/*     Box      */}
            <CCard className="box mt-3">
                <CRow className="g-0">
                    <CCol className='Iconbox'>
                        <BsCursorFill />
                    </CCol>
                    <CCol>
                        <CCardBody>
                            <CCardText>แจ้งเตือนตามตำแหน่ง ณ ปัจจุบัน</CCardText>
                        </CCardBody>
                    </CCol>
                </CRow>
            </CCard>
        </>
    )
}