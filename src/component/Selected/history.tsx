import { useState } from 'react';
import './selected.css';
import { FaHome } from 'react-icons/fa';
import { BsSignTurnRightFill } from 'react-icons/bs';
import Addlocation from './addlocation';

export default function History() {
    const [locations, setLocations] = useState([]);

    const onAddLocation = (newLocation) => {
        setLocations([...locations, newLocation]);
    };

    return (
        <>
            <div id='SelectedPage'>
                {/* icon location */}
                <div id="iconlo">
                    {/* icon */}
                    <div className="row row-cols-5 Selected-gridicon">
                        <div className="mylocationSelected col">
                            <div className="iconlo">
                                <FaHome />
                            </div>
                            <p className='mt-2'>หมู่บ้าน</p>
                        </div>
                        <div className="mylocationSelected col">
                            <div className="iconlo">
                                <BsSignTurnRightFill />
                            </div>
                            <p className='mt-2'>ที่ทำงาน</p>
                        </div>
                        <div className="mylocationSelected col">
                            <div className="iconlo">
                                <BsSignTurnRightFill />
                            </div>
                            <p className='mt-2'>โรงเรียน</p>
                        </div>
                        <div className="mylocationSelected col">
                            <div className="iconlo">
                                <BsSignTurnRightFill />
                            </div>
                            <p className='mt-2'>ร้านข้าว</p>
                        </div>
                        <div className="mylocationSelected col">
                            <div className="iconlo">
                                <BsSignTurnRightFill />
                            </div>
                            <p className='mt-2'>อื่นๆ</p>
                        </div>
                    </div>
                    {/* add icon */}
                    <div className="row row-cols-5 Selected-gridicon">
                        {locations.map((location, index) => (
                            <div key={index} className="mylocationSelected col">
                                <div className="iconlo">
                                    <BsSignTurnRightFill />
                                </div>
                                <p className='mt-2'>{location}</p>
                            </div>
                        ))}
                    </div>
                </div>
                {/* add location */}
                <Addlocation onAddLocation={onAddLocation} /> <br />
                {/* History */}
                <div id="history">
                    <b className='titlehis'>ประวัติจุดหมายการเดินทาง</b>
                    <div className="p-3">
                        {/* location history */}
                        <div className="row">
                            {/* location 1 */}
                            <div className="historylocationSelected col-12 d-flex">
                                <div className="iconhistory">
                                    <BsSignTurnRightFill />
                                </div>
                                <div className='px-3'>
                                    <b>ตลาดวงเวียนใหญ่</b>
                                    <p className="text-location-history">41 Charoen Rat Rd, Khlong San, Bangkok 10600</p>
                                </div>
                            </div>
                            {/* location 2 */}
                            <div className="historylocationSelected col-12 d-flex mt-3">
                                <div className="iconhistory">
                                    <BsSignTurnRightFill />
                                </div>
                                <div className='px-3'>
                                    <b>ท่าดินแดง</b>
                                    <p className="text-location-history">41 Charoen Rat Rd, Khlong San, Bangkok 10600</p>
                                </div>
                            </div>
                            {/* location 3 */}
                            <div className="historylocationSelected col-12 d-flex mt-3">
                                <div className="iconhistory">
                                    <BsSignTurnRightFill />
                                </div>
                                <div className='px-3'>
                                    <b>ปูอบ ลาดหญ้า</b>
                                    <p className="text-location-history">41 Charoen Rat Rd, Khlong San, Bangkok 10600</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
}
