const Preloader = () => {
  return (
    <div
      id="loading"
      className="fixed inset-0 z-50 bg-white flex items-center justify-center"
    >
      <div className="h-loader">
        {/* الأعمدة العمودية */}
        <div className="h-bar h-bar1"></div>
        <div className="h-bar h-bar2"></div>
        {/* الجزء الأفقي */}
        <div className="h-bridge"></div>
      </div>
    </div>
  );
};

export default Preloader;
