import React, { useContext, useState } from 'react';
import Title from '../components/Title';
import CartTotal from '../components/CartTotal';
import { assets } from '../assets/assets';
import { ShopContext } from '../context/ShopContext';
import { QRCodeCanvas as QRCode } from 'qrcode.react';


const PlaceOrder = () => {
  const [method, setMethod] = useState('cod');
  const [showQRCode, setShowQRCode] = useState(false); // For showing QR code
  const { navigate } = useContext(ShopContext);

  const handlePlaceOrder = () => {
    // Here you can create order details or payment link
    const orderData = {
      items: ['Item1', 'Item2'], // Example, replace with cart items
      method,
      total: 500, // Replace with cart total
    };

    // Show QR code with order/payment data
    setShowQRCode(true);

    // Optional: navigate after some time
    // navigate('/orders');
  };

  return (
    <div className="flex flex-col sm:flex-row justify-between gap-8 pt-6 sm:pt-14 min-h-[80vh] border-t border-gray-200">
      
      {/* Delivery Information */}
      <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
        <Title text1="DELIVERY" text2="INFORMATION" />

        {/* Inputs */}
        <div className="flex gap-3">
          <input type="text" placeholder="First Name" className="border border-gray-300 rounded py-2 px-4 w-full focus:outline-none focus:ring-1 focus:ring-black" />
          <input type="text" placeholder="Last Name" className="border border-gray-300 rounded py-2 px-4 w-full focus:outline-none focus:ring-1 focus:ring-black" />
        </div>
        <input type="email" placeholder="Email Address" className="border border-gray-300 rounded py-2 px-4 w-full focus:outline-none focus:ring-1 focus:ring-black" />
        <input type="text" placeholder="Street" className="border border-gray-300 rounded py-2 px-4 w-full focus:outline-none focus:ring-1 focus:ring-black" />
        <div className="flex gap-3">
          <input type="text" placeholder="City" className="border border-gray-300 rounded py-2 px-4 w-full focus:outline-none focus:ring-1 focus:ring-black" />
          <input type="text" placeholder="State" className="border border-gray-300 rounded py-2 px-4 w-full focus:outline-none focus:ring-1 focus:ring-black" />
        </div>
        <div className="flex gap-3">
          <input type="number" placeholder="Zipcode" className="border border-gray-300 rounded py-2 px-4 w-full focus:outline-none focus:ring-1 focus:ring-black" />
          <input type="text" placeholder="Country" className="border border-gray-300 rounded py-2 px-4 w-full focus:outline-none focus:ring-1 focus:ring-black" />
        </div>
        <input type="number" placeholder="Phone" className="border border-gray-300 rounded py-2 px-4 w-full focus:outline-none focus:ring-1 focus:ring-black" />
      </div>

      {/* Order Summary & Payment */}
      <div className="flex flex-col gap-8 w-full sm:max-w-[480px]">
        <CartTotal />

        <div>
          <Title text1="PAYMENT" text2="METHOD" />
          <div className="flex flex-col lg:flex-row gap-4 mt-6">
            <div onClick={() => setMethod('stripe')} className={`flex items-center gap-3 border p-4 rounded-md cursor-pointer hover:shadow-md transition ${method === 'stripe' ? 'border-green-500' : ''}`}>
              <span className={`w-4 h-4 border rounded-full ${method === 'stripe' ? 'bg-green-400' : ''}`}></span>
              <img src={assets.stripe_logo} alt="Stripe Logo" className="h-6" />
            </div>
            <div onClick={() => setMethod('razorpay')} className={`flex items-center gap-3 border p-4 rounded-md cursor-pointer hover:shadow-md transition ${method === 'razorpay' ? 'border-green-500' : ''}`}>
              <span className={`w-4 h-4 border rounded-full ${method === 'razorpay' ? 'bg-green-400' : ''}`}></span>
              <img src={assets.razorpay_logo} alt="Razorpay Logo" className="h-6" />
            </div>
            <div onClick={() => setMethod('cod')} className={`flex items-center gap-3 border p-4 rounded-md cursor-pointer hover:shadow-md transition ${method === 'cod' ? 'border-green-500' : ''}`}>
              <span className={`w-4 h-4 border rounded-full ${method === 'cod' ? 'bg-green-400' : ''}`}></span>
              <p className="text-gray-500 text-sm font-medium ml-2">CASH ON DELIVERY</p>
            </div>
          </div>

          {/* Place Order Button */}
          <div className="w-full text-right mt-8">
            <button onClick={handlePlaceOrder} className="bg-black text-white px-16 py-3 text-sm rounded hover:bg-gray-900 transition">
              PLACE ORDER
            </button>
          </div>

          {/* QR Code Display */}
          {showQRCode && (
            <div className="mt-6 flex justify-center">
              <QRCode
                value={JSON.stringify({ method, total: 500, items: ['Item1', 'Item2'] })}
                size={200}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
