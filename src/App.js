// src/App.js
import React from 'react';
import ControlPanel from './components/ControlPanel';
import ParkingLot from './components/ParkingLot';
import './App.css';

function App() {
    return (
        <div className="App">
            <ControlPanel />
            <ParkingLot />
        </div>
    );
}

export default App;