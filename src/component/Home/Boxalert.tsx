import './Home.css'
import '@coreui/coreui/dist/css/coreui.min.css'
import { CCard, CRow, CCol, CCardBody, CCardText } from '@coreui/react'

import { BsCursorFill, BsGeoAltFill, BsLine } from "react-icons/bs";
import { Link } from 'react-router-dom';


export default function Boxalert() {
    return (
        <div id='Boxalert'>
            <b className='topBoxalert'>โปรดเลือกประเภทการแจ้งเตือน</b>
            {/*     Box      */}
            <Link to="/mapstarter">
                <CCard className="box mt-3">
                    <CRow className="row">
                        <CCol className='Iconbox col-3'>
                            <BsCursorFill />
                        </CCol>
                        <CCol className='col-9'>
                            <CCardBody>
                                <CCardText className='textBox'>
                                    แจ้งเตือนตาม <br />
                                    ตำแหน่ง ณ ปัจจุบัน
                                </CCardText>
                            </CCardBody>
                        </CCol>
                    </CRow>
                </CCard>
            </Link>
            {/*      Selected     */}
            <Link to="/selected">
                <CCard className="box mt-3">
                    <CRow className="row">
                        <CCol className='Iconbox col-3'>
                            <BsGeoAltFill />
                        </CCol>
                        <CCol className='col-9'>
                            <CCardBody>
                                <CCardText className='textBox'>
                                    แจ้งเตือนตามต้นทาง <br />
                                    และจุดหมายปลายทาง
                                </CCardText>
                            </CCardBody>
                        </CCol>
                    </CRow>
                </CCard>
            </Link>
            {/*     Line     */}
            <Link to="/line">
                <CCard className="box mt-3">
                    <CRow className="row">
                        <CCol className='Iconbox col-3'>
                            <BsLine />
                        </CCol>
                        <CCol className='col-9'>
                            <CCardBody>
                                <CCardText className='textBox'>
                                    แจ้งเตือนผ่านการส่งตำแหน่ง
                                    เป็นระยะผ่านไลน์
                                </CCardText>
                            </CCardBody>
                        </CCol>
                    </CRow>
                </CCard>
            </Link>
        </div>
    )
}