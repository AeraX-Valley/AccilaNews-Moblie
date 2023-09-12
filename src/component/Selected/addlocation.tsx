import { useState } from 'react';
import './selected.css';
import { Popup } from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { Button } from 'react-bootstrap';

import { FaPlus } from 'react-icons/fa';
import { BsSignTurnRightFill } from 'react-icons/bs';

export default function Addlocation({ onAddLocation }) {
  const [locationName, setLocationName] = useState('');

  const handleAddLocation = () => {
    if (locationName.trim() !== '') {
      onAddLocation(locationName);
      setLocationName('');
    }
  };

  return (
    <Popup trigger={<b className="btn-addlocation"><FaPlus className="iconpluslo" /> เพิ่มสถานที่โปรดของคุณ</b>} modal contentStyle={{ width: '334px', height: '320px', borderRadius: '34px',backgroundColor: 'white' }}>
      <div>
        <div className="iconnewlo mt-3">
          <div className="iconaddlo">
            <BsSignTurnRightFill />
          </div>
        </div>
        <div className="inputlo">
          <label htmlFor="inplo" className='inplo mt-4'>ชื่อสถานที่ &nbsp;</label>
          <input type="text" id="inplo" value={locationName} onChange={(e) => setLocationName(e.target.value)} />
          <Button variant="success" className='sussessaddlo mt-5' onClick={handleAddLocation}>ตกลง</Button>
        </div>
      </div>
    </Popup>
  );
}
