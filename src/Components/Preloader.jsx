const Preloader = () => {
  return (
    <div
      id="loading"
      className="fixed inset-0 z-50 bg-hawar-blue-darker flex items-center justify-center"
    >
      <div className="h-loader">
        <div className="h-bar h-bar1"></div>
        <div className="h-bar h-bar2"></div>
        <div className="h-bridge"></div>
      </div>
    </div>
  );
};

export default Preloader;
