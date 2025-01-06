import { useEffect, useRef, useState, useReducer } from 'react';
import { animate } from 'motion/react';
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
  const SLOGAN_DURATION = 4500;

  const resetState = () => {
    dispatch({ type: 'RESET' });
  };

  const useAnimateText = (ref, text, duration, callback) => {
    useEffect(() => {
      if (!ref.current || !text) return;

      const words = text.split(' ');
      ref.current.innerHTML = words
        .map(
          (word, i) =>
            `<span style="opacity:0; transform:translateX(100px);" class="word-${i}">${word}</span>`
        )
        .join(' ');

      words.forEach((_, i) => {
        animate(
          `.word-${i}`,
          { opacity: [0, 1], x: [100, 0] },
          { duration: 0.4, delay: i * 0.1 }
        );
      });

      const exitTimeout = setTimeout(() => {
        words.forEach((_, i) => {
          animate(
            `.word-${i}`,
            { opacity: [1, 0], x: [0, -100] },
            { duration: 0.4, delay: i * 0.1 }
          );
        });

        setTimeout(callback, words.length * 0.1 * 400);
      }, duration);

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
      animate(clubRef.current, { opacity: [1, 0] }, { duration: 1 }).then(
        () => {
          dispatch({ type: 'SHOW_BUTTONS' });
        }
      );
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
              className="text-white font-amiri font-bold text-xl xs:text-2xl sm:text-3xl lg:text-4xl text-center tracking-wide"
            >
              {slogans[state.activeSlogan].text}
            </h1>
          )}

          {state.showClubSection && (
            <div
              ref={clubRef}
              className="text-center transition-opacity duration-500 py-12"
              style={{ opacity: 1 }}
            >
              <h1 className="font-bold text-hawar-orange text-6xl sm:text-7xl lg:text-8xl leading-tight font-tharwat">
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
