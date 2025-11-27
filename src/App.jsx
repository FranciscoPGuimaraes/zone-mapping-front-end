import { useState } from 'react'
import MapView from "./components/map/MapView";
import SideBar from "./components/sidebar/SideBar";
import ZoneModal from "./components/zoneModal/zoneModal";
import './App.css'

function App() {
  const [open, setOpen] = useState(false);
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
          />
        </div>
      </div>
  );
}

export default App
