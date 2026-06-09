import React, { useState, useEffect, useRef, useCallback } from 'react';
import DogMascot from './DogMascot';
import './SceneLife.css';

/**
 * SceneLife - Scene 3: 烟火 (Warm Daily Life)
 * A cozy evening at home with warm light, a window, table, rice bowl, lamp, and dog.
 */
const SceneLife = () => {
  const [inView, setInView] = useState(false);
  const [lampBright, setLampBright] = useState(false);
  const [showBowlTip, setShowBowlTip] = useState(false);
  const [dogWag, setDogWag] = useState(false);
  const sceneRef = useRef(null);
  const bowlTimer = useRef(null);
  const wagTimer = useRef(null);

  /* IntersectionObserver: trigger animations once */
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

  /* Cleanup timers on unmount */
  useEffect(() => {
    return () => {
      if (bowlTimer.current) clearTimeout(bowlTimer.current);
      if (wagTimer.current) clearTimeout(wagTimer.current);
    };
  }, []);

  /* Bowl click: show tooltip, auto-hide after 3s */
  const handleBowlClick = useCallback(() => {
    setShowBowlTip(true);
    if (bowlTimer.current) clearTimeout(bowlTimer.current);
    bowlTimer.current = setTimeout(() => setShowBowlTip(false), 3000);
  }, []);

  /* Lamp click: toggle bright glow */
  const handleLampClick = useCallback(() => {
    setLampBright((prev) => !prev);
  }, []);

  /* Dog click: wag tail for 1.2s */
  const handleDogClick = useCallback(() => {
    setDogWag(true);
    if (wagTimer.current) clearTimeout(wagTimer.current);
    wagTimer.current = setTimeout(() => setDogWag(false), 1200);
  }, []);

  return (
    <section className="scene-life" ref={sceneRef}>
      {/* ---- Warm evening gradient background ---- */}

      {/* ---- Floating warm particles ---- */}
      <div className="scene-life__particles" aria-hidden="true">
        <span className="scene-life__particle scene-life__particle--1" />
        <span className="scene-life__particle scene-life__particle--2" />
        <span className="scene-life__particle scene-life__particle--3" />
        <span className="scene-life__particle scene-life__particle--4" />
        <span className="scene-life__particle scene-life__particle--5" />
      </div>

      {/* ---- Window with night sky ---- */}
      <div className={`scene-life__window ${inView ? 'scene-life__window--visible' : ''}`}>
        <svg viewBox="0 0 200 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="scene-life__window-svg">
          <defs>
            {/* Night sky gradient inside window */}
            <linearGradient id="lifeNightSky" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1a2a3a" />
              <stop offset="60%" stopColor="#2a3a4a" />
              <stop offset="100%" stopColor="#3a4a5a" />
            </linearGradient>
            {/* Warm window frame gradient */}
            <linearGradient id="lifeFrameGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#8b7355" />
              <stop offset="100%" stopColor="#6b5535" />
            </linearGradient>
            {/* City lights glow */}
            <radialGradient id="lifeCityGlow" cx="50%" cy="85%" r="40%">
              <stop offset="0%" stopColor="#e8c982" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#e8c982" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Window frame - arched top */}
          <path
            d="M30 238 L30 80 Q30 20 100 20 Q170 20 170 80 L170 238 Z"
            fill="url(#lifeFrameGrad)"
            stroke="#5a4525"
            strokeWidth="2"
          />
          {/* Inner pane area */}
          <path
            d="M38 234 L38 82 Q38 30 100 30 Q162 30 162 82 L162 234 Z"
            fill="url(#lifeNightSky)"
          />

          {/* City glow at bottom of window */}
          <rect x="38" y="180" width="124" height="54" fill="url(#lifeCityGlow)" />

          {/* Window cross bars */}
          <line x1="100" y1="30" x2="100" y2="234" stroke="#6b5535" strokeWidth="2.5" />
          <line x1="38" y1="130" x2="162" y2="130" stroke="#6b5535" strokeWidth="2.5" />

          {/* Stars twinkling */}
          <circle className="scene-life__star scene-life__star--1" cx="60" cy="55" r="1.2" fill="#f0e8d0" />
          <circle className="scene-life__star scene-life__star--2" cx="140" cy="45" r="1" fill="#f0e8d0" />
          <circle className="scene-life__star scene-life__star--3" cx="80" cy="70" r="0.8" fill="#f0e8d0" />
          <circle className="scene-life__star scene-life__star--4" cx="120" cy="60" r="1.1" fill="#f0e8d0" />
          <circle className="scene-life__star scene-life__star--5" cx="55" cy="90" r="0.7" fill="#f0e8d0" />
          <circle className="scene-life__star scene-life__star--6" cx="145" cy="80" r="0.9" fill="#f0e8d0" />
          <circle className="scene-life__star scene-life__star--7" cx="105" cy="50" r="1" fill="#f0e8d0" />
          <circle className="scene-life__star scene-life__star--8" cx="75" cy="45" r="0.6" fill="#f0e8d0" />

          {/* Subtle moon */}
          <circle cx="130" cy="42" r="8" fill="#f5ecd8" opacity="0.35" />
          <circle cx="133" cy="40" r="7" fill="#1a2a3a" opacity="0.8" />

          {/* Distant city lights / lake reflections (dots) */}
          <circle cx="55" cy="210" r="1.5" fill="#e8c982" opacity="0.5" />
          <circle cx="75" cy="215" r="1" fill="#d4a060" opacity="0.4" />
          <circle cx="95" cy="212" r="1.8" fill="#e8c982" opacity="0.45" />
          <circle cx="115" cy="218" r="1.2" fill="#d4a060" opacity="0.35" />
          <circle cx="140" cy="213" r="1.3" fill="#e8c982" opacity="0.4" />
          <circle cx="65" cy="222" r="1" fill="#e8c982" opacity="0.3" />
          <circle cx="105" cy="225" r="0.8" fill="#d4a060" opacity="0.25" />
          <circle cx="130" cy="223" r="1.1" fill="#e8c982" opacity="0.35" />
        </svg>
      </div>

      {/* ---- Wooden table ---- */}
      <div className={`scene-life__table ${inView ? 'scene-life__table--visible' : ''}`}>
        <svg viewBox="0 0 180 70" fill="none" xmlns="http://www.w3.org/2000/svg" className="scene-life__table-svg">
          <defs>
            <linearGradient id="lifeTableTop" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#a0845a" />
              <stop offset="100%" stopColor="#8b7045" />
            </linearGradient>
            <linearGradient id="lifeTableLeg" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#7a6040" />
              <stop offset="100%" stopColor="#6b5030" />
            </linearGradient>
          </defs>
          {/* Table top - perspective */}
          <ellipse cx="90" cy="18" rx="80" ry="14" fill="url(#lifeTableTop)" stroke="#6b5030" strokeWidth="1" />
          {/* Table top highlight */}
          <ellipse cx="80" cy="14" rx="50" ry="7" fill="#b89860" opacity="0.3" />
          {/* Table legs */}
          <rect x="35" y="28" width="6" height="38" rx="2" fill="url(#lifeTableLeg)" />
          <rect x="139" y="28" width="6" height="38" rx="2" fill="url(#lifeTableLeg)" />
          {/* Cross brace */}
          <line x1="38" y1="52" x2="142" y2="52" stroke="#6b5030" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>

      {/* ---- Rice bowl on table ---- */}
      <div
        className={`scene-life__bowl ${inView ? 'scene-life__bowl--visible' : ''}`}
        onClick={handleBowlClick}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleBowlClick();
          }
        }}
        aria-label="米饭碗 - 点击查看"
      >
        <svg viewBox="0 0 70 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="scene-life__bowl-svg">
          <defs>
            <radialGradient id="lifeBowlGrad" cx="50%" cy="40%" r="55%">
              <stop offset="0%" stopColor="#faf5ed" />
              <stop offset="100%" stopColor="#e8ddd0" />
            </radialGradient>
            <radialGradient id="lifeRiceGrad" cx="50%" cy="35%" r="50%">
              <stop offset="0%" stopColor="#fff9f0" />
              <stop offset="100%" stopColor="#f0e8d8" />
            </radialGradient>
          </defs>
          {/* Bowl body */}
          <path
            d="M8 25 Q8 42 35 45 Q62 42 62 25 L62 25 Q55 22 35 22 Q15 22 8 25 Z"
            fill="url(#lifeBowlGrad)"
            stroke="#d4c8b8"
            strokeWidth="0.8"
          />
          {/* Bowl rim */}
          <ellipse cx="35" cy="24" rx="28" ry="6" fill="#f5ede0" stroke="#d4c8b8" strokeWidth="0.6" />
          {/* Rice mound */}
          <path
            d="M14 22 Q20 10 35 8 Q50 10 56 22"
            fill="url(#lifeRiceGrad)"
            stroke="#e8ddd0"
            strokeWidth="0.5"
          />
          {/* Rice highlight */}
          <ellipse cx="32" cy="15" rx="12" ry="4" fill="white" opacity="0.2" />
          {/* Steam wisps */}
          <path className="scene-life__steam scene-life__steam--1" d="M25 8 Q23 2 26 -2" stroke="#f0e8d8" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.4" />
          <path className="scene-life__steam scene-life__steam--2" d="M35 6 Q33 0 36 -4" stroke="#f0e8d8" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.3" />
          <path className="scene-life__steam scene-life__steam--3" d="M45 8 Q43 2 46 -2" stroke="#f0e8d8" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.35" />
        </svg>
        {/* Tooltip */}
        <div className={`scene-life__tooltip ${showBowlTip ? 'scene-life__tooltip--show' : ''}`}>
          今天的饭，也要吃得暖乎乎的呀&#10024;
        </div>
      </div>

      {/* ---- Warm lamp (台灯) ---- */}
      <div
        className={`scene-life__lamp ${inView ? 'scene-life__lamp--visible' : ''} ${lampBright ? 'scene-life__lamp--bright' : ''}`}
        onClick={handleLampClick}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleLampClick();
          }
        }}
        aria-label="台灯 - 点击调节亮度"
      >
        {/* Warm glow halo */}
        <div className="scene-life__lamp-glow" />
        <svg viewBox="0 0 60 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="scene-life__lamp-svg">
          <defs>
            <linearGradient id="lifeLampShade" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#e8c982" />
              <stop offset="100%" stopColor="#d4a060" />
            </linearGradient>
          </defs>
          {/* Lamp base */}
          <ellipse cx="30" cy="92" rx="16" ry="5" fill="#8b7045" stroke="#6b5030" strokeWidth="0.8" />
          {/* Lamp pole */}
          <rect x="28" y="45" width="4" height="48" rx="2" fill="#7a6040" />
          {/* Lamp shade - trapezoid */}
          <path
            d="M14 20 L18 45 L42 45 L46 20 Z"
            fill="url(#lifeLampShade)"
            stroke="#c89040"
            strokeWidth="0.8"
          />
          {/* Shade inner glow */}
          <path
            d="M18 25 L20 43 L40 43 L42 25 Z"
            fill="#f0d890"
            opacity="0.3"
          />
          {/* Shade highlight */}
          <path
            d="M16 22 L20 40 L28 40 L24 22 Z"
            fill="#f5e0a0"
            opacity="0.2"
          />
          {/* Light bulb hint */}
          <circle cx="30" cy="46" r="3" fill="#f5e0a0" opacity="0.5" />
        </svg>
      </div>

      {/* ---- Dog mascot lying beside table ---- */}
      <div
        className={`scene-life__dog ${inView ? 'scene-life__dog--visible' : ''}`}
        onClick={handleDogClick}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleDogClick();
          }
        }}
        aria-label="小狗 - 点击互动"
      >
        <DogMascot size={80} pose="lie" wag={dogWag} />
      </div>

      {/* ---- Hint text ---- */}
      <p className={`scene-life__hint ${inView ? 'scene-life__hint--visible' : ''}`}>
        悄悄点一下，会有小惊喜哦&#10024;
      </p>

      {/* ---- Main text content ---- */}
      <div className={`scene-life__content ${inView ? 'scene-life__content--visible' : ''}`}>
        <p className="scene-life__line scene-life__line--1">
          愿每餐都有滋有味，
        </p>
        <p className="scene-life__line scene-life__line--2">
          每个日子都值得期待。
        </p>

        <div className="scene-life__gap" />

        <p className="scene-life__line scene-life__line--3">
          愿寻常的日子里，
        </p>
        <p className="scene-life__line scene-life__line--4">
          总有一两件值得期待的小事。
        </p>

        <div className="scene-life__gap scene-life__gap--lg" />

        <p className="scene-life__line scene-life__line--5">
          好好吃饭，
        </p>
        <p className="scene-life__line scene-life__line--6">
          好好睡觉，
        </p>
        <p className="scene-life__line scene-life__line--7">
          慢慢开心。
        </p>
      </div>
    </section>
  );
};

export default SceneLife;
