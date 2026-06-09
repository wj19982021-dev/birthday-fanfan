import React from 'react';
import './DogMascot.css';

/**
 * DogMascot - A cute fluffy white dog mascot (Bichon Frise style)
 *
 * @param {number} size - Size in px (default 60)
 * @param {'sit'|'walk'|'lie'|'look'} pose - Dog pose
 * @param {boolean} wag - Enable tail wagging animation
 * @param {string} className - Additional CSS class
 */
const DogMascot = ({
  size = 60,
  pose = 'sit',
  wag = false,
  className = '',
}) => {
  const containerClass = [
    'dog-mascot',
    `dog-mascot--${pose}`,
    wag ? 'dog-mascot--wag' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  // Pose-specific transforms
  const getPoseTransform = () => {
    switch (pose) {
      case 'walk':
        return 'translate(0, 4)';
      case 'lie':
        return 'translate(0, 18)';
      case 'look':
        return 'translate(0, 2)';
      default:
        return 'translate(0, 0)';
    }
  };

  return (
    <div
      className={containerClass}
      style={{ width: size, height: size }}
      role="img"
      aria-label="Cute fluffy dog mascot"
    >
      <svg
        viewBox="0 0 120 120"
        xmlns="http://www.w3.org/2000/svg"
        className="dog-mascot__svg"
        width={size}
        height={size}
      >
        <defs>
          {/* Soft watercolor-like gradient for the body */}
          <radialGradient id="bodyGrad" cx="50%" cy="45%" r="50%" fx="45%" fy="40%">
            <stop offset="0%" stopColor="#fffcf5" />
            <stop offset="55%" stopColor="#f5f0e8" />
            <stop offset="100%" stopColor="#e8e0d4" />
          </radialGradient>

          {/* Head gradient */}
          <radialGradient id="headGrad" cx="50%" cy="40%" r="55%" fx="48%" fy="38%">
            <stop offset="0%" stopColor="#fffcf5" />
            <stop offset="50%" stopColor="#f5f0e8" />
            <stop offset="100%" stopColor="#e6ddd0" />
          </radialGradient>

          {/* Ear gradient - slightly darker */}
          <radialGradient id="earGrad" cx="50%" cy="30%" r="60%">
            <stop offset="0%" stopColor="#f0e8dc" />
            <stop offset="100%" stopColor="#d9cfc2" />
          </radialGradient>

          {/* Nose gradient */}
          <radialGradient id="noseGrad" cx="40%" cy="35%" r="50%">
            <stop offset="0%" stopColor="#4a4a4a" />
            <stop offset="100%" stopColor="#2a2a2a" />
          </radialGradient>

          {/* Paw gradient */}
          <radialGradient id="pawGrad" cx="50%" cy="40%" r="55%">
            <stop offset="0%" stopColor="#faf5ed" />
            <stop offset="100%" stopColor="#e0d8cc" />
          </radialGradient>

          {/* Soft shadow */}
          <radialGradient id="shadowGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#d0c8bc" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#d0c8bc" stopOpacity="0" />
          </radialGradient>

          {/* Fluffy fur texture filter */}
          <filter id="fluffy" x="-5%" y="-5%" width="110%" height="110%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.04"
              numOctaves="3"
              result="noise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="1.5"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>

          {/* Soft blur for watercolor effect */}
          <filter id="softEdge" x="-3%" y="-3%" width="106%" height="106%">
            <feGaussianBlur stdDeviation="0.4" />
          </filter>

          {/* Warm glow */}
          <filter id="warmGlow" x="-10%" y="-10%" width="120%" height="120%">
            <feGaussianBlur stdDeviation="1.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Ground shadow */}
        <ellipse
          cx="60"
          cy="108"
          rx={pose === 'lie' ? 30 : 22}
          ry="4"
          fill="url(#shadowGrad)"
        />

        <g transform={getPoseTransform()}>
          {/* === TAIL === */}
          <g className="dog-mascot__tail">
            <path
              d={pose === 'lie'
                ? 'M88,82 Q95,78 100,82 Q103,85 98,86 Q93,85 88,84'
                : 'M85,68 Q92,55 96,48 Q99,44 100,48 Q99,56 94,65 Q90,72 86,75'}
              fill="url(#bodyGrad)"
              stroke="#e6ddd0"
              strokeWidth="0.5"
              filter="url(#softEdge)"
            />
            {/* Tail tip - extra fluffy */}
            {pose !== 'lie' && (
              <circle
                cx="99"
                cy="48"
                r="5"
                fill="#fffcf5"
                stroke="#e6ddd0"
                strokeWidth="0.3"
                filter="url(#softEdge)"
              />
            )}
          </g>

          {/* === BODY === */}
          <g>
            {pose === 'lie' ? (
              /* Lying down - wider, flatter body */
              <>
                <ellipse
                  cx="58"
                  cy="90"
                  rx="32"
                  ry="14"
                  fill="url(#bodyGrad)"
                  stroke="#e6ddd0"
                  strokeWidth="0.6"
                />
                {/* Body fluff bumps */}
                <circle cx="38" cy="86" r="8" fill="#f8f3eb" stroke="#e6ddd0" strokeWidth="0.3" />
                <circle cx="55" cy="82" r="9" fill="#faf5ed" stroke="#e6ddd0" strokeWidth="0.3" />
                <circle cx="72" cy="84" r="8" fill="#f8f3eb" stroke="#e6ddd0" strokeWidth="0.3" />
              </>
            ) : (
              /* Sitting / walking / looking - rounder body */
              <>
                <ellipse
                  cx="58"
                  cy="80"
                  rx="24"
                  ry="20"
                  fill="url(#bodyGrad)"
                  stroke="#e6ddd0"
                  strokeWidth="0.6"
                />
                {/* Body fluff details */}
                <circle cx="42" cy="76" r="10" fill="#faf5ed" stroke="#e6ddd0" strokeWidth="0.3" opacity="0.8" />
                <circle cx="62" cy="73" r="11" fill="#fffcf5" stroke="#e6ddd0" strokeWidth="0.3" opacity="0.7" />
                <circle cx="72" cy="78" r="8" fill="#faf5ed" stroke="#e6ddd0" strokeWidth="0.3" opacity="0.8" />
                {/* Belly fluff */}
                <ellipse
                  cx="58"
                  cy="88"
                  rx="14"
                  ry="10"
                  fill="#faf6ee"
                  stroke="#e6ddd0"
                  strokeWidth="0.3"
                  opacity="0.6"
                />
              </>
            )}
          </g>

          {/* === LEGS / PAWS === */}
          <g>
            {pose === 'lie' ? (
              /* Lying - front paws stretched out */
              <>
                {/* Front left paw */}
                <ellipse cx="38" cy="98" rx="7" ry="4" fill="url(#pawGrad)" stroke="#e0d8cc" strokeWidth="0.5" />
                <circle cx="34" cy="97" r="2" fill="#e8e0d4" />
                <circle cx="38" cy="96" r="2" fill="#e8e0d4" />
                <circle cx="42" cy="97" r="2" fill="#e8e0d4" />
                {/* Front right paw */}
                <ellipse cx="55" cy="99" rx="7" ry="4" fill="url(#pawGrad)" stroke="#e0d8cc" strokeWidth="0.5" />
                <circle cx="51" cy="98" r="2" fill="#e8e0d4" />
                <circle cx="55" cy="97" r="2" fill="#e8e0d4" />
                <circle cx="59" cy="98" r="2" fill="#e8e0d4" />
                {/* Back paw visible */}
                <ellipse cx="76" cy="96" rx="6" ry="3.5" fill="url(#pawGrad)" stroke="#e0d8cc" strokeWidth="0.5" />
              </>
            ) : (
              <>
                {/* Back legs (behind body) */}
                <ellipse cx="42" cy="94" rx="8" ry="6" fill="#ede6da" stroke="#e0d8cc" strokeWidth="0.4" />
                <ellipse cx="72" cy="94" rx="8" ry="6" fill="#ede6da" stroke="#e0d8cc" strokeWidth="0.4" />

                {/* Front left paw */}
                <g className={pose === 'walk' ? 'dog-mascot__paw--left' : ''}>
                  <ellipse cx="44" cy="97" rx="6" ry="4.5" fill="url(#pawGrad)" stroke="#e0d8cc" strokeWidth="0.5" />
                  <circle cx="40" cy="96" r="1.8" fill="#e8e0d4" />
                  <circle cx="44" cy="95" r="1.8" fill="#e8e0d4" />
                  <circle cx="48" cy="96" r="1.8" fill="#e8e0d4" />
                </g>

                {/* Front right paw */}
                <g className={pose === 'walk' ? 'dog-mascot__paw--right' : ''}>
                  <ellipse cx="68" cy="97" rx="6" ry="4.5" fill="url(#pawGrad)" stroke="#e0d8cc" strokeWidth="0.5" />
                  <circle cx="64" cy="96" r="1.8" fill="#e8e0d4" />
                  <circle cx="68" cy="95" r="1.8" fill="#e8e0d4" />
                  <circle cx="72" cy="96" r="1.8" fill="#e8e0d4" />
                </g>

                {/* Toe bean details */}
                {pose === 'sit' && (
                  <>
                    <circle cx="40" cy="100" r="1" fill="#f0e8dc" opacity="0.5" />
                    <circle cx="44" cy="101" r="1" fill="#f0e8dc" opacity="0.5" />
                    <circle cx="48" cy="100" r="1" fill="#f0e8dc" opacity="0.5" />
                    <circle cx="64" cy="100" r="1" fill="#f0e8dc" opacity="0.5" />
                    <circle cx="68" cy="101" r="1" fill="#f0e8dc" opacity="0.5" />
                    <circle cx="72" cy="100" r="1" fill="#f0e8dc" opacity="0.5" />
                  </>
                )}
              </>
            )}
          </g>

          {/* === NECK FLUFF === */}
          <g filter="url(#softEdge)">
            <circle cx="52" cy="64" r="9" fill="#faf6ee" stroke="#e6ddd0" strokeWidth="0.3" opacity="0.9" />
            <circle cx="60" cy="62" r="10" fill="#fffcf5" stroke="#e6ddd0" strokeWidth="0.3" opacity="0.8" />
            <circle cx="68" cy="64" r="9" fill="#faf6ee" stroke="#e6ddd0" strokeWidth="0.3" opacity="0.9" />
            <circle cx="60" cy="66" r="8" fill="#faf6ee" stroke="#e6ddd0" strokeWidth="0.2" opacity="0.7" />
          </g>

          {/* === HEAD === */}
          <g className="dog-mascot__head">
            {/* Head base */}
            <ellipse
              cx="60"
              cy="48"
              rx="22"
              ry="20"
              fill="url(#headGrad)"
              stroke="#e6ddd0"
              strokeWidth="0.6"
            />

            {/* Head fluff - top */}
            <circle cx="50" cy="34" r="8" fill="#faf6ee" stroke="#e6ddd0" strokeWidth="0.3" opacity="0.9" />
            <circle cx="60" cy="31" r="9" fill="#fffcf5" stroke="#e6ddd0" strokeWidth="0.3" opacity="0.8" />
            <circle cx="70" cy="34" r="8" fill="#faf6ee" stroke="#e6ddd0" strokeWidth="0.3" opacity="0.9" />
            <circle cx="55" cy="32" r="6" fill="#fff9f2" stroke="#e6ddd0" strokeWidth="0.2" opacity="0.7" />
            <circle cx="65" cy="32" r="6" fill="#fff9f2" stroke="#e6ddd0" strokeWidth="0.2" opacity="0.7" />

            {/* Cheek fluff */}
            <circle cx="40" cy="50" r="8" fill="#faf6ee" stroke="#e6ddd0" strokeWidth="0.3" opacity="0.85" />
            <circle cx="80" cy="50" r="8" fill="#faf6ee" stroke="#e6ddd0" strokeWidth="0.3" opacity="0.85" />
            <circle cx="42" cy="48" r="5" fill="#fff9f2" stroke="#e6ddd0" strokeWidth="0.2" opacity="0.6" />
            <circle cx="78" cy="48" r="5" fill="#fff9f2" stroke="#e6ddd0" strokeWidth="0.2" opacity="0.6" />

            {/* Chin fluff */}
            <circle cx="54" cy="60" r="6" fill="#faf6ee" stroke="#e6ddd0" strokeWidth="0.2" opacity="0.8" />
            <circle cx="66" cy="60" r="6" fill="#faf6ee" stroke="#e6ddd0" strokeWidth="0.2" opacity="0.8" />

            {/* === EARS === */}
            {/* Left ear - floppy */}
            <g className="dog-mascot__ear--left">
              <path
                d="M38,40 Q32,32 28,38 Q24,46 30,54 Q34,58 38,54 Q40,48 38,40"
                fill="url(#earGrad)"
                stroke="#d9cfc2"
                strokeWidth="0.5"
                filter="url(#softEdge)"
              />
              {/* Inner ear */}
              <path
                d="M35,42 Q31,37 29,42 Q27,48 32,52 Q34,53 35,50 Q36,46 35,42"
                fill="#ecdcd0"
                stroke="#d9cfc2"
                strokeWidth="0.3"
                opacity="0.5"
              />
              {/* Ear fluff */}
              <circle cx="33" cy="38" r="4" fill="#f0e8dc" stroke="#d9cfc2" strokeWidth="0.2" opacity="0.7" />
            </g>

            {/* Right ear - floppy */}
            <g className="dog-mascot__ear--right">
              <path
                d="M82,40 Q88,32 92,38 Q96,46 90,54 Q86,58 82,54 Q80,48 82,40"
                fill="url(#earGrad)"
                stroke="#d9cfc2"
                strokeWidth="0.5"
                filter="url(#softEdge)"
              />
              {/* Inner ear */}
              <path
                d="M85,42 Q89,37 91,42 Q93,48 88,52 Q86,53 85,50 Q84,46 85,42"
                fill="#ecdcd0"
                stroke="#d9cfc2"
                strokeWidth="0.3"
                opacity="0.5"
              />
              {/* Ear fluff */}
              <circle cx="87" cy="38" r="4" fill="#f0e8dc" stroke="#d9cfc2" strokeWidth="0.2" opacity="0.7" />
            </g>

            {/* === FACE === */}
            {/* Muzzle area */}
            <ellipse
              cx="60"
              cy="52"
              rx="10"
              ry="7"
              fill="#faf6ee"
              stroke="#e6ddd0"
              strokeWidth="0.3"
              opacity="0.8"
            />

            {/* Eyes */}
            <g className="dog-mascot__eyes">
              {/* Left eye */}
              <ellipse
                cx="51"
                cy="46"
                rx="3.2"
                ry="3.5"
                fill="#2a2a2a"
              />
              {/* Left eye shine */}
              <circle cx="52.5" cy="44.5" r="1.2" fill="white" opacity="0.9" />
              <circle cx="50" cy="47" r="0.6" fill="white" opacity="0.5" />

              {/* Right eye */}
              <ellipse
                cx="69"
                cy="46"
                rx="3.2"
                ry="3.5"
                fill="#2a2a2a"
              />
              {/* Right eye shine */}
              <circle cx="70.5" cy="44.5" r="1.2" fill="white" opacity="0.9" />
              <circle cx="68" cy="47" r="0.6" fill="white" opacity="0.5" />
            </g>

            {/* Eyebrows - subtle */}
            <path
              d="M47,42 Q51,40 55,42"
              fill="none"
              stroke="#c8bfb2"
              strokeWidth="0.6"
              strokeLinecap="round"
              opacity="0.4"
            />
            <path
              d="M65,42 Q69,40 73,42"
              fill="none"
              stroke="#c8bfb2"
              strokeWidth="0.6"
              strokeLinecap="round"
              opacity="0.4"
            />

            {/* Nose */}
            <g className="dog-mascot__nose">
              <ellipse
                cx="60"
                cy="50"
                rx="3.5"
                ry="2.5"
                fill="url(#noseGrad)"
              />
              {/* Nose shine */}
              <ellipse
                cx="59"
                cy="49.2"
                rx="1.5"
                ry="1"
                fill="white"
                opacity="0.25"
              />
            </g>

            {/* Mouth */}
            <path
              d="M60,52.5 Q57,56 54,54"
              fill="none"
              stroke="#b0a898"
              strokeWidth="0.7"
              strokeLinecap="round"
              opacity="0.6"
            />
            <path
              d="M60,52.5 Q63,56 66,54"
              fill="none"
              stroke="#b0a898"
              strokeWidth="0.7"
              strokeLinecap="round"
              opacity="0.6"
            />

            {/* Blush spots - subtle pink */}
            <circle cx="42" cy="52" r="4" fill="#f0c0b8" opacity="0.15" />
            <circle cx="78" cy="52" r="4" fill="#f0c0b8" opacity="0.15" />

            {/* Look pose - head turned slightly */}
            {pose === 'look' && (
              <g className="dog-mascot__head-tilt">
                <ellipse cx="60" cy="48" rx="22" ry="20" fill="none" />
              </g>
            )}
          </g>

          {/* === SIT POSE - tail on ground === */}
          {pose === 'sit' && (
            <ellipse
              cx="80"
              cy="96"
              rx="8"
              ry="3"
              fill="#f0e8dc"
              stroke="#e0d8cc"
              strokeWidth="0.3"
              opacity="0.5"
            />
          )}
        </g>
      </svg>
    </div>
  );
};

export default DogMascot;
