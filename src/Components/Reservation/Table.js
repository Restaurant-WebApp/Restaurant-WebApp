import React from 'react';

function Table({ tableNumber, capacity, isOccupied }) {
  return (
    <div className={`table ${isOccupied ? 'occupied' : ''}`}>
      <p>Table {tableNumber}</p>
      <p>Capacity: {capacity}</p>
      {isOccupied && <p>Occupied</p>}
    </div>
  );
}

export default Table;