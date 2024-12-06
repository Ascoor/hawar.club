import React from 'react';

// استيراد الصور من مجلد الأصول
import trainer1 from '../assets/images/trainer1.png';
import trainer2 from '../assets/images/trainer2.png';
import trainer3 from '../assets/images/trainer3.png';
import trainer4 from '../assets/images/trainer4.png';

const Trainers = () => {
  const trainers = [
    { image: trainer1, name: "Justin Hessen" },
    { image: trainer2, name: "Romia Rose" },
    { image: trainer3, name: "Simron Wigs" },
    { image: trainer4, name: "John Smile" },
  ];

  return (
    <div className="trainers-outer py-12 bg-gray-100">
      <div className="container mx-auto">
        <div className="head border-b mb-8 text-center">
          <h3 className="text-3xl font-semibold">EXPERT TRAINERS</h3>
        </div>
        <div className="trainers-list">
          <div className="trainers-slider grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* Iterate through the trainers array */}
            {trainers.map((trainer, index) => (
              <div key={index} className="item">
                <div className="trainers-box bg-white p-6 rounded-lg shadow-md text-center">
                  <figure>
                    <img
                      src={trainer.image}
                      alt={trainer.name}
                      className="w-full h-auto object-cover rounded-full mb-4"
                    />
                  </figure>
                  <span className="text-lg font-semibold">{trainer.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trainers;
