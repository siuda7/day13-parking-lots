I need to have a UI to show where cars are parked in a parkinglot. There is 3 parking lots line up in a row, namely
1.The Plaza Park (9 parking capacity)
2. City Mall Garage (12 parking capacity)
3. Office Tower Parking (9 parking capacity),
display the parking lots in a grid format with 9 capacity as 3 by 3 grid and 12 capacity as 4 by 4 grid. In the grid there will be positions to indicate the the car is parking starting from position 1 to end. Show the car plate of the car which is parked to which position in each of the respective parking lots.
The format of the parkinglots data is like this, you may store in the a local js file first

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
]
 Generate me the UI code.
--------------------------------

There will be a component on top of the parking lots, whihc includes a input for car plate number, a select to choose parking strategy and one park button and one fetch button. These components will need to be in same row

--------------------------

when the fetch function is click, it will call a api /fetch/{carpPlate}, where carPlate is the inputted car plate and a get requets. 