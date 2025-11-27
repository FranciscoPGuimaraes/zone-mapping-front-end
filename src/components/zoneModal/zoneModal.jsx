import { useState } from "react";
import { useZonesContext } from "../../context/ZonesContext";
import { createZone } from "../../api/zones";
import styles from "./style";

export default function ZoneModal({ isOpen, onClose }) {
    const { selectedZone, addZone } = useZonesContext();
    const [name, setName] = useState("");
    const [type, setType] = useState("Residencial");

    if (!isOpen) return null;

    const handleSubmit = async () => {
        try {
            if (!selectedZone || selectedZone === "{}") {
                alert("Desenhe uma área no mapa antes de salvar!");
                return;
            }

            const payload = {
                name,
                type,
                createdAt: new Date().toISOString(),
                geometry: selectedZone,
            };

            const res = await createZone(payload);

            addZone(res);

            onClose();
        } catch (err) {
            alert("Erro ao criar zona");
        }
    };

    return (
        <div style={styles.overlay}>
            <div style={styles.modal}>
                <h2 style={styles.title}>Cadastrar Zona</h2>

                <div style={styles.formGroup}>
                    <label style={styles.label}>Nome da Zona</label>
                    <input
                        value={name}
                        onChange={e => setName(e.target.value)}
                        style={styles.input}
                        placeholder="Digite o nome..."
                    />
                </div>

                <div style={styles.formGroup}>
                    <label style={styles.label}>Tipo</label>
                    <select value={type} onChange={e => setType(e.target.value)} style={styles.select}>
                        <option style={styles.option}>Residencial</option>
                        <option style={styles.option}>Comercial</option>
                        <option style={styles.option}>Industrial</option>
                        <option style={styles.option}>Misto</option>
                    </select>
                </div>

                <div style={styles.actions}>
                    <button style={styles.cancelBtn} onClick={onClose}>Cancelar</button>
                    <button style={styles.saveBtn} onClick={handleSubmit}>Salvar</button>
                </div>
            </div>
        </div>
    );
}
