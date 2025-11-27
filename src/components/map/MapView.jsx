import { MapContainer, TileLayer, FeatureGroup, GeoJSON } from "react-leaflet";
import DrawControls from "../drawControls/drawControls"
import "leaflet/dist/leaflet.css";
import "leaflet-draw/dist/leaflet.draw.css";
import { useRef, useMemo } from "react";
import { useZonesContext } from "../../context/ZonesContext";

export default function MapView({ onCreateNewZone }) {
    const { zones = [], visibleZones = {}, setSelectedZone } = useZonesContext() || {};

    const savedLayersRef = useRef();
    const drawingLayersRef = useRef();
    const mapZoom = Number(import.meta.env.VITE_MAP_ZOOM) || 14;
    const mapCenter = useMemo(() => {
        try {
            return JSON.parse(import.meta.env.VITE_MAP_CENTER);
        } catch {
            return [-22.247242, -45.705694];
        }
    }, []);

    function handleZoneCreated(geojson) {
        setSelectedZone(geojson);
        onCreateNewZone();
    }

    return (
        <MapContainer
            center={mapCenter}
            zoom={mapZoom}
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
