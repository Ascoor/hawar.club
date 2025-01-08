import React, { useEffect, useRef, useState, useReducer } from 'react';
import VideoBackground from './VideoBackground';
import { slogans } from '../Data';
import { Link } from 'react-scroll';

const initialState = {
  activeSlogan: 0,
  showSlogans: true,
  showClubSection: false,
  showButtons: false,
};

function bannerReducer(state, action) {
  switch (action.type) {
    case 'NEXT_SLOGAN':
      return { ...state, activeSlogan: state.activeSlogan + 1 };
    case 'SHOW_CLUB_SECTION':
      return { ...state, showSlogans: false, showClubSection: true };
    case 'SHOW_BUTTONS':
      return { ...state, showClubSection: false, showButtons: true };
    case 'RESET':
      return initialState;
    default:
      return state;
  }
}

const Banner = () => {
  const videoRef = useRef(null);
  const sloganRef = useRef(null);
  const clubRef = useRef(null);

  const [videoReady, setVideoReady] = useState(false);
  const [state, dispatch] = useReducer(bannerReducer, initialState);

  const VIDEO_DURATION = 58;
  const SLOGAN_DURATION = 4200;

  const resetState = () => {
    dispatch({ type: 'RESET' });
  };
  const useAnimateText = (ref, text, duration, callback) => {
    useEffect(() => {
      if (!ref.current || !text) return;

      // تقسيم النص إلى كلمات
      const words = text.split(' ');
      ref.current.innerHTML = words
        .map(
          (word, i) =>
            `<span style="opacity:0; transform:translateY(20px);" class="word-${i}">${word}</span>`
        )
        .join(' ');

      // تأثير ظهور الكلمات تدريجياً
      words.forEach((_, i) => {
        setTimeout(() => {
          const element = document.querySelector(`.word-${i}`);
          if (element) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
            element.style.transition = `opacity 0.8s ease, transform 0.8s ease`;
          }
        }, i * 200); // التأخير لكل كلمة (200 مللي ثانية)
      });

      // تأثير اختفاء النص بالكامل
      const exitTimeout = setTimeout(() => {
        words.forEach((_, i) => {
          const element = document.querySelector(`.word-${i}`);
          if (element) {
            element.style.opacity = '0';
            element.style.transform = 'translateY(-20px)';
            element.style.transition = `opacity 0.8s ease, transform 0.8s ease`;
          }
        });
        // استدعاء الدالة callback بعد انتهاء التأثير
        setTimeout(callback, 800); // الانتظار حتى انتهاء الحركة (800 مللي ثانية)
      }, duration);

      // تنظيف التايمر عند الإلغاء
      return () => clearTimeout(exitTimeout);
    }, [ref, text, duration, callback]);
  };
  useAnimateText(
    sloganRef,
    state.showSlogans ? slogans[state.activeSlogan].text : '',
    SLOGAN_DURATION,
    () => {
      if (state.activeSlogan < slogans.length - 1) {
        dispatch({ type: 'NEXT_SLOGAN' });
      } else {
        dispatch({ type: 'SHOW_CLUB_SECTION' });
      }
    }
  );

  const handleTimeUpdate = (currentTime) => {
    if (currentTime >= VIDEO_DURATION - 8 && state.showClubSection) {
      if (clubRef.current) {
        clubRef.current.style.opacity = '0';
        setTimeout(() => {
          dispatch({ type: 'SHOW_BUTTONS' });
        }, 1000);
      }
    }

    if (currentTime >= VIDEO_DURATION) {
      videoRef.current.pause();
      setTimeout(() => {
        resetState();
        videoRef.current.currentTime = 0;
        videoRef.current.play();
      }, 5000);
    }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-hawar-blue-darker">
      <VideoBackground
        ref={videoRef}
        onVideoReady={setVideoReady}
        onTimeUpdate={handleTimeUpdate}
      />

      {videoReady && (
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          {state.showSlogans && (
            <h1
              ref={sloganRef}
              className="text-white font-['cairo'] font-bold text-xl xs:text-2xl sm:text-3xl lg:text-4xl text-center tracking-wide"
            >
              {slogans[state.activeSlogan].text}
            </h1>
          )}

          {state.showClubSection && (
            <div
              ref={clubRef}
              className="text-center transition-opacity duration-[1000ms] transform transition-transform scale-90 opacity-0"
              style={{
                opacity: state.showClubSection ? 1 : 0,
                transform: state.showClubSection ? 'scale(1)' : 'scale(0.9)',
                transition: 'all 1s ease',
              }}
            >
              <h1 className="font-bold text-hawar-orange text-6xl sm:text-7xl lg:text-8xl font-['tharwat']">
                نادي الحوار
              </h1>
              <p className="text-white mt-8 text-xl sm:text-2xl lg:text-3xl font-semibold leading-relaxed drop-shadow-md text-center mx-auto max-w-[700px]">
                حيث تبدأ الأحلام، وتنطلق الرؤى، وتُصنع الإنجازات.
              </p>
            </div>
          )}

          {state.showButtons && (
            <div className="absolute bottom-16 flex flex-wrap justify-center gap-4">
              <Link
                to="footer"
                className="px-6 py-3 bg-hawar-orange text-white font-bold rounded-full shadow-lg hover:bg-hawar-blue-dark hover:text-hawar-orange-light transition duration-300"
              >
                انضم إلينا الآن
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Banner;
