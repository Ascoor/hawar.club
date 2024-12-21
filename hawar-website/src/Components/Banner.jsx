import { useEffect, useRef, useState } from 'react';
import { animate } from 'motion/react';
import VideoBackground from './VideoBackground';
import { slogans } from '../Data';
function useAnimateText(ref, text, duration, callback) {
  useEffect(() => {
    if (!ref.current || !text) return;

    const words = text.split(' ');
    ref.current.innerHTML = words
      .map(
        (word, i) =>
          `<span style="opacity:0; transform:translateX(100px);" class="word-${i}">${word}</span>`
      )
      .join(' ');

    // تأثير الدخول: الكلمات تدخل من اليمين إلى المركز
    words.forEach((_, i) => {
      animate(
        `.word-${i}`,
        { opacity: [0, 1], x: [100, 0] },
        { duration: 0.4, delay: i * 0.1 }
      );
    });

    // جدولة تأثير الخروج بعد انتهاء العرض
    const exitTimeout = setTimeout(() => {
      words.forEach((_, i) => {
        animate(
          `.word-${i}`,
          { opacity: [1, 0], x: [0, -100] }, // الكلمات تخرج إلى اليسار
          { duration: 0.4, delay: i * 0.1 }
        );
      });

      // تنفيذ `callback` بعد انتهاء تأثير الخروج
      setTimeout(callback, words.length * 0.1 * 400);
    }, duration);

    return () => clearTimeout(exitTimeout);
  }, [ref, text, duration, callback]);
}


const Banner = () => {
  const videoRef = useRef(null);
  const sloganRef = useRef(null);
  const clubRef = useRef(null);

  const [videoReady, setVideoReady] = useState(false);
  const [activeSlogan, setActiveSlogan] = useState(0);
  const [showSlogans, setShowSlogans] = useState(true);
  const [showClubSection, setShowClubSection] = useState(false);
  const [showButtons, setShowButtons] = useState(false);

  const VIDEO_DURATION = 58;
  const SLOGAN_DURATION = 4500;

  const resetState = () => {
    setActiveSlogan(0);
    setShowSlogans(true);
    setShowClubSection(false);
    setShowButtons(false);
  }; 
  useAnimateText(
    sloganRef,
    showSlogans ? slogans[activeSlogan].text : '',
    SLOGAN_DURATION,
    () => {
      if (activeSlogan < slogans.length - 1) {
        setActiveSlogan(activeSlogan + 1);
      } else {
        handleSlogansCompletion();
      }
    }
  );
  

  const handleSlogansCompletion = () => {
    setShowSlogans(false);
    setTimeout(() => setShowClubSection(true), 500);
  };

  const handleTimeUpdate = (currentTime) => {
    if (currentTime >= VIDEO_DURATION - 8 && showClubSection) {
      animate(clubRef.current, { opacity: [1, 0] }, { duration: 1 }).then(
        () => {
          setShowClubSection(false);
          setShowButtons(true);
        }
      );
    }

    if (currentTime >= VIDEO_DURATION) {
      videoRef.current.pause();
      setTimeout(() => {
        setShowButtons(false);
        resetState();
        videoRef.current.currentTime = 0;
        videoRef.current.play();
      }, 5000);
    }
  };

  useEffect(() => {
    if (videoReady) {
      const interval = setInterval(() => {
        if (activeSlogan < slogans.length - 1) {
          setActiveSlogan((prev) => prev + 1);
        } else {
          handleSlogansCompletion();
          clearInterval(interval);
        }
      }, SLOGAN_DURATION);
      return () => clearInterval(interval);
    }
  }, [videoReady, activeSlogan, slogans.length]);

  return (
    <div className="relative w-full h-screen  overflow-hidden bg-hawar-blue-darker">
      {/* فيديو الخلفية */}
      <VideoBackground
        ref={videoRef}
        onVideoReady={setVideoReady}
        onTimeUpdate={handleTimeUpdate}
      />

      {videoReady && (
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          {/* الشعارات */}
          {showSlogans && (
            <h1
              ref={sloganRef}
              className="text-white text-center font-bold italic text-xl sm:text-2xl lg:text-4xl tracking-wide"
            >
              {slogans[activeSlogan].text}
            </h1>
          )}

          {showClubSection && (
            <div
              ref={clubRef}
              className="text-center transition-opacity py-12 duration-500"
              style={{ opacity: 1 }}
            >
              <h1 className="font-bold   text-hawar-orange drop-shadow-lg text-6xl">
                نادي الحوار
              </h1>
              <p className="text-white mt-4 drop-shadow-md text-center max-w-[520px]">
                انضم الآن وكن شريكًا في كتابة فصول جديدة من رؤية تتطلع دومًا إلى
                المزيد.
              </p>
            </div>
          )}
          {showButtons && (
            <div
              className="absolute bottom-8 flex flex-wrap justify-center gap-4"
              style={{ left: '50%', transform: 'translateX(-50%)' }}
            >
              <a
                href="/contact-us"
                className="btn bg-hawar-orange text-white px-6 py-3 rounded transition hover:bg-orange-500 hover:text-white"
              >
                انضم إلينا الآن
              </a>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Banner;
