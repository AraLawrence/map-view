import { useState, useRef, useEffect } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

function Map() {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(-125.4);
    const [lat, setLat] = useState(48.9);
    const [zoom, setZoom] = useState(9);

    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [lng, lat],
            zoom: zoom
        });
    });

    return (
        <div>
            <div
                style={{
                    display: 'block',
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    width: '100%',
                }}
                ref={mapContainer} className="map-container" 
            />
        </div>
    )
}

export default Map;
