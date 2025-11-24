import { useState } from "react";
import styles from "./style";

export default function ZoneModal({ isOpen, onClose, onSave }) {
    const [name, setName] = useState("");
    const [type, setType] = useState("Residencial");

    if (!isOpen) return null;

    return (
        <div style={styles.overlay}>
            <div style={styles.modal}>
                <h2 style={styles.title}>Cadastrar Zona</h2>

                <div style={styles.formGroup}>
                    <label style={styles.label}>Nome da Zona</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        style={styles.input}
                        placeholder="Digite o nome..."
                    />
                </div>

                <div style={styles.formGroup}>
                    <label style={styles.label}>Tipo</label>
                    <select
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                        style={styles.select}
                    >
                        <option style={styles.option}>Residencial</option>
                        <option style={styles.option}>Comercial</option>
                        <option style={styles.option}>Industrial</option>
                        <option style={styles.option}>Misto</option>
                    </select>
                </div>

                <div style={styles.actions}>
                    <button style={styles.cancelBtn} onClick={onClose}>
                        Cancelar
                    </button>
                    <button
                        style={styles.saveBtn}
                        onClick={() => onSave({ name, type })}
                    >
                        Salvar
                    </button>
                </div>
            </div>
        </div>
    );
}