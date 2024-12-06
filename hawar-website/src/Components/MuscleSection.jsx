import React from 'react';

// استيراد الصور
import muscleImg from '../assets/images/mucle-img.png';

const MuscleSection = () => {
  return (
    <div className="muscle-outer relative py-16 bg-gray-200">
      <figure>
        <img src={muscleImg} alt="Muscle Building" className="w-full h-full object-cover opacity-60" />
      </figure>
      <div className="muscle-para absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white px-6 py-8">
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-2">MUSCLE BUILDING</h3>
          <h4 className="text-xl font-semibold mb-4">12-Week Bulking Trainer Expert Brandon Poe</h4>
          <a
            href="contact-us.html"
            className="btn px-8 py-3 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition duration-300"
          >
            JOIN WITH US
          </a>
        </div>
      </div>
    </div>
  );
};

const ClassSchedule = () => {
  const schedule = [
    { day: 'Monday', course: 'Yoga', time: '10:00 am - 12:00 pm', instructor: 'Robert Smith' },
    { day: 'Tuesday', course: 'Pilates', time: '2:00 pm - 4:00 pm', instructor: 'Sarah Lee' },
    { day: 'Wednesday', course: 'Strength Training', time: '11:00 am - 1:00 pm', instructor: 'James Bond' },
    { day: 'Thursday', course: 'HIIT', time: '3:00 pm - 5:00 pm', instructor: 'Alice Cooper' },
    { day: 'Friday', course: 'Zumba', time: '12:00 pm - 2:00 pm', instructor: 'Maria Taylor' },
    { day: 'Saturday', course: 'CrossFit', time: '10:00 am - 12:00 pm', instructor: 'David Lee' },
    { day: 'Sunday', course: 'Yoga', time: '9:00 am - 11:00 am', instructor: 'Robert Smith' }
  ];

  return (
    <div className="classSch-outer py-12 bg-gray-100">
      <div className="container mx-auto">
        <div className="head mb-6 text-center">
          <h3 className="text-3xl font-semibold">CLASS SCHEDULE</h3>
        </div>
        <ul className="tabs flex justify-center space-x-4 mb-6">
          {schedule.map((day, index) => (
            <li key={index} className={`cursor-pointer ${index === 0 ? 'active' : ''}`}>
              <a href={`#${day.day.toLowerCase()}`} className="text-lg">{day.day}</a>
            </li>
          ))}
        </ul>
        <div className="table-outer overflow-x-auto">
          <table className="table-auto w-full border-collapse">
            <thead>
              <tr>
                <th className="px-4 py-2 border text-left">Course</th>
                <th className="px-4 py-2 border text-left">Time</th>
                <th className="px-4 py-2 border text-left">Instructor</th>
                <th className="px-4 py-2 border text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {schedule.map((day, index) => (
                <tr key={index} className="border-t">
                  <td className="px-4 py-2">{day.course}</td>
                  <td className="px-4 py-2">{day.time}</td>
                  <td className="px-4 py-2">{day.instructor}</td>
                  <td className="px-4 py-2">
                    <a href="contact-us.html" className="btn bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 transition duration-300">
                      Join Now
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const TimeSchedule = () => {
  return (
    <div>
      <MuscleSection />
      <ClassSchedule />
    </div>
  );
};

export default TimeSchedule;
