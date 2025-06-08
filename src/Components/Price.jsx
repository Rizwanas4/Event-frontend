import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Price() {
  const navigate = useNavigate();

  const handleBuyNow = () => {
    navigate('/login');
  };

  return (
    <div className="bg-gray-900 min-h-screen">
      <section
        id="home"
        className="relative flex flex-col items-center justify-center min-h-screen bg-cover bg-center px-4 py-24 md:py-32"
        style={{
          backgroundImage:
            "url('https://kingsolomonscatering.com/wp-content/uploads/2022/11/bunch-flowers-leaves-table.jpg')",
        }}
      >
        {/* Title with semi-transparent background */}
        <div className="bg-black bg-opacity-60 rounded-lg px-6 py-4 mb-12  max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-pink-500">Our Prices</h2>
        </div>

        {/* Cards container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-7xl w-full">
          {[
            {
              title: 'Basic',
              price: 'Rs.10,000',
              features: [
                'Basic Decoration',
                'Background Music',
                'Standard Photography',
                'Buffet Snacks',
                'Basic Invitation Card',
              ],
            },
            {
              title: 'Moderate',
              price: 'Rs.25,000',
              features: [
                'Premium Decoration',
                'DJ Music',
                'Professional Photography',
                'Full Course Meal',
                'Custom Invitation Card',
              ],
            },
            {
              title: 'Prime',
              price: 'Rs.50,000',
              features: [
                'Luxury Decoration',
                'Live Band',
                'Exclusive Photography & Videography',
                'Gourmet Dining',
                'Luxury Invitation Card',
                'Event Planning Consultation',
              ],
            },
            {
              title: 'Ultra',
              price: 'Rs.1,00,000',
              features: [
                'Ultra Luxury Decoration',
                'Celebrity DJ/Band',
                'Exclusive Photography & Cinematography',
                'Five-Star Catering',
                'Custom Designed Invitation Card',
                'Comprehensive Event Planning',
                'VIP Guest Services',
              ],
            },
          ].map(({ title, price, features }) => (
            <div
              key={title}
              className="bg-white rounded-lg shadow-md flex flex-col p-6 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
            >
              <h3 className="text-xl font-bold text-center mb-2">{title}</h3>
              <p className="text-center text-gray-500 mb-4">{price}</p>
              <ul className="list-disc list-inside space-y-2 mb-6 flex-grow px-2">
                {features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <button
                onClick={handleBuyNow}
                className="mt-auto bg-pink-500 text-white font-bold rounded-lg py-2 hover:bg-pink-700 transition"
              >
                Buy Now
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
