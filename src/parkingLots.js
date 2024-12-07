// src/parkinglots.js
const parkingLots = [
    {
        "id": 1,
        "name": "The Plaza Park",
        "tickets": [
            {
                "plateNumber": "ABC123",
                "position": 1,
                "parkingLot": 1
            }
        ],
        "capacity": 9,
        "full": false,
        "availableCapacity": 8,
        "availablePositionRate": 0.8888888888888888
    },
    {
        "id": 2,
        "name": "City Mall Garage",
        "tickets": [
            {
                "plateNumber": "DEF456",
                "position": 1,
                "parkingLot": 2
            }
        ],
        "capacity": 12,
        "full": false,
        "availableCapacity": 11,
        "availablePositionRate": 0.9166666666666666
    },
    {
        "id": 3,
        "name": "Office Tower Parking",
        "tickets": [
            {
                "plateNumber": "GHI789",
                "position": 1,
                "parkingLot": 3
            }
        ],
        "capacity": 9,
        "full": false,
        "availableCapacity": 8,
        "availablePositionRate": 0.8888888888888888
    }
];

export default parkingLots;