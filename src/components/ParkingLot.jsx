// src/ParkingLot.js
import React, { useEffect, useState } from 'react';
import { fetchParkingLots } from '../api/api';
import './ParkingLot.css';

const ParkingLot = () => {
    const [parkingLots, setParkingLots] = useState([]);

    useEffect(() => {
        const getParkingLots = async () => {
            try {
                const data = await fetchParkingLots();
                setParkingLots(data);
            } catch (error) {
                console.error('Failed to fetch parking lots:', error);
            }
        };

        getParkingLots();
    }, []);

    return (
        <div className="parking-lots">
            {parkingLots.map(lot => {
                const gridClass = lot.capacity === 9 ? 'grid-3x3' : 'grid-4x4';

                return (
                    <div key={lot.id} className="parking-lot">
                        <h2>{lot.name}</h2>
                        <div className={`grid ${gridClass}`}>
                            {Array.from({ length: lot.capacity }, (_, i) => {
                                const position = i + 1;
                                const ticket = lot.tickets.find(ticket => ticket.position === position);
                                return (
                                    <div key={position} className="grid-item">
                                        {ticket ? ticket.plateNumber : ''}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default ParkingLot;