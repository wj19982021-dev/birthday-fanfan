import { useState, useEffect } from 'react';
import './LoadingScreen.css';

export default function LoadingScreen({ onComplete }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      const cleanup = setTimeout(() => {
        onComplete?.();
      }, 800);
      return () => clearTimeout(cleanup);
    }, 2500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className={`loading-screen ${!visible ? 'loading-screen--fade-out' : ''}`}>
      <div className="loading-screen__content">
        <h1 className="loading-screen__title">风起小笺</h1>
        <p className="loading-screen__subtitle">正在送达……</p>
        <div className="loading-screen__dog">
          <svg
            viewBox="0 0 80 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="loading-screen__dog-svg"
          >
            {/* Body */}
            <ellipse cx="40" cy="30" rx="18" ry="10" fill="#fff" />
            {/* Head */}
            <circle cx="60" cy="22" r="8" fill="#fff" />
            {/* Ear */}
            <ellipse cx="57" cy="16" rx="3" ry="5" fill="#fff" />
            {/* Eye */}
            <circle cx="62" cy="21" r="1.5" fill="#2f2a24" />
            {/* Nose */}
            <circle cx="67" cy="23" r="1.5" fill="#2f2a24" />
            {/* Tail */}
            <path
              d="M22 28 Q16 20 18 14"
              stroke="#fff"
              strokeWidth="2.5"
              strokeLinecap="round"
              fill="none"
            />
            {/* Front left leg */}
            <line
              x1="48" y1="38" x2="48" y2="48"
              stroke="#fff"
              strokeWidth="3"
              strokeLinecap="round"
              className="loading-screen__leg--front"
            />
            {/* Front right leg */}
            <line
              x1="44" y1="38" x2="44" y2="48"
              stroke="#fff"
              strokeWidth="3"
              strokeLinecap="round"
              className="loading-screen__leg--front-alt"
            />
            {/* Back left leg */}
            <line
              x1="30" y1="38" x2="30" y2="48"
              stroke="#fff"
              strokeWidth="3"
              strokeLinecap="round"
              className="loading-screen__leg--back"
            />
            {/* Back right leg */}
            <line
              x1="26" y1="38" x2="26" y2="48"
              stroke="#fff"
              strokeWidth="3"
              strokeLinecap="round"
              className="loading-screen__leg--back-alt"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
