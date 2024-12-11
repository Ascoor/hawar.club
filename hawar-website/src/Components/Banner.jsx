import React, { useEffect, useRef, useState } from "react";
import { animate } from "motion/react";
import VideoBackground from "./VideoBackground";

function useAnimateText(ref, text, duration, callback) {
  useEffect(() => {
    if (!ref.current || !text) return;

    const words = text.split(" ");
    ref.current.innerHTML = words
      .map(
        (word, i) =>
          `<span style="opacity:0; transform:translateX(100px);" class="word-${i}">${word}</span>`
      )
      .join(" ");

    words.forEach((_, i) => {
      animate(`.word-${i}`, { opacity: [0, 1], x: [100, 0] }, { duration: 0.4, delay: i * 0.1 });
    });

    const timeout = setTimeout(() => {
      words.forEach((_, i) => {
        animate(`.word-${i}`, { opacity: [1, 0], x: [0, 100] }, { duration: 0.4, delay: i * 0.2 });
      });
      setTimeout(callback, words.length * 0.4 * 200); 
    }, duration);

    return () => clearTimeout(timeout);
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
  const slogans = [
    "كن جزءًا من الحدث",
    "التعاون هو جوهر النجاح، والأساس الذي نبني عليه رؤيتنا.",
    "معًا، نؤسس مجتمعًا ملهم يستطيع  أن يحقق التغيير.",
    "لنكمل تاريخ من الإنجازات، ومستقبل من الطموحات",
      "رؤيتنا تتجاوز الحدود، لنحقق أثرًا لا يُنسى.",
      "الشغف هنا ليس مجرد فكرة.",
      " بل هو الطريق نحو إنجازات ملموسة.",
      "نسعى دائمًا لنرتقي إلى قمم التميز، يدًا بيد.",
      "بانضمامك إلينا، نقترب من تحقيق رؤيتنا معًا.",
      "لأن فى كل إنجاز بداية لإنجاز أعظم."

    ];

  const resetState = () => {
    setActiveSlogan(0);
    setShowSlogans(true);
    setShowClubSection(false);
    setShowButtons(false);
  };
  useAnimateText(
    sloganRef, 
    showSlogans ? slogans[activeSlogan] : "", 
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
      animate(clubRef.current, { opacity: [1, 0] }, { duration: 1 }).then(() => {
        setShowClubSection(false);
        setShowButtons(true);
      });
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
  }, [videoReady, activeSlogan]);

  return (
    <div className="relative w-full overflow-hidden min-h-screen">
    <VideoBackground
      ref={videoRef}
      onVideoReady={setVideoReady}
      onTimeUpdate={handleTimeUpdate}
    />

    {videoReady && (
      <div className="relative flex flex-col items-center justify-center min-h-screen px-4 py-12 lg:py-[100px]">
        {}
        {showSlogans && (
          <div
            ref={sloganRef}
            className="text-center font-bold italic text-white drop-shadow-lg leading-tight"
            style={{
              fontSize: "clamp(1.5rem, 2.5vw, 3rem)",
              lineHeight: "clamp(2rem, 3vw, 4rem)",
            }}
          >
            {slogans[activeSlogan]}
          </div>
        )}

        {}
        {showClubSection && (
          <div ref={clubRef} className="text-center transition-opacity duration-500" style={{ opacity: 1 }}>
            <h2
              className="font-bold italic text-orange-500 drop-shadow-lg"
              style={{
                fontSize: "clamp(2rem, 5vw, 6rem)",
                lineHeight: "clamp(2.5rem, 5.5vw, 7rem)",
              }}
            >
              نادي الحوار
            </h2>
            <p
              className="text-white mt-4 drop-shadow-md text-center max-w-[520px]"
              style={{
                fontSize: "clamp(1.2rem, 1.5vw, 1.25rem)",
                lineHeight: "clamp(1.5rem, 2vw, 2.5rem)",
              }}
            >
              انضم الآن وكن شريكًا في كتابة فصول جديدة من رؤية تتطلع دومًا إلى المزيد.
            </p>
          </div>
        )}

        {}
        {showButtons && (
          <div className="absolute bottom-8 left-0 right-0 z-10 flex justify-center gap-4">
            <a
              href="/activities"
              className="btn inline-block py-2 px-4 sm:py-3 sm:px-6 bg-orange-500 text-white rounded border-2 border-orange-500 hover:bg-white hover:text-orange-500 transition-all"
              style={{
                fontSize: "clamp(0.875rem, 1.25vw, 1.125rem)",
                padding: "clamp(0.5rem, 1vw, 0.75rem) clamp(1rem, 2vw, 1.5rem)",
              }}
            >
              استكشف أنشطتنا
            </a>
            <a
              href="/contact-us"
              className="btn inline-block py-2 px-4 sm:py-3 sm:px-6 bg-white text-orange-500 rounded border-2 border-orange-500 hover:bg-orange-500 hover:text-white transition-all"
              style={{
                fontSize: "clamp(0.875rem, 1.25vw, 1.125rem)",
                padding: "clamp(0.5rem, 1vw, 0.75rem) clamp(1rem, 2vw, 1.5rem)",
              }}
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