// src/ControlPanel.js
import React from 'react';
import './ControlPanel.css';

const ControlPanel = () => {
    return (
        <div className="control-panel">
            <input type="text" placeholder="Car Plate Number" className="input-plate" />
            <select className="select-strategy">
                <option value="strategy1">Strategy 1</option>
                <option value="strategy2">Strategy 2</option>
            </select>
            <button className="btn-park">Park</button>
            <button className="btn-fetch">Fetch</button>
        </div>
    );
};

export default ControlPanel;