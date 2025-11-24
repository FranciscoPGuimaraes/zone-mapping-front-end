import { createContext, useState, useContext } from "react";

const ZonesContext = createContext();

export function ZonesProvider({ children }) {
    const [visibleZones, setVisibleZones] = useState({});
    const [selectedZone, setSelectedZone] = useState(null);

    return (
        <ZonesContext.Provider value={{ visibleZones, setVisibleZones, selectedZone, setSelectedZone }}>
            {children}
        </ZonesContext.Provider>
    );
}

export function useZonesContext() {
    return useContext(ZonesContext);
}
