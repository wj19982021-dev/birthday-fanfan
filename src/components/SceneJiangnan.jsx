import React, { useState, useEffect, useRef, useCallback } from 'react';
import DogMascot from './DogMascot';
import './SceneJiangnan.css';

const MEMORY_CARDS = [
  {
    id: 1,
    title: '长桥风起',
    text: '风过桥头，愿你前路都有温柔相送。',
  },
  {
    id: 2,
    title: '柳下听风',
    text: '风拂柳枝，愿你心里的事，慢慢被吹轻。',
  },
  {
    id: 3,
    title: '湖边小晴天',
    text: '寻常日子里，也总有一点点小晴朗。',
  },
];

const SceneJiangnan = () => {
  const [inView, setInView] = useState(false);
  const [openCard, setOpenCard] = useState(null);
  const sceneRef = useRef(null);

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

  const handleCardClick = useCallback((id) => {
    setOpenCard((prev) => (prev === id ? null : id));
  }, []);

  return (
    <section className="scene-jiangnan" ref={sceneRef}>
      {/* Misty gradient background is handled by CSS */}

      {/* Willow branches - left */}
      <div className={`scene-jiangnan__willow scene-jiangnan__willow--left ${inView ? 'scene-jiangnan__willow--visible' : ''}`}>
        <svg viewBox="0 0 160 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Main branch trunk */}
          <path
            d="M120 0 Q100 60 90 120 Q82 170 78 220 Q75 260 74 300"
            stroke="var(--green, #8f9f7a)"
            strokeWidth="2.5"
            strokeLinecap="round"
            opacity="0.7"
          />
          {/* Drooping tendrils */}
          <path
            d="M100 40 Q85 100 80 160 Q76 210 72 260 Q68 310 65 360"
            stroke="var(--green, #8f9f7a)"
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity="0.5"
          />
          <path
            d="M110 20 Q98 80 88 140 Q80 190 74 240 Q70 280 68 330"
            stroke="var(--green, #8f9f7a)"
            strokeWidth="1.8"
            strokeLinecap="round"
            opacity="0.55"
          />
          <path
            d="M95 70 Q82 130 75 190 Q70 240 66 290 Q62 340 58 380"
            stroke="var(--green, #8f9f7a)"
            strokeWidth="1.2"
            strokeLinecap="round"
            opacity="0.4"
          />
          {/* Leaf clusters */}
          <ellipse cx="80" cy="155" rx="8" ry="3" fill="var(--green, #8f9f7a)" opacity="0.2" transform="rotate(-20 80 155)" />
          <ellipse cx="75" cy="200" rx="7" ry="2.5" fill="var(--green, #8f9f7a)" opacity="0.18" transform="rotate(-15 75 200)" />
          <ellipse cx="70" cy="250" rx="9" ry="3" fill="var(--green, #8f9f7a)" opacity="0.15" transform="rotate(-25 70 250)" />
          <ellipse cx="68" cy="300" rx="7" ry="2.5" fill="var(--green, #8f9f7a)" opacity="0.12" transform="rotate(-10 68 300)" />
          <ellipse cx="88" cy="130" rx="6" ry="2" fill="var(--green, #8f9f7a)" opacity="0.2" transform="rotate(-30 88 130)" />
        </svg>
      </div>

      {/* Willow branches - right */}
      <div className={`scene-jiangnan__willow scene-jiangnan__willow--right ${inView ? 'scene-jiangnan__willow--visible' : ''}`}>
        <svg viewBox="0 0 160 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M40 0 Q60 60 70 120 Q78 170 82 220 Q85 260 86 300"
            stroke="var(--green, #8f9f7a)"
            strokeWidth="2.5"
            strokeLinecap="round"
            opacity="0.7"
          />
          <path
            d="M60 40 Q75 100 80 160 Q84 210 88 260 Q92 310 95 360"
            stroke="var(--green, #8f9f7a)"
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity="0.5"
          />
          <path
            d="M50 20 Q62 80 72 140 Q80 190 86 240 Q90 280 92 330"
            stroke="var(--green, #8f9f7a)"
            strokeWidth="1.8"
            strokeLinecap="round"
            opacity="0.55"
          />
          <path
            d="M65 70 Q78 130 85 190 Q90 240 94 290 Q98 340 102 380"
            stroke="var(--green, #8f9f7a)"
            strokeWidth="1.2"
            strokeLinecap="round"
            opacity="0.4"
          />
          <ellipse cx="80" cy="155" rx="8" ry="3" fill="var(--green, #8f9f7a)" opacity="0.2" transform="rotate(20 80 155)" />
          <ellipse cx="85" cy="200" rx="7" ry="2.5" fill="var(--green, #8f9f7a)" opacity="0.18" transform="rotate(15 85 200)" />
          <ellipse cx="90" cy="250" rx="9" ry="3" fill="var(--green, #8f9f7a)" opacity="0.15" transform="rotate(25 90 250)" />
          <ellipse cx="92" cy="300" rx="7" ry="2.5" fill="var(--green, #8f9f7a)" opacity="0.12" transform="rotate(10 92 300)" />
          <ellipse cx="72" cy="130" rx="6" ry="2" fill="var(--green, #8f9f7a)" opacity="0.2" transform="rotate(30 72 130)" />
        </svg>
      </div>

      {/* Bridge silhouette in background */}
      <div className={`scene-jiangnan__bridge ${inView ? 'scene-jiangnan__bridge--visible' : ''}`}>
        <svg viewBox="0 0 500 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Arch bridge - classic Jiangnan style */}
          <path
            d="M60 100 Q120 30 250 25 Q380 30 440 100"
            stroke="rgba(47, 42, 36, 0.08)"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
          />
          {/* Bridge deck */}
          <path
            d="M50 100 Q125 45 250 40 Q375 45 450 100"
            stroke="rgba(47, 42, 36, 0.06)"
            strokeWidth="18"
            strokeLinecap="round"
            fill="none"
          />
          {/* Pillars */}
          <line x1="160" y1="55" x2="160" y2="100" stroke="rgba(47, 42, 36, 0.05)" strokeWidth="2.5" />
          <line x1="250" y1="40" x2="250" y2="100" stroke="rgba(47, 42, 36, 0.05)" strokeWidth="2.5" />
          <line x1="340" y1="55" x2="340" y2="100" stroke="rgba(47, 42, 36, 0.05)" strokeWidth="2.5" />
          {/* Railing hints */}
          <path
            d="M90 72 Q170 42 250 38 Q330 42 410 72"
            stroke="rgba(47, 42, 36, 0.04)"
            strokeWidth="1"
            fill="none"
          />
        </svg>
      </div>

      {/* Abstract ink-wash female figure */}
      <div className={`scene-jiangnan__figure ${inView ? 'scene-jiangnan__figure--visible' : ''}`}>
        <svg viewBox="0 0 120 220" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Hair flowing */}
          <path
            d="M55 30 Q48 40 45 55 Q42 70 40 85 Q38 95 36 105"
            stroke="rgba(47, 42, 36, 0.25)"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <path
            d="M60 28 Q55 38 50 50 Q46 65 44 80 Q42 90 40 100"
            stroke="rgba(47, 42, 36, 0.18)"
            strokeWidth="3"
            strokeLinecap="round"
          />
          {/* Head silhouette */}
          <ellipse
            cx="60"
            cy="38"
            rx="12"
            ry="14"
            fill="rgba(47, 42, 36, 0.12)"
          />
          {/* Hair bun */}
          <ellipse
            cx="58"
            cy="25"
            rx="8"
            ry="6"
            fill="rgba(47, 42, 36, 0.15)"
          />
          {/* Hairpin */}
          <line
            x1="50"
            y1="22"
            x2="70"
            y2="18"
            stroke="var(--gold, #b8914b)"
            strokeWidth="1.2"
            strokeLinecap="round"
            opacity="0.5"
          />
          {/* Neck */}
          <path
            d="M56 52 Q58 60 58 68"
            stroke="rgba(47, 42, 36, 0.1)"
            strokeWidth="3"
            strokeLinecap="round"
          />
          {/* Hanfu robe - flowing silhouette */}
          <path
            d="M52 65 Q45 80 42 100 Q38 125 35 155 Q32 180 28 210"
            stroke="rgba(143, 159, 122, 0.25)"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M65 65 Q72 80 75 100 Q78 125 82 155 Q85 180 90 210"
            stroke="rgba(143, 159, 122, 0.25)"
            strokeWidth="2"
            strokeLinecap="round"
          />
          {/* Body fill - very subtle */}
          <path
            d="M52 65 Q45 80 42 100 Q38 125 35 155 Q32 180 28 210 L92 210 Q88 180 82 155 Q78 125 75 100 Q72 80 65 65 Q60 62 52 65"
            fill="rgba(143, 159, 122, 0.06)"
          />
          {/* Sleeve detail - flowing left */}
          <path
            d="M48 80 Q38 95 30 105 Q22 115 18 130"
            stroke="rgba(143, 159, 122, 0.2)"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          {/* Waist sash hint */}
          <path
            d="M48 110 Q60 108 72 110"
            stroke="var(--gold, #b8914b)"
            strokeWidth="1"
            strokeLinecap="round"
            opacity="0.3"
          />
          {/* Skirt folds */}
          <path
            d="M40 140 Q55 135 68 140"
            stroke="rgba(143, 159, 122, 0.12)"
            strokeWidth="1"
            strokeLinecap="round"
          />
          <path
            d="M35 170 Q55 165 80 170"
            stroke="rgba(143, 159, 122, 0.1)"
            strokeWidth="1"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Water ripples at bottom */}
      <div className={`scene-jiangnan__water ${inView ? 'scene-jiangnan__water--visible' : ''}`}>
        <svg viewBox="0 0 800 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="waterGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgba(185, 200, 193, 0.15)" />
              <stop offset="100%" stopColor="rgba(185, 200, 193, 0.35)" />
            </linearGradient>
          </defs>
          <ellipse className="scene-jiangnan__ripple scene-jiangnan__ripple--1" cx="200" cy="60" rx="120" ry="8" fill="none" stroke="rgba(185, 200, 193, 0.3)" strokeWidth="1" />
          <ellipse className="scene-jiangnan__ripple scene-jiangnan__ripple--2" cx="500" cy="50" rx="100" ry="6" fill="none" stroke="rgba(185, 200, 193, 0.25)" strokeWidth="1" />
          <ellipse className="scene-jiangnan__ripple scene-jiangnan__ripple--3" cx="350" cy="70" rx="140" ry="10" fill="none" stroke="rgba(185, 200, 193, 0.2)" strokeWidth="1" />
          <ellipse className="scene-jiangnan__ripple scene-jiangnan__ripple--4" cx="650" cy="65" rx="90" ry="7" fill="none" stroke="rgba(185, 200, 193, 0.22)" strokeWidth="1" />
          <ellipse className="scene-jiangnan__ripple scene-jiangnan__ripple--5" cx="100" cy="75" rx="80" ry="5" fill="none" stroke="rgba(185, 200, 193, 0.18)" strokeWidth="1" />
          {/* Subtle water fill */}
          <rect x="0" y="85" width="800" height="35" fill="url(#waterGrad)" opacity="0.5" />
        </svg>
      </div>

      {/* Main text content */}
      <div className={`scene-jiangnan__content ${inView ? 'scene-jiangnan__content--visible' : ''}`}>
        <p className="scene-jiangnan__line scene-jiangnan__line--1">
          愿你依旧喜欢江南的风，
        </p>
        <p className="scene-jiangnan__line scene-jiangnan__line--2">
          喜欢那些慢慢走过的四季，
        </p>
        <p className="scene-jiangnan__line scene-jiangnan__line--3">
          也喜欢那个认真生活的自己。
        </p>

        <div className="scene-jiangnan__gap" />

        <p className="scene-jiangnan__line scene-jiangnan__line--4">
          有些风景不必赶路，
        </p>
        <p className="scene-jiangnan__line scene-jiangnan__line--5">
          慢慢看，就很好。
        </p>
      </div>

      {/* Dog mascot by the water */}
      <div className={`scene-jiangnan__dog ${inView ? 'scene-jiangnan__dog--visible' : ''}`}>
        <DogMascot size={70} pose="sit" />
      </div>

      {/* Memory cards */}
      <div className={`scene-jiangnan__cards ${inView ? 'scene-jiangnan__cards--visible' : ''}`}>
        {MEMORY_CARDS.map((card, index) => (
          <div
            key={card.id}
            className={`scene-jiangnan__card ${openCard === card.id ? 'scene-jiangnan__card--open' : ''}`}
            style={{ transitionDelay: `${0.6 + index * 0.15}s` }}
            onClick={() => handleCardClick(card.id)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleCardClick(card.id);
              }
            }}
            aria-label={`${card.title} - 点击展开`}
          >
            <div className="scene-jiangnan__card-inner">
              {/* Card front (face-down) */}
              <div className="scene-jiangnan__card-front">
                <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="4" y="4" width="52" height="52" rx="4" stroke="var(--ink, #2f2a24)" strokeWidth="0.8" opacity="0.2" />
                  <circle cx="30" cy="30" r="12" stroke="var(--ink, #2f2a24)" strokeWidth="0.6" opacity="0.15" />
                  <path d="M30 22 L30 38 M22 30 L38 30" stroke="var(--ink, #2f2a24)" strokeWidth="0.6" opacity="0.15" />
                </svg>
              </div>
              {/* Card back (revealed text) */}
              <div className="scene-jiangnan__card-back">
                <h4 className="scene-jiangnan__card-title">{card.title}</h4>
                <p className="scene-jiangnan__card-text">{card.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SceneJiangnan;
