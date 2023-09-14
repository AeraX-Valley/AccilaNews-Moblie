import { useRef, useEffect, useState } from 'react';
import * as maptilersdk from '@maptiler/sdk';
import "@maptiler/sdk/dist/maptiler-sdk.css";

export default function Map() {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [zoom] = useState(10);
    const [currentPosition, setCurrentPosition] = useState(null);

    // ดึงตำแหน่งปัจจุบันของผู้ใช้งาน
    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                setCurrentPosition([position.coords.longitude, position.coords.latitude]);
            });
        }
    }, []);

    useEffect(() => {
        maptilersdk.config.apiKey = '975mqTR4rYbZ8aCOdZLN';

        if (!map.current) {
            map.current = new maptilersdk.Map({
                container: mapContainer.current,
                style: maptilersdk.MapStyle.STREETS,
                center: currentPosition || [100.516667, 13.75],
                zoom: zoom
            });
        }
    }, [zoom, currentPosition]);

    return (
        <div>
            <div ref={mapContainer} className='map' style={{ width: '100%', height: '100vh' }} />
        </div>
    );
}
