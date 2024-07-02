import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Price() {
  const navigate = useNavigate();

  const handleBuyNow = () => {
    navigate('/login');
  };

  return (
    <div className="bg-gray-900">
      
      <section className="home flex items-center justify-center min-h-screen bg-cover bg-center" id="home" style={{ backgroundImage: "url('https://kingsolomonscatering.com/wp-content/uploads/2022/11/bunch-flowers-leaves-table.jpg')" }}>
        <div className="absolute top-24 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 rounded-lg p-4">
          <h2 className="text-4xl font-bold text-pink-500">Our Prices</h2>
        </div>
        <div className="container mx-auto px-4 py-16" style={{ marginTop: "100px" }}>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="p-6 bg-white rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <h3 className="text-xl font-bold text-center mb-2">Basic</h3>
              <p className="text-center text-gray-500 mb-4">$500.00</p>
              <ul className="list-disc space-y-2 px-4">
                <li>Basic Decoration</li>
                <li>Background Music</li>
                <li>Standard Photography</li>
                <li>Buffet Snacks</li>
                <li>Basic Invitation Card</li>
              </ul>
              <button onClick={handleBuyNow} className="mt-32 px-4 py-2 bg-pink-500 text-white font-bold rounded-lg hover:bg-pink-700">Buy Now</button>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <h3 className="text-xl font-bold text-center mb-2">Prime</h3>
              <p className="text-center text-gray-500 mb-4">$600.00</p>
              <ul className="list-disc space-y-2 px-4">
                <li>Premium Decoration</li>
                <li>DJ Music</li>
                <li>Professional Photography</li>
                <li>Full Course Meal</li>
                <li>Custom Invitation Card</li>
              </ul>
              <button onClick={handleBuyNow} className="mt-32 px-4 py-2 bg-pink-500 text-white font-bold rounded-lg hover:bg-pink-700">Buy Now</button>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <h3 className="text-xl font-bold text-center mb-2">Luxury</h3>
              <p className="text-center text-gray-500 mb-4">$800.00</p>
              <ul className="list-disc space-y-2 px-4">
                <li>Luxury Decoration</li>
                <li>Live Band</li>
                <li>Exclusive Photography & Videography</li>
                <li>Gourmet Dining</li>
                <li>Luxury Invitation Card</li>
                <li>Event Planning Consultation</li>
              </ul>
              <button onClick={handleBuyNow} className="mt-20 px-4 py-2 bg-pink-500 text-white font-bold rounded-lg hover:bg-pink-700">Buy Now</button>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <h3 className="text-xl font-bold text-center mb-2">Ultra</h3>
              <p className="text-center text-gray-500 mb-4">$1000.00</p>
              <ul className="list-disc space-y-2 px-4">
                <li>Ultra Luxury Decoration</li>
                <li>Celebrity DJ/Band</li>
                <li>Exclusive Photography & Cinematography</li>
                <li>Five-Star Catering</li>
                <li>Custom Designed Invitation Card</li>
                <li>Comprehensive Event Planning</li>
                <li>VIP Guest Services</li>
              </ul>
              <button onClick={handleBuyNow} className="mt-4 px-4 py-2 bg-pink-500 text-white font-bold rounded-lg hover:bg-pink-700">Buy Now</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

