/* eslint-disable react/prop-types */

import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import CounterBg from '../assets/images/counter_bg.png'; 
import { counters } from '../Data';

const Counter = () => {
  return (
    <div
      className="counter-outer py-12 bg-hawar-orange  bg-cover bg-fixed text-center"
      style={{ backgroundImage: `url(${CounterBg})` }}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {counters.map((counter, index) => (
            <CounterBox key={index} counter={counter} />
          ))}
        </div>
      </div>
    </div>
  );
};

const CounterBox = ({ counter }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div
      className="counter-box flex flex-col items-center justify-center p-6 bg-white bg-opacity-10 rounded-card shadow-lg hover:shadow-xl transition duration-300"
      ref={ref}
    >
      <figure className="mb-4">
        <img
          src={counter.image}
          alt={counter.label}
          className="w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 object-contain"
        />
      </figure>
      <strong className="counter text-white text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
        {inView ? <CountUp end={counter.count} duration={3} /> : '0'}
      </strong>
      <small className="text-white font-semibold text-sm sm:text-lg lg:text-xl mt-2">
        {counter.label}
      </small>
    </div>
  );
};

export default Counter;
