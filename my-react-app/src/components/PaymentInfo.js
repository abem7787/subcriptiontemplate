import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PaymentInfo = () => {
  const [paymentData, setPaymentData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPaymentData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/payment');
        setPaymentData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching payment data:', error);
      }
    };

    fetchPaymentData();
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {/* Render payment data here */}
          <p>Payment Amount: {paymentData.amount}</p>
          <p>Payment Date: {paymentData.date}</p>
          {/* Add more details as needed */}
        </div>
      )}
    </div>
  );
};

export default PaymentInfo;
