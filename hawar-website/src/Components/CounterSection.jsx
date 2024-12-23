import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import AOS from 'aos';
import CounterBg from '../assets/images/counter_bg.png';
import { counters } from '../Data';

const Counter = () => {
  AOS.init({
    duration: 1000,
    once: true,
  });

  return (
    <div
      className="counter-outer py-12 bg-hawar-orange-dark bg-cover bg-full text-center"
      style={{ backgroundImage: `url(${CounterBg})` }}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {counters.map((counter, index) => (
            <CounterBox
              key={index}
              counter={counter}
              animationDelay={index * 200}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const CounterBox = ({ counter, animationDelay }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div
      className="counter-box flex flex-col items-center justify-center p-6 shadow-lg hover:shadow-xl transition duration-300"
      ref={ref}
      data-aos="fade-up"
      data-aos-delay={animationDelay}
    >
      <figure
        className="mb-4"
        data-aos="zoom-in"
        data-aos-delay={animationDelay + 100}
      >
        <img
          src={counter.image}
          alt={counter.label}
          className="w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 object-contain"
        />
      </figure>
      <strong
        className="counter text-white text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight"
        data-aos="fade-in"
        data-aos-delay={animationDelay + 200}
      >
        {inView ? <CountUp end={counter.count} duration={3} /> : '0'}
      </strong>
      <small
        className="text-white font-semibold text-sm sm:text-lg lg:text-xl mt-2"
        data-aos="fade-up"
        data-aos-delay={animationDelay + 300}
      >
        {counter.label}
      </small>
    </div>
  );
};

export default Counter;
