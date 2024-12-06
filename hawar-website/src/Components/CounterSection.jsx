import React from 'react';

// استيراد الصور
import counter1 from '../assets/images/counter1.png';
import counter2 from '../assets/images/counter2.png';
import counter3 from '../assets/images/counter3.png';
import counter4 from '../assets/images/counter4.png';

const CounterSection = () => {
  const counters = [
    { image: counter1, value: 25, label: 'Trainers' },
    { image: counter2, value: 2500, label: 'Satisfied Customers' },
    { image: counter3, value: 199, label: 'Received Awards' },
    { image: counter4, value: 250, label: 'Equipments' }
  ];

  return (
    <div className="counter-outer py-12 bg-gray-100">
      <div className="container mx-auto">
        <div className="row flex flex-wrap justify-between">
          {counters.map((counter, index) => (
            <div key={index} className="counter-box w-full sm:w-1/2 md:w-1/4 px-4 mb-8 text-center">
              <figure>
                <img
                  src={counter.image}
                  alt={counter.label}
                  className="w-16 h-16 mx-auto mb-4"
                />
              </figure>
              <strong className="counter text-4xl font-bold block">{counter.value}</strong>
              <small className="text-lg text-gray-500">{counter.label}</small>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CounterSection;
