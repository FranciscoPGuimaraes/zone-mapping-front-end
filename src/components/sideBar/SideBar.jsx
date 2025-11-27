import styles from "./styles";
import { useState, useEffect } from "react";
import { useZonesContext } from "../../context/ZonesContext";

export default function SideBar() {
    const {
        zones = [],
        visibleZones = {},
        setVisibleZones,
        selectedZone,
        setSelectedZone,
    } = useZonesContext() || {};

    const [search, setSearch] = useState("");

    useEffect(() => {
        const initialVisibility = {};
        zones.forEach(zone => {
            initialVisibility[zone.id] = true;
        });
        setVisibleZones(initialVisibility);
    }, [zones, setVisibleZones]);

    const filteredZones = zones.filter(zone =>
        zone.name?.toLowerCase().includes(search.toLowerCase())
    );

    const handleZoneClick = (zone) => {
        setSelectedZone(zone.id);
    };

    const toggleZoneVisibility = (zoneId) => {
        const newVisibility = {
            ...visibleZones,
            [zoneId]: !visibleZones[zoneId],
        };
        setVisibleZones(newVisibility);
    };

    return (
        <aside style={styles.asideContainer}>
            <div style={styles.header}>
                <h2 style={styles.title}>Zonas Cadastradas</h2>
                <div style={styles.badge}>{zones?.length ?? 0} zonas</div>
            </div>

            <div style={styles.searchContainer}>
                <input
                    placeholder="Buscar zona..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    style={styles.searchInput}
                />
            </div>

            <div style={styles.zonesList}>
                {filteredZones?.length ? (
                    filteredZones.map(zone => (
                        <li
                            key={zone.id}
                            style={{
                                ...styles.zone,
                                ...(selectedZone === zone.id ? styles.zoneSelected : {})
                            }}
                        >
                            <div style={styles.zoneHeader}>
                                <input
                                    type="checkbox"
                                    checked={!!visibleZones[zone.id]}
                                    onChange={() => toggleZoneVisibility(zone.id)}
                                    style={{ marginRight: "10px" }}
                                />

                                <strong
                                    onClick={() => handleZoneClick(zone)}
                                    style={styles.zoneName}
                                >
                                    {zone.name}
                                </strong>

                                <div style={styles.typeBadge}>{zone.type}</div>
                            </div>

                            <span style={styles.zoneType}>Tipo: {zone.type}</span>
                        </li>
                    ))
                ) : (
                    <div style={styles.emptyState}>
                        <p style={styles.emptyText}>Nenhuma zona encontrada</p>
                    </div>
                )}
            </div>
        </aside>
    );
}
