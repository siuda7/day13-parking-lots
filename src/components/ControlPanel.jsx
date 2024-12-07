// src/ControlPanel.js
import React, { useState } from 'react';
import { parkCar, fetchCar } from '../api/api';
import './ControlPanel.css';

const ControlPanel = () => {
    const [carPlate, setCarPlate] = useState('');
    const [strategy, setStrategy] = useState('NORMAL');

    const handlePark = async () => {
        try {
            const response = await parkCar(carPlate, strategy);
            console.log('Car parked successfully:', response);
            setCarPlate(''); // Clear the input field
        } catch (error) {
            console.error('Failed to park car:', error);
        }
    };

    const handleFetch = async () => {
        try {
            const response = await fetchCar(carPlate);
            console.log('Car fetched successfully:', response);
            setCarPlate(''); // Clear the input field
        } catch (error) {
            console.error('Failed to fetch car:', error);
        }
    };

    return (
        <div className="control-panel">
            <input
                type="text"
                placeholder="Car Plate Number"
                className="input-plate"
                value={carPlate}
                onChange={(e) => setCarPlate(e.target.value)}
            />
            <select
                className="select-strategy"
                value={strategy}
                onChange={(e) => setStrategy(e.target.value)}
            >
                <option value="NORMAL">Normal</option>
                <option value="SMART">Smart</option>
                <option value="SUPER">Super</option>
            </select>
            <button className="btn-park" onClick={handlePark}>Park</button>
            <button className="btn-fetch" onClick={handleFetch}>Fetch</button>
        </div>
    );
};

export default ControlPanel;