const styles = {
    asideContainer: {
        display: "flex",
        flexDirection: "column",
        width: "350px",
        height: "100vh",
        background: "linear-gradient(180deg, #1b014d 0%, #2d0266 100%)",
        borderRight: "1px solid #333",
        padding: "24px 20px",
        boxShadow: "4px 0 20px rgba(0, 0, 0, 0.3)",
        overflow: "hidden",
        fontFamily: "'Inter', 'Segoe UI', sans-serif",
        boxSizing: "border-box",
    },
    header: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        marginBottom: "20px",
        paddingBottom: "16px",
        borderBottom: "1px solid rgba(255, 255, 255, 0.1)"
    },
    title: {
        color: "#ffffff",
        fontSize: "20px",
        fontWeight: "700",
        margin: "0",
        background: "linear-gradient(45deg, #fff, #e0e0ff)",
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent"
    },
    badge: {
        background: "rgba(124, 58, 237, 0.2)",
        color: "#a78bfa",
        padding: "4px 12px",
        borderRadius: "12px",
        fontSize: "12px",
        fontWeight: "600",
        border: "1px solid rgba(124, 58, 237, 0.3)"
    },
    searchContainer: {
        width: "100%",
        marginBottom: "24px",
        position: "relative"
    },
    searchInput: {
        width: "100%",
        padding: "12px 16px 12px 40px",
        borderRadius: "12px",
        background: "rgba(255, 255, 255, 0.1)",
        color: "#fff",
        border: "none",
        boxSizing: "border-box"
    },
    searchInputFocus: {
        background: "rgba(255, 255, 255, 0.15)",
        boxShadow: "0 0 0 2px rgba(124, 58, 237, 0.5)"
    },
    zonesList: {
        listStyle: "none",
        padding: "0",
        width: "95%",
        overflowY: "auto",
        flex: 1,
        boxSizing: "border-box",
    },
    zone: {
        width: "100%",
        padding: "16px",
        borderRadius: "12px",
        marginBottom: "12px",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        background: "rgba(255, 255, 255, 0.05)",
        backdropFilter: "blur(10px)",
        boxSizing: "border-box",
    },
    zoneSelected: {
        background: "rgba(124, 58, 237, 0.15)",
        border: "1px solid rgba(124, 58, 237, 0.5)",
        transform: "translateX(4px)"
    },
    zoneHeader: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        marginBottom: "8px"
    },
    zoneName: {
        color: "#ffffff",
        fontSize: "15px",
        fontWeight: "600",
        margin: "0",
        flex: "1"
    },
    typeBadge: {
        background: "linear-gradient(45deg, #7c3aed, #a855f7)",
        color: "#ffffff",
        padding: "4px 10px",
        borderRadius: "8px",
        fontSize: "11px",
        fontWeight: "700",
        marginLeft: "8px",
        whiteSpace: "nowrap"
    },
    zoneType: {
        fontSize: "13px",
        color: "rgba(255, 255, 255, 0.7)",
        fontWeight: "400"
    },
    emptyState: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 20px",
        color: "rgba(255, 255, 255, 0.5)",
        textAlign: "center"
    },
    emptyIcon: {
        fontSize: "48px",
        marginBottom: "16px",
        opacity: "0.5"
    },
    emptyText: {
        fontSize: "14px",
        margin: "0",
        fontWeight: "500"
    }
};

export default styles;