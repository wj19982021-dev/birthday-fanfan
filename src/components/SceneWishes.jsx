import React, { useState, useEffect, useRef, useCallback } from 'react';
import DogMascot from './DogMascot';
import './SceneWishes.css';

const WISH_CARDS = [
  {
    id: 1,
    icon: '🍚',
    title: '好好吃饭',
    wish: '愿三餐都热乎，日子也暖乎乎的✨',
  },
  {
    id: 2,
    icon: '😴',
    title: '多睡好觉',
    wish: '愿夜晚安静，梦也温柔✨',
  },
  {
    id: 3,
    icon: '☁️',
    title: '少些焦虑',
    wish: '不用急着成为别人期待里的大人，你现在的样子，就很好✨',
  },
  {
    id: 4,
    icon: '🎊',
    title: '喜乐暴富',
    wish: '马年暴富，有钱有闲，自在欢喜✨',
  },
  {
    id: 5,
    icon: '🌸',
    title: '继续做喜欢的自己',
    wish: '愿你仍能奔赴喜欢的风景，写喜欢的字，穿喜欢的衣，也永远喜欢此刻的自己✨',
  },
];

const SceneWishes = () => {
  const [inView, setInView] = useState(false);
  const [flippedCard, setFlippedCard] = useState(null);
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
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  /* Toggle card flip - only one at a time */
  const handleCardClick = useCallback((id) => {
    setFlippedCard((prev) => (prev === id ? null : id));
  }, []);

  return (
    <section className="scene-wishes" ref={sceneRef}>
      {/* Paper texture overlay */}
      <div className="scene-wishes__paper-texture" />

      {/* Osmanthus decorations in corners */}
      <div className="scene-wishes__osmanthus scene-wishes__osmanthus--tl" aria-hidden="true">
        <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Branch */}
          <path d="M0 80 Q30 70 60 50 Q80 38 100 20" stroke="#b8914b" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.25" />
          <path d="M20 95 Q45 80 70 60" stroke="#b8914b" strokeWidth="0.8" strokeLinecap="round" fill="none" opacity="0.18" />
          {/* Leaves */}
          <ellipse cx="45" cy="62" rx="8" ry="4" fill="#b8914b" opacity="0.12" transform="rotate(-30 45 62)" />
          <ellipse cx="72" cy="42" rx="7" ry="3.5" fill="#b8914b" opacity="0.1" transform="rotate(-40 72 42)" />
          <ellipse cx="30" cy="78" rx="6" ry="3" fill="#b8914b" opacity="0.09" transform="rotate(-20 30 78)" />
          {/* Flowers (small dots) */}
          <circle cx="55" cy="55" r="2" fill="#d4a850" opacity="0.2" />
          <circle cx="58" cy="52" r="1.5" fill="#e8c060" opacity="0.18" />
          <circle cx="52" cy="57" r="1.8" fill="#d4a850" opacity="0.15" />
          <circle cx="82" cy="32" r="1.8" fill="#d4a850" opacity="0.18" />
          <circle cx="85" cy="29" r="1.5" fill="#e8c060" opacity="0.15" />
          <circle cx="40" cy="68" r="1.5" fill="#d4a850" opacity="0.14" />
        </svg>
      </div>

      <div className="scene-wishes__osmanthus scene-wishes__osmanthus--tr" aria-hidden="true">
        <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M120 80 Q90 70 60 50 Q40 38 20 20" stroke="#b8914b" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.25" />
          <path d="M100 95 Q75 80 50 60" stroke="#b8914b" strokeWidth="0.8" strokeLinecap="round" fill="none" opacity="0.18" />
          <ellipse cx="75" cy="62" rx="8" ry="4" fill="#b8914b" opacity="0.12" transform="rotate(30 75 62)" />
          <ellipse cx="48" cy="42" rx="7" ry="3.5" fill="#b8914b" opacity="0.1" transform="rotate(40 48 42)" />
          <ellipse cx="90" cy="78" rx="6" ry="3" fill="#b8914b" opacity="0.09" transform="rotate(20 90 78)" />
          <circle cx="65" cy="55" r="2" fill="#d4a850" opacity="0.2" />
          <circle cx="62" cy="52" r="1.5" fill="#e8c060" opacity="0.18" />
          <circle cx="68" cy="57" r="1.8" fill="#d4a850" opacity="0.15" />
          <circle cx="38" cy="32" r="1.8" fill="#d4a850" opacity="0.18" />
          <circle cx="35" cy="29" r="1.5" fill="#e8c060" opacity="0.15" />
          <circle cx="80" cy="68" r="1.5" fill="#d4a850" opacity="0.14" />
        </svg>
      </div>

      <div className="scene-wishes__osmanthus scene-wishes__osmanthus--bl" aria-hidden="true">
        <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 40 Q30 50 60 70 Q80 82 100 100" stroke="#b8914b" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.2" />
          <ellipse cx="45" cy="58" rx="7" ry="3.5" fill="#b8914b" opacity="0.1" transform="rotate(30 45 58)" />
          <ellipse cx="72" cy="78" rx="6" ry="3" fill="#b8914b" opacity="0.08" transform="rotate(40 72 78)" />
          <circle cx="55" cy="65" r="1.8" fill="#d4a850" opacity="0.16" />
          <circle cx="58" cy="68" r="1.5" fill="#e8c060" opacity="0.14" />
          <circle cx="82" cy="88" r="1.5" fill="#d4a850" opacity="0.12" />
        </svg>
      </div>

      <div className="scene-wishes__osmanthus scene-wishes__osmanthus--br" aria-hidden="true">
        <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M120 40 Q90 50 60 70 Q40 82 20 100" stroke="#b8914b" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.2" />
          <ellipse cx="75" cy="58" rx="7" ry="3.5" fill="#b8914b" opacity="0.1" transform="rotate(-30 75 58)" />
          <ellipse cx="48" cy="78" rx="6" ry="3" fill="#b8914b" opacity="0.08" transform="rotate(-40 48 78)" />
          <circle cx="65" cy="65" r="1.8" fill="#d4a850" opacity="0.16" />
          <circle cx="62" cy="68" r="1.5" fill="#e8c060" opacity="0.14" />
          <circle cx="38" cy="88" r="1.5" fill="#d4a850" opacity="0.12" />
        </svg>
      </div>

      {/* Falling petals */}
      <div className="scene-wishes__petals" aria-hidden="true">
        <span className="scene-wishes__petal scene-wishes__petal--1" />
        <span className="scene-wishes__petal scene-wishes__petal--2" />
        <span className="scene-wishes__petal scene-wishes__petal--3" />
        <span className="scene-wishes__petal scene-wishes__petal--4" />
        <span className="scene-wishes__petal scene-wishes__petal--5" />
        <span className="scene-wishes__petal scene-wishes__petal--6" />
      </div>

      {/* Title */}
      <div className={`scene-wishes__title-area ${inView ? 'scene-wishes__title-area--visible' : ''}`}>
        <p className="scene-wishes__title-line scene-wishes__title-line--1">
          愿你新的一岁，
        </p>
        <p className="scene-wishes__title-line scene-wishes__title-line--2">
          心想事成，万事顺意。
        </p>
      </div>

      {/* Cards + Dog container */}
      <div className="scene-wishes__main">
        {/* Wish cards grid */}
        <div className={`scene-wishes__cards ${inView ? 'scene-wishes__cards--visible' : ''}`}>
          {WISH_CARDS.map((card, index) => (
            <div
              key={card.id}
              className={`scene-wishes__card ${flippedCard === card.id ? 'scene-wishes__card--flipped' : ''}`}
              style={{ '--card-index': index }}
              onClick={() => handleCardClick(card.id)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleCardClick(card.id);
                }
              }}
              aria-label={`${card.title} - 点击查看祝福`}
            >
              {/* Float wrapper - handles idle floating, separate from entrance + flip */}
              <div className="scene-wishes__card-float">
                {/* Card inner (for 3D flip) */}
                <div className="scene-wishes__card-inner">
                  {/* Front face */}
                  <div className="scene-wishes__card-front">
                    <div className="scene-wishes__card-icon">{card.icon}</div>
                    <div className="scene-wishes__card-title">{card.title}</div>
                    <div className="scene-wishes__card-hint">轻触翻签</div>
                  </div>
                  {/* Back face */}
                  <div className="scene-wishes__card-back">
                    <div className="scene-wishes__card-wish">{card.wish}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dog mascot - right side */}
        <div className={`scene-wishes__dog ${inView ? 'scene-wishes__dog--visible' : ''}`}>
          <DogMascot size={90} pose="sit" />
        </div>
      </div>

      {/* Hint text */}
      <p className={`scene-wishes__hint ${inView ? 'scene-wishes__hint--visible' : ''}`}>
        点击签牌，抽取你的生日祝福
      </p>
    </section>
  );
};

export default SceneWishes;
