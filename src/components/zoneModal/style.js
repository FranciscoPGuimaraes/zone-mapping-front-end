const styles = {
    overlay: {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: "rgba(0, 0, 0, 0.55)",
        display: "flex",
        backdropFilter: "blur(4px)",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 999999,
    },

    modal: {
        width: "420px",
        background: "linear-gradient(180deg, #1b014d 0%, #2d0266 100%)",
        borderRadius: "16px",
        padding: "30px 28px",
        boxShadow: "0 0 25px rgba(0,0,0,0.45)",
        border: "1px solid rgba(255,255,255,0.1)",
        backdropFilter: "blur(10px)",
        animation: "fadeIn 0.25s ease",
    },

    title: {
        margin: 0,
        marginBottom: "22px",
        fontSize: "20px",
        fontWeight: "700",
        color: "#fff",
        background: "linear-gradient(45deg, #fff, #e0e0ff)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
    },

    formGroup: {
        display: "flex",
        flexDirection: "column",
        marginBottom: "16px",
    },

    label: {
        marginBottom: "6px",
        fontSize: "14px",
        color: "rgba(255,255,255,0.7)",
        fontWeight: 500,
    },

    input: {
        width: "100%",
        padding: "12px 14px",
        border: "none",
        borderRadius: "10px",
        background: "rgba(255, 255, 255, 0.1)",
        backdropFilter: "blur(8px)",
        color: "#fff",
        fontSize: "14px",
        outline: "none",
        boxSizing: "border-box",
    },

    select: {
        width: "100%",
        padding: "12px 14px",
        borderRadius: "10px",
        background: "rgba(255,255,255,0.1)",
        color: "#fff",
        border: "none",
        fontSize: "14px",
        outline: "none",
        backdropFilter: "blur(8px)",
        boxSizing: "border-box",
    },

    actions: {
        display: "flex",
        justifyContent: "flex-end",
        marginTop: "20px",
        gap: "12px",
    },

    cancelBtn: {
        padding: "10px 16px",
        background: "rgba(255,255,255,0.1)",
        border: "1px solid rgba(255, 255, 255, 0.2)",
        borderRadius: "10px",
        color: "#fff",
        cursor: "pointer",
        transition: "0.2s",
    },

    saveBtn: {
        padding: "10px 16px",
        background: "linear-gradient(45deg, #7c3aed, #a855f7)",
        border: "none",
        borderRadius: "10px",
        color: "#fff",
        fontWeight: "600",
        cursor: "pointer",
        transition: "0.2s",
    },

    option: {
        color: "#ffffffff",
        fontWeight: "600",
        background: "#4605b8ff",
    }
};

export default styles;