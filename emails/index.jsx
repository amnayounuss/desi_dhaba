import React from 'react';
import { Html } from '@react-email/html';
import { Button } from '@react-email/button';

function Email(props) {
  const { url } = props;

  const items = [
    { name: 'Chicken Burger', quantity: 2, price: '$10.00', imageSrc: '...' },
    { name: 'Pizza Margherita', quantity: 1, price: '$12.00', imageSrc: '...' },
  ];

  return (
    <Html lang="en">
      <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: '0 auto', border: '1px solid #ddd', padding:'2%'}}>
        <h2 style={{ backgroundColor: '#333333', padding: '10px', textAlign: 'center', color: '#fdb913' }}>Food Order Confirmation</h2>
        <hr />

        <p style={{ fontWeight: 'bold', textAlign: 'center', color:'white', padding: '10px' }}>Thank you for your order!</p>
        <p style={{ textAlign: 'center',color:'white'}}>Your order has been confirmed and will be delivered shortly.</p>

        <table style={{ width: '100%', borderCollapse: 'collapse',color:'white', marginTop: '20px', marginBottom: '30px' }}>
          <tr>
            <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Item</th>
            <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Quantity</th>
            <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Price</th>
          </tr>
          {items.map((item, index) => (
            <tr key={index}>
              <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <img src={item.imageSrc} style={{ width: '50px', height: '50px' }} />
                  <span style={{ marginLeft: '5px' }}>{item.name}</span>
                </div>
              </td>
              <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>{item.quantity}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>{item.price}</td>
            </tr>
          ))}

        </table>

        <p style={{ fontWeight: 'bold', textAlign: 'center',color:'white'}}>Total: $22.00</p>

        <h3 style={{ textAlign: 'center',color:'white', }}>Delivery Information</h3>
        <p style={{ textAlign: 'center',color:'white', }}>Address: 123 Main St, City, State, ZIP</p>
        <p style={{ textAlign: 'center',color:'white' }}>Contact: (123) 456-7890</p>

        <hr />
        <div style={{ backgroundColor: '#2e2b2b', padding: '30px', textAlign: 'center',color:'white' }}>
          <p>Thank you for choosing our service!</p>
          <p>For any inquiries, please contact us at &nbsp; <a href="mailto:support@example.com">desidhaba@gmail.com</a>.</p>
        </div>
      </div>
    </Html>
  );
}

export default Email;
