import React, { useMemo } from 'react';
import './PetalLayer.css';

const PETAL_COUNT = 18;

function randomBetween(min, max) {
  return Math.random() * (max - min) + min;
}

function generatePetals(count) {
  return Array.from({ length: count }, (_, i) => {
    const size = randomBetween(8, 14);
    const duration = randomBetween(6, 12);
    const delay = randomBetween(0, duration);
    const left = randomBetween(0, 100);
    const opacity = randomBetween(0.4, 0.6);
    const drift = randomBetween(-30, 30);

    return {
      id: i,
      style: {
        width: `${size}px`,
        height: `${size * 0.6}px`,
        left: `${left}%`,
        background: `rgba(201, 160, 160, ${opacity})`,
        animationDuration: `${duration}s, ${duration}s`,
        animationDelay: `-${delay}s, -${delay}s`,
      },
    };
  });
}

export default function PetalLayer({ active = true }) {
  const petals = useMemo(() => generatePetals(PETAL_COUNT), []);

  if (!active) return null;

  return (
    <div className="petal-layer">
      {petals.map((petal) => (
        <div key={petal.id} className="petal" style={petal.style} />
      ))}
    </div>
  );
}
