import { useState } from 'react'
import MapView from "./components/map/MapView";
import SideBar from "./components/sidebar/SideBar";
import ZoneModal from "./components/zoneModal/zoneModal";
import { useZonesContext } from "./context/ZonesContext";
import { createZone } from "./api/zones";
import './App.css'

function App() {
  const [open, setOpen] = useState(false);
  const { addZone } = useZonesContext();

  const handleSave = async (zoneData) => {
    try {
      const response = await createZone(zoneData);
      if (!response) {
        return;
      }

      const { data: newZone } = response;
      addZone(newZone);

      setOpen(false);
    } catch (err) {
      console.error("Erro ao salvar zona:", err);
    }
  };

  const newZone = () => {
    setOpen(true);
  }

  return (
      <div
        style={{
          display: "flex",
          width: "100vw",
          height: "100vh",
          overflow: "visible",
        }}
      >
        <SideBar />
        <div style={{ flex: 1 }}>
          <MapView onCreateNewZone={newZone} />
          <ZoneModal
            isOpen={open}
            onClose={() => setOpen(false)}
            onSave={handleSave}
          />
        </div>
      </div>
  );
}

export default App
