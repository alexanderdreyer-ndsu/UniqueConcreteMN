import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

const businessIcon = new L.Icon({
    iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
});

function LocationDisplay(props) {
    const { location, description } = props;
    
    return (
        <MapContainer
            center={location}
            zoom={11}
            style={{ height: "100%", width: "100%" }}
            scrollWheelZoom={false}
            >
            <TileLayer
                attribution='© <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={location} icon={businessIcon}>
                <Popup>
                    <b>{description}</b>
                </Popup>
            </Marker>
        </MapContainer>
    );
}

export default LocationDisplay