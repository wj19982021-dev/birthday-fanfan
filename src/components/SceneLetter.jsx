import React, { useState, useEffect, useRef, useCallback } from 'react';
import DogMascot from './DogMascot';
import './SceneLetter.css';

const LETTER_LINES = [
  { text: '今天不说太多啦，', type: 'line' },
  { text: '就送你一份小祝福，', type: 'line' },
  { text: '也送你一份慢慢来的心意。', type: 'line' },
  { text: '', type: 'gap' },
  { text: '愿你三十岁，', type: 'line' },
  { text: '仍有眼里的光，', type: 'line' },
  { text: '也有此刻的安稳与从容。', type: 'line' },
  { text: '', type: 'gap' },
  { text: '生日快乐，', type: 'highlight' },
  { text: '小范同学。', type: 'highlight' },
  { text: '', type: 'gap' },
  { text: '看到这里就好，', type: 'line' },
  { text: '今天只负责做开心的自己。', type: 'line' },
];

const SceneLetter = () => {
  const [inView, setInView] = useState(false);
  const [finalRevealed, setFinalRevealed] = useState(false);
  const [letterFading, setLetterFading] = useState(false);
  const [extraPetals, setExtraPetals] = useState(false);
  const sceneRef = useRef(null);

  /* IntersectionObserver: trigger entrance animation */
  useEffect(() => {
    const el = sceneRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  /* Handle the "accept" button click */
  const handleAccept = useCallback(() => {
    setLetterFading(true);
    setExtraPetals(true);

    /* Small delay before showing the final message */
    setTimeout(() => {
      setFinalRevealed(true);
    }, 600);
  }, []);

  return (
    <section className="scene-letter" ref={sceneRef}>
      {/* Ink wash background decoration */}
      <div className="scene-letter__ink-wash scene-letter__ink-wash--1" aria-hidden="true" />
      <div className="scene-letter__ink-wash scene-letter__ink-wash--2" aria-hidden="true" />

      {/* Falling petals (always) */}
      <div className="scene-letter__petals" aria-hidden="true">
        <span className="scene-letter__petal scene-letter__petal--1" />
        <span className="scene-letter__petal scene-letter__petal--2" />
        <span className="scene-letter__petal scene-letter__petal--3" />
        <span className="scene-letter__petal scene-letter__petal--4" />
        <span className="scene-letter__petal scene-letter__petal--5" />
        <span className="scene-letter__petal scene-letter__petal--6" />
        <span className="scene-letter__petal scene-letter__petal--7" />
        <span className="scene-letter__petal scene-letter__petal--8" />
      </div>

      {/* Extra petals burst after button click */}
      {extraPetals && (
        <div className="scene-letter__petals scene-letter__petals--burst" aria-hidden="true">
          <span className="scene-letter__petal scene-letter__petal--b1" />
          <span className="scene-letter__petal scene-letter__petal--b2" />
          <span className="scene-letter__petal scene-letter__petal--b3" />
          <span className="scene-letter__petal scene-letter__petal--b4" />
          <span className="scene-letter__petal scene-letter__petal--b5" />
          <span className="scene-letter__petal scene-letter__petal--b6" />
        </div>
      )}

      {/* Calligraphy brush decoration - top left */}
      <div className="scene-letter__brush scene-letter__brush--tl" aria-hidden="true">
        <svg viewBox="0 0 60 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M30 10 Q28 40 30 80 Q31 95 30 110" stroke="#b8914b" strokeWidth="1.5" strokeLinecap="round" opacity="0.15" />
          <path d="M30 10 Q25 15 28 25" stroke="#2f2a24" strokeWidth="2.5" strokeLinecap="round" opacity="0.08" />
          <path d="M28 25 Q30 30 30 35" stroke="#2f2a24" strokeWidth="1.8" strokeLinecap="round" opacity="0.06" />
        </svg>
      </div>

      {/* Seal stamp decoration - bottom right */}
      <div className="scene-letter__seal" aria-hidden="true">
        <svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
          <rect x="5" y="5" width="40" height="40" rx="3" fill="none" stroke="#b65a3c" strokeWidth="2" opacity="0.18" />
          <text x="25" y="22" textAnchor="middle" fontSize="10" fill="#b65a3c" opacity="0.15" fontFamily="'Noto Serif SC', serif">碎碎</text>
          <text x="25" y="36" textAnchor="middle" fontSize="10" fill="#b65a3c" opacity="0.15" fontFamily="'Noto Serif SC', serif">念念</text>
        </svg>
      </div>

      {/* Osmanthus branch decoration */}
      <div className="scene-letter__osmanthus scene-letter__osmanthus--1" aria-hidden="true">
        <svg viewBox="0 0 140 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 50 Q30 42 60 35 Q90 28 120 15 Q130 10 140 8" stroke="#b8914b" strokeWidth="1.2" strokeLinecap="round" opacity="0.22" />
          <path d="M20 58 Q50 48 80 38" stroke="#b8914b" strokeWidth="0.8" strokeLinecap="round" opacity="0.15" />
          <ellipse cx="50" cy="38" rx="7" ry="3.5" fill="#b8914b" opacity="0.1" transform="rotate(-25 50 38)" />
          <ellipse cx="90" cy="22" rx="6" ry="3" fill="#b8914b" opacity="0.08" transform="rotate(-35 90 22)" />
          <circle cx="60" cy="34" r="1.8" fill="#d4a850" opacity="0.18" />
          <circle cx="63" cy="31" r="1.5" fill="#e8c060" opacity="0.15" />
          <circle cx="57" cy="36" r="1.6" fill="#d4a850" opacity="0.14" />
          <circle cx="100" cy="17" r="1.6" fill="#d4a850" opacity="0.16" />
          <circle cx="103" cy="14" r="1.3" fill="#e8c060" opacity="0.13" />
          <circle cx="38" cy="45" r="1.4" fill="#d4a850" opacity="0.12" />
        </svg>
      </div>

      <div className="scene-letter__osmanthus scene-letter__osmanthus--2" aria-hidden="true">
        <svg viewBox="0 0 100 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 40 Q70 35 40 28 Q20 22 0 10" stroke="#b8914b" strokeWidth="1" strokeLinecap="round" opacity="0.18" />
          <ellipse cx="60" cy="30" rx="6" ry="3" fill="#b8914b" opacity="0.08" transform="rotate(30 60 30)" />
          <ellipse cx="30" cy="20" rx="5" ry="2.5" fill="#b8914b" opacity="0.07" transform="rotate(20 30 20)" />
          <circle cx="50" cy="27" r="1.5" fill="#d4a850" opacity="0.14" />
          <circle cx="53" cy="25" r="1.2" fill="#e8c060" opacity="0.12" />
          <circle cx="20" cy="16" r="1.3" fill="#d4a850" opacity="0.12" />
        </svg>
      </div>

      {/* Main letter paper */}
      <div
        className={[
          'scene-letter__paper',
          inView ? 'scene-letter__paper--visible' : '',
          letterFading ? 'scene-letter__paper--fading' : '',
        ].join(' ')}
      >
        {/* Paper inner border */}
        <div className="scene-letter__paper-border" />

        {/* Dog mascot holding envelope */}
        <div className={`scene-letter__dog ${inView ? 'scene-letter__dog--visible' : ''}`}>
          <div className="scene-letter__dog-wrap">
            <DogMascot size={80} pose="sit" />
            {/* Envelope SVG near mouth */}
            <svg
              className="scene-letter__envelope"
              viewBox="0 0 36 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <rect x="2" y="4" width="32" height="22" rx="2" fill="#faf5ed" stroke="#b8914b" strokeWidth="1" opacity="0.85" />
              <path d="M2 4 L18 16 L34 4" fill="none" stroke="#b8914b" strokeWidth="0.8" opacity="0.6" />
              <circle cx="18" cy="18" r="3" fill="#b65a3c" opacity="0.35" />
            </svg>
          </div>
        </div>

        {/* Letter text */}
        <div className={`scene-letter__content ${inView ? 'scene-letter__content--visible' : ''}`}>
          {LETTER_LINES.map((item, index) => {
            if (item.type === 'gap') {
              return <div key={index} className="scene-letter__gap" />;
            }
            return (
              <p
                key={index}
                className={[
                  'scene-letter__line',
                  `scene-letter__line--${item.type}`,
                ].join(' ')}
                style={{ '--line-index': index }}
              >
                {item.text}
              </p>
            );
          })}
        </div>

        {/* Accept button */}
        <button
          className={`scene-letter__btn ${inView ? 'scene-letter__btn--visible' : ''}`}
          onClick={handleAccept}
          aria-label="收下这份碎碎念"
        >
          收下这份碎碎念✨
        </button>
      </div>

      {/* Final reveal message */}
      <div
        className={[
          'scene-letter__final',
          finalRevealed ? 'scene-letter__final--visible' : '',
        ].join(' ')}
        aria-live="polite"
      >
        <p className="scene-letter__final-text">愿你每天都有小开心✨</p>
      </div>

      {/* Warm glow overlay after final reveal */}
      <div
        className={[
          'scene-letter__glow',
          finalRevealed ? 'scene-letter__glow--visible' : '',
        ].join(' ')}
        aria-hidden="true"
      />
    </section>
  );
};

export default SceneLetter;
