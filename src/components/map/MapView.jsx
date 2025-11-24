import { MapContainer, TileLayer, FeatureGroup, GeoJSON } from "react-leaflet";
import DrawControls from "../drawControls/drawControls"
import "leaflet/dist/leaflet.css";
import "leaflet-draw/dist/leaflet.draw.css";
import { useZones } from "../../hooks/useZones";
import { useRef } from "react";
import { useZonesContext } from "../../context/ZonesContext";

export default function MapView({onCreateNewZone}) {
    const { zones } = useZones();
    const { visibleZones } = useZonesContext();

    const savedLayersRef = useRef();
    const drawingLayersRef = useRef();

    function handleZoneCreated(geojson) {
        onCreateNewZone();
        console.log("Nova zona criada:", geojson);
    }

    return (
        <MapContainer
            center={[-15.5, -47.5]}
            zoom={5}
            style={{ height: "100%", width: "100%" }}
        >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

            <FeatureGroup ref={savedLayersRef}>
                {zones
                    .filter((zone) => visibleZones[zone.id])
                    .map((zone) => (
                        <GeoJSON key={zone.id} data={zone.geometry} />
                    ))}

            </FeatureGroup>

            <FeatureGroup ref={drawingLayersRef}>
                <DrawControls onCreated={handleZoneCreated} />
            </FeatureGroup>
        </MapContainer>
    );
}
