import React from "react";
import Slider from "react-slick";
import FeaThum1 from "../assets/images/feature-thumb1.png"; // Example image
import FeaThum2 from "../assets/images/feature-thumb2.png"; // Example image
import FeaThum3 from "../assets/images/feature-thumb3.png"; // Example image

const FeatureCarousel = () => {
  // Slick Carousel settings
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll at once
    nextArrow: <button className="slick-next">Next</button>,
    prevArrow: <button className="slick-prev">Prev</button>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const featureClasses = [
    { image: FeaThum1, date: "16 DEC", time: "6:30 AM", title: "Weight Lifting" },
    { image: FeaThum2, date: "16 DEC", time: "6:30 AM", title: "Daily Yoga" },
    { image: FeaThum3, date: "16 DEC", time: "6:30 AM", title: "Running Way" },
  ];

  return (
    <div className="feature-outer py-12 bg-gray-100">
      <div className="container mx-auto">
        <div className="head border-b mb-8">
          <h3 className="text-3xl font-semibold text-center">
            <span>FEATURED CLASSES</span>
          </h3>
        </div>
        <Slider {...settings}>
          {/* Loop over featureClasses to display each item */}
          {featureClasses.map((feature, index) => (
            <div key={index} className="px-4">
              <div className="feature-box bg-white p-6 rounded-lg shadow-md">
                <figure>
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-auto object-cover"
                  />
                  <div className="time-box absolute bottom-4 left-4 bg-black bg-opacity-50 text-white px-4 py-2 rounded-md">
                    <span className="date">{feature.date}</span>
                    <span className="time ml-4">{feature.time}</span>
                  </div>
                </figure>
                <h4 className="text-xl font-semibold mt-4">
                  <a href="classes-detail.html">{feature.title}</a>
                </h4>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default FeatureCarousel;
