import React from 'react';
const Waves = () => {
  return (
    <div className="relative w-full h-[400px] overflow-hidden bg-gradient-to-b from-blue-900 to-blue-800">
      {/* Wave Layers */}
      <div className="absolute w-[540px] h-[700px] left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2  opacity-60 rounded-[50%] wave"></div>
      <div className="absolute w-[540px] h-[700px] left-1/2 top-[200px] transform -translate-x-1/2 -translate-y-1/2  opacity-50 rounded-[50%] animate-wave delay-300 wave-1"></div>
      <div className="absolute w-[540px] h-[700px] left-1/2 top-[400px] transform -translate-x-1/2 -translate-y-1/2  opacity-40 rounded-[50%] animate-wave delay-600 wave-  2"></div>
    </div>
  );
};

export default Waves;
