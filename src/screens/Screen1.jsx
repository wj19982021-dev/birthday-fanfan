import { useState, useEffect } from 'react'
import './Screen1.css'

const Screen1 = ({ isActive, onOpen }) => {
  const [sealClicked, setSealClicked] = useState(false)
  const [showGlow, setShowGlow] = useState(false)
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    if (isActive) {
      setTimeout(() => setShowContent(true), 500)
    }
  }, [isActive])

  const handleSealClick = () => {
    if (sealClicked) return
    setSealClicked(true)
    setShowGlow(true)

    setTimeout(() => {
      onOpen()
    }, 1500)
  }

  return (
    <div className={`screen screen-1 ${isActive ? 'active' : ''}`}>
      {/* Background - 原图背景 */}
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

      {/* 可交互：印章 */}
      {!showGlow && (
        <div
          className={`interactive-seal ${showContent ? 'show' : ''}`}
          onClick={handleSealClick}
        />
      )}

      {/* 印章发光效果 */}
      {showGlow && (
        <img
          src="/birthday-fanfan/assets/assets/layers/screen-1-seal-glow.png"
          alt=""
          className="layer seal-glow"
        />
      )}

      {/* 提示文字 */}
      <img
        src="/birthday-fanfan/assets/assets/layers/screen-1-open-tip.png"
        alt="轻轻点一下，拆开这份小笺"
        className={`layer open-tip ${showContent ? 'show' : ''}`}
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
