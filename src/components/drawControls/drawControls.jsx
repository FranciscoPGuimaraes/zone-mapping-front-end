import { useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "@geoman-io/leaflet-geoman-free"; 
import "@geoman-io/leaflet-geoman-free/dist/leaflet-geoman.css";

import { useEffect } from "react";

export default function DrawControls({ onCreated }) {
    const map = useMap();

    useEffect(() => {
        map.pm.addControls({
            position: "topright",
            drawPolygon: true,
            drawMarker: false,
            drawCircle: false,
            editMode: true,
            removalMode: true,
        });

        map.on("pm:create", (e) => {
            const geojson = e.layer.toGeoJSON();
            if (onCreated) onCreated(geojson);
        });
    }, [map]);

    return null;
}
