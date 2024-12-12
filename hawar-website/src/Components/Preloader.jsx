const Preloader = () => {
  return (
    <div
      id="loading"
      className="fixed inset-0 z-50 bg-white flex items-center justify-center"
    >
      <div className="sk-folding-cube animate-spin-slow">
        <div className="sk-cube sk-cube1"></div>
        <div className="sk-cube sk-cube2"></div>
        <div className="sk-cube sk-cube4"></div>
        <div className="sk-cube sk-cube3"></div>
      </div>
    </div>
  );
};

export default Preloader;
