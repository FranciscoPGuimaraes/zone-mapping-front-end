import { useEffect, useState } from "react";
import { getZones } from "../api/zones";

export function useZones() {
    const [zones, setZones] = useState([]);

    useEffect(() => {
        const fetchZones = async () => {
            const { data: zones } = await getZones();
            setZones(zones);
        };

        fetchZones();
    }, []);

    return { zones, setZones };
}
