import { createContext, useState, useContext, useEffect } from "react";
import { listZones } from "../api/zones";

const ZonesContext = createContext();

export function ZonesProvider({ children }) {
    const [zones, setZones] = useState([]);
    const [visibleZones, setVisibleZones] = useState({});
    const [selectedZone, setSelectedZone] = useState(null);

    const addZone = (zone) => {
        setZones(prev => [...prev, zone]);
    };

    useEffect(() => {
        async function loadZones() {
            const response = await listZones();
            const loadedZones = response;

            setZones(loadedZones);

            const visibility = {};
            (loadedZones || []).forEach(z => visibility[z.id] = true);
            setVisibleZones(visibility);
        }

        loadZones();
    }, []);

    return (
        <ZonesContext.Provider value={{
            zones, setZones,
            visibleZones, setVisibleZones,
            selectedZone, setSelectedZone,
            addZone
        }}>
            {children}
        </ZonesContext.Provider>
    );
}

export function useZonesContext() {
    return useContext(ZonesContext);
}
