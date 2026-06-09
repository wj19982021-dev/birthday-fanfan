import React, { useState, useCallback, useEffect, useRef } from 'react';
import PetalLayer from './PetalLayer';
import DogMascot from './DogMascot';
import './SceneIntro.css';

const SceneIntro = () => {
  const [sealActive, setSealActive] = useState(false);
  const [textVisible, setTextVisible] = useState(false);
  const sceneRef = useRef(null);

  useEffect(() => {
    // Trigger staggered text fade-in after mount
    const timer = setTimeout(() => setTextVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const handleSealClick = useCallback(() => {
    if (sealActive) return;
    setSealActive(true);
    // Smooth scroll to next scene after seal glow animation
    setTimeout(() => {
      const nextScene = sceneRef.current?.nextElementSibling;
      if (nextScene) {
        nextScene.scrollIntoView({ behavior: 'smooth' });
      }
    }, 1200);
  }, [sealActive]);

  return (
    <section className="scene-intro" ref={sceneRef}>
      {/* Paper texture overlay */}
      <div className="scene-intro__paper-texture" />

      {/* Ink wash mountain silhouette at bottom */}
      <div className="scene-intro__mountains" />

      {/* Floating petals */}
      <PetalLayer />

      {/* Site name at top */}
      <div className={`scene-intro__header ${textVisible ? 'scene-intro__header--visible' : ''}`}>
        <span className="scene-intro__site-name">风起小笺</span>
      </div>

      {/* Main content */}
      <div className="scene-intro__content">
        {/* Greeting text with stagger */}
        <div className={`scene-intro__greeting ${textVisible ? 'scene-intro__greeting--visible' : ''}`}>
          <h1 className="scene-intro__title-line scene-intro__title-line--1">
            小范同学，
          </h1>
          <h1 className="scene-intro__title-line scene-intro__title-line--2">
            生日快乐。
          </h1>
        </div>

        {/* Wish text */}
        <p className={`scene-intro__wish ${textVisible ? 'scene-intro__wish--visible' : ''}`}>
          愿新的一岁，日子有光，心里有风，饭菜热乎，梦也安稳。
        </p>

        {/* Seal stamp */}
        <div
          className={`scene-intro__seal ${sealActive ? 'scene-intro__seal--active' : ''}`}
          onClick={handleSealClick}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleSealClick(); }}
          aria-label="拆开小笺"
        >
          <svg viewBox="0 0 80 80" className="scene-intro__seal-svg">
            {/* Outer ring */}
            <rect
              x="4" y="4" width="72" height="72"
              rx="4" ry="4"
              fill="none"
              stroke="var(--seal-red, #b65a3c)"
              strokeWidth="3"
            />
            {/* Inner border */}
            <rect
              x="10" y="10" width="60" height="60"
              rx="2" ry="2"
              fill="none"
              stroke="var(--seal-red, #b65a3c)"
              strokeWidth="1.5"
            />
            {/* "印" character */}
            <text
              x="40" y="52"
              textAnchor="middle"
              dominantBaseline="middle"
              fill="var(--seal-red, #b65a3c)"
              fontSize="36"
              fontWeight="900"
              fontFamily="'SimSun', 'STSong', 'Noto Serif SC', serif"
            >
              印
            </text>
          </svg>
          {/* Glow ring (visible on click) */}
          <div className="scene-intro__seal-glow" />
        </div>

        {/* Bottom hint text */}
        <div className={`scene-intro__hint ${textVisible ? 'scene-intro__hint--visible' : ''}`}>
          <span
            className="scene-intro__hint-text"
            onClick={handleSealClick}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleSealClick(); }}
          >
            轻轻点一下，拆开这份小笺
          </span>
          <div className="scene-intro__arrow">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 4v14m0 0l-5-5m5 5l5-5"
                stroke="var(--ink, #2f2a24)"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity="0.6"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Dog Mascot - bottom left, sitting */}
      <div className={`scene-intro__dog ${textVisible ? 'scene-intro__dog--visible' : ''}`}>
        <DogMascot size={80} pose="sit" />
      </div>
    </section>
  );
};

export default SceneIntro;
