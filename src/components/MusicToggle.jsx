import React, { useRef, useState, useEffect } from "react";
import "./MusicToggle.css";

export default function MusicToggle() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.loop = true;
    audio.volume = 0.6;
  }, []);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (playing) {
      audio.pause();
    } else {
      audio.play().catch(() => {});
    }
    setPlaying((prev) => !prev);
  };

  return (
    <>
      <audio ref={audioRef} src="./assets/bgm.mp3" preload="auto" />
      <button
        className={`music-toggle ${playing ? "music-toggle--on" : ""}`}
        onClick={toggle}
        aria-label={playing ? "Mute music" : "Play music"}
        title={playing ? "Mute music" : "Play music"}
      >
        {playing ? (
          <svg
            className="music-toggle__waves"
            viewBox="0 0 24 24"
            width="18"
            height="18"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 3v12" />
            <path d="M8 6v10" opacity="0.6" />
            <path d="M16 6v10" opacity="0.6" />
            <path d="M5 9v6" opacity="0.35" />
            <path d="M19 9v6" opacity="0.35" />
            <circle className="music-toggle__wave music-toggle__wave--1" cx="6" cy="12" r="1.5" fill="currentColor" stroke="none" />
            <circle className="music-toggle__wave music-toggle__wave--2" cx="12" cy="9" r="1.5" fill="currentColor" stroke="none" />
            <circle className="music-toggle__wave music-toggle__wave--3" cx="18" cy="12" r="1.5" fill="currentColor" stroke="none" />
          </svg>
        ) : (
          <svg
            className="music-toggle__note"
            viewBox="0 0 24 24"
            width="18"
            height="18"
            fill="currentColor"
          >
            <path d="M12 3v12.26A4 4 0 1 0 14 19V8h4V3h-6z" />
          </svg>
        )}
      </button>
    </>
  );
}
