/* eslint-disable react/prop-types */

import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import CounterBg from '../assets/images/counter_bg.png';

import counter1 from '../assets/images/counter1.png';
import counter2 from '../assets/images/counter2.png';
import counter3 from '../assets/images/counter3.png';
import counter4 from '../assets/images/counter4.png';

const Counter = () => {
  const counters = [
    { image: counter1, count: 25, label: 'مدربون' },
    { image: counter2, count: 2500, label: 'عملاء راضون' },
    { image: counter3, count: 199, label: 'جوائز تم استلامها' },
    { image: counter4, count: 250, label: 'معدات' },
  ];

  return (
    <div
      className="counter-outer py-12 bg-hawar-orange bg-center bg-full bg-fixed text-center"
      style={{ backgroundImage: `url(${CounterBg})` }}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
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
      className="counter-box flex flex-col items-center justify-center"
      ref={ref}
    >
      <figure className="mb-4">
        <img
          src={counter.image}
          alt={counter.label}
          className="w-20 h-20 object-contain"
        />
      </figure>
      <strong className="counter text-white text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
        {inView ? <CountUp end={counter.count} duration={3} /> : '0'}
      </strong>
      <small className="text-white text-lg sm:text-xl lg:text-2xl mt-2">
        {counter.label}
      </small>
    </div>
  );
};

export default Counter;
