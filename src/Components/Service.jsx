import React from 'react';

export default function Service() {
  return (
    <div className="text-white">
      <section
        className="home flex flex-col items-center justify-center min-h-screen relative px-4 md:px-8 lg:px-16"
        id="home"
      >
        <video
          autoPlay
          muted
          loop
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source
            src="https://videos.pexels.com/video-files/14534903/14534903-hd_1280_720_25fps.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        <div className="bg-black bg-opacity-60 rounded-lg p-6 z-10 my-10 max-w-4xl w-full text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-pink-500">
            Our Services
          </h2>
          <p className="text-gray-400 mt-3 text-sm md:text-base">
            We provide a range of services to make your events unforgettable
          </p>
        </div>

        <main className="w-full max-w-7xl p-2 md:p-6">
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                img: "https://cdn.pixabay.com/photo/2016/03/27/20/52/blue-1284240_960_720.jpg",
                title: "Custom Invitation Design",
                desc:
                  "Impress your guests from the start with unique and personalized invitations.",
                icon: "✉️",
              },
              {
                img: "https://cdn.pixabay.com/photo/2022/05/22/19/15/photographer-7214400_960_720.jpg",
                title: "Professional Photo & Video",
                desc:
                  "Capture every special moment of your event with our experienced photographers and videographers.",
                icon: "🎥",
              },
              {
                img: "https://cdn.pixabay.com/photo/2020/08/07/23/34/concert-5471823_1280.jpg",
                title: "Live Entertainment & DJs",
                desc:
                  "Find the perfect entertainment to liven up your event and keep your guests dancing.",
                icon: "🎵",
              },
              {
                img: "https://cdn.pixabay.com/photo/2020/12/17/11/07/bus-5838990_960_720.jpg",
                title: "Event Transportation & Rentals",
                desc:
                  "We provide seamless transportation solutions to ensure your guests arrive stress-free.",
                icon: "🚐",
              },
              {
                img: "https://cdn.pixabay.com/photo/2022/05/06/16/20/wedding-7178668_960_720.jpg",
                title: "Venue Selection & Coordination",
                desc:
                  "Let us help you find the perfect venue and handle all the logistics for a smooth event.",
                icon: "📍",
              },
              {
                img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
                title: "Catering Services",
                desc:
                  "Delicious and diverse menu options tailored to satisfy all your guests.",
                icon: "🍽️",
              },
            ].map(({ img, title, desc, icon }, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-5 flex flex-col items-center space-y-4 transform transition-transform duration-300 hover:scale-105 shadow-md"
              >
                <img
                  src={img}
                  alt={title}
                  className="w-full h-32 object-cover rounded-md"
                  loading="lazy"
                />
                <span className="text-5xl text-pink-500">{icon}</span>
                <h3 className="text-2xl font-bold text-pink-500 text-center">
                  {title}
                </h3>
                <p className="text-center text-black text-sm md:text-base">
                  {desc}
                </p>
              </div>
            ))}
          </section>
        </main>
      </section>
    </div>
  );
}
