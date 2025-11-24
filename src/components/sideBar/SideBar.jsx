import styles from "./styles";
import { useState, useEffect } from "react";
import { useZones } from "../../hooks/useZones";
import { useZonesContext } from "../../context/ZonesContext";

export default function SideBar() {
    const { zones } = useZones();
    const [search, setSearch] = useState("");
    const { visibleZones, setVisibleZones, selectedZone, setSelectedZone } = useZonesContext();

    useEffect(() => {
        const initialVisibility = {};
        zones.forEach(zone => {
            initialVisibility[zone.id] = true;
        });
        setVisibleZones(initialVisibility);
    }, [zones]);


    const filteredZones = zones.filter((zone) =>
        zone.name.toLowerCase().includes(search.toLowerCase())
    );

    const handleZoneClick = (zone) => {
        setSelectedZone(zone.id);
    };

    const toggleZoneVisibility = (zoneId) => {
        setVisibleZones((prev) => ({
            ...prev,
            [zoneId]: !prev[zoneId],
        }));
    };

    return (
        <aside style={styles.asideContainer}>
            <div style={styles.header}>
                <h2 style={styles.title}>Zonas Cadastradas</h2>
                <div style={styles.badge}>{zones.length} zonas</div>
            </div>

            <div style={styles.searchContainer}>
                <input
                    type="text"
                    placeholder="Buscar zona..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    style={styles.searchInput}
                />
            </div>

            <div style={styles.zonesList}>
                {filteredZones.length ? (
                    filteredZones.map((zone) => (
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
                                    checked={visibleZones[zone.id]}
                                    onChange={() => toggleZoneVisibility(zone.id)}
                                    style={{ marginRight: "10px" }}
                                />

                                <strong
                                    style={styles.zoneName}
                                    onClick={() => handleZoneClick(zone)}
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
                        <div style={styles.emptyIcon}>🏷️</div>
                        <p style={styles.emptyText}>Nenhuma zona encontrada</p>
                    </div>
                )}
            </div>
        </aside>
    );
}