import { useState, useEffect } from 'react'
import './Screen1.css'

const Screen1 = ({ isActive, onOpen }) => {
  const [sealClicked, setSealClicked] = useState(false)
  const [showGlow, setShowGlow] = useState(false)
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    if (isActive) {
      setTimeout(() => setShowContent(true), 300)
    }
  }, [isActive])

  const handleSealClick = () => {
    if (sealClicked) return
    setSealClicked(true)
    setShowGlow(true)

    setTimeout(() => {
      onOpen()
    }, 1200)
  }

  return (
    <div className={`screen screen-1 ${isActive ? 'active' : ''}`}>
      {/* Background */}
      <img
        src="/birthday-fanfan/assets/assets/screens/screen-1-bg.png"
        alt=""
        className="screen-bg"
      />

      {/* Music button */}
      <img
        src="/birthday-fanfan/assets/assets/layers/screen-1-music-on.png"
        alt="音乐"
        className="layer music-btn"
      />

      {/* Title text */}
      <img
        src="/birthday-fanfan/assets/assets/layers/screen-1-title-text.png"
        alt="小范同学，生日快乐"
        className={`layer title-text ${showContent ? 'show' : ''}`}
      />

      {/* Open tip */}
      <img
        src="/birthday-fanfan/assets/assets/layers/screen-1-open-tip.png"
        alt="轻轻点一下，拆开这份小笺"
        className={`layer open-tip ${showContent ? 'show' : ''}`}
      />

      {/* Dog */}
      <img
        src="/birthday-fanfan/assets/assets/layers/screen-1-dog-normal.png"
        alt=""
        className={`layer dog ${showContent ? 'show' : ''}`}
      />

      {/* Seal normal */}
      {!showGlow && (
        <img
          src="/birthday-fanfan/assets/assets/layers/screen-1-seal-normal.png"
          alt="印"
          className={`layer seal ${showContent ? 'show' : ''}`}
          onClick={handleSealClick}
        />
      )}

      {/* Seal glow */}
      {showGlow && (
        <img
          src="/birthday-fanfan/assets/assets/layers/screen-1-seal-glow.png"
          alt=""
          className="layer seal-glow"
        />
      )}

      {/* Decorative elements */}
      <img
        src="/birthday-fanfan/assets/assets/layers/screen-1-brushes.png"
        alt=""
        className={`layer brushes ${showContent ? 'show' : ''}`}
      />
      <img
        src="/birthday-fanfan/assets/assets/layers/screen-1-inkstone.png"
        alt=""
        className={`layer inkstone ${showContent ? 'show' : ''}`}
      />
      <img
        src="/birthday-fanfan/assets/assets/layers/screen-1-scroll.png"
        alt=""
        className={`layer scroll ${showContent ? 'show' : ''}`}
      />
      <img
        src="/birthday-fanfan/assets/assets/layers/screen-1-calligraphy-paper.png"
        alt=""
        className={`layer calligraphy-paper ${showContent ? 'show' : ''}`}
      />

      {/* Petals overlay */}
      <img
        src="/birthday-fanfan/assets/assets/layers/screen-1-petals.png"
        alt=""
        className="layer petals"
      />
    </div>
  )
}

export default Screen1
