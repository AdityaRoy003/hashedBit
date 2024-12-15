// ConfirmationScreen.js
import React from 'react';
import { useLocation } from 'react-router-dom';

const ConfirmationScreen = () => {
  const { state } = useLocation();
  const bookingId = Math.floor(100000 + Math.random() * 900000);

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h2>Seat Booked Successfully!</h2>
      <p>Booking ID: {bookingId}</p>
      <p>Name: {state.name}</p>
      <p>Email: {state.email}</p>
      <p>Mobile: {state.mobile}</p>
    </div>
  );
};

export default ConfirmationScreen;
