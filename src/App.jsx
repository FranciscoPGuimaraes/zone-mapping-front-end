import { useState } from 'react'
import MapView from "./components/map/MapView";
import SideBar from "./components/sidebar/SideBar";
import ZoneModal from "./components/zoneModal/zoneModal";
import { ZonesProvider } from "./context/ZonesContext";
import './App.css'

function App() {
  const [open, setOpen] = useState(false);

  const handleSave = (zone) => {
    console.log("Nova zona:", zone);
    setOpen(false);
  };

  const newZone = () => {
    setOpen(true);
  }

  return (
    <ZonesProvider>
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
    </ZonesProvider>
  );
}

export default App
