import { styles } from "./style";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";


export default function MapView() {
    return (
        <MapContainer
            center={[-23.55, -46.63]}
            zoom={13}
            style={styles.MapContainer}
        >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        </MapContainer>
    );
}
