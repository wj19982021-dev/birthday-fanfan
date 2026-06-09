import { useState } from 'react'
import './Screen2.css'

const Screen2 = ({ isActive, onNext }) => {
  const [rippleActive, setRippleActive] = useState(false)
  const [activeCard, setActiveCard] = useState(null)

  const handleWaterClick = () => {
    setRippleActive(true)
    setTimeout(() => setRippleActive(false), 1500)
  }

  const handleCardClick = (cardIndex) => {
    setActiveCard(activeCard === cardIndex ? null : cardIndex)
  }

  return (
    <div className={`screen screen-2 ${isActive ? 'active' : ''}`}>
      {/* Background */}
      <img
        src="/birthday-fanfan/assets/assets/screens/screen-2-bg.png"
        alt=""
        className="screen-bg"
      />

      {/* Music button */}
      <img
        src="/birthday-fanfan/assets/assets/layers/screen-2-music-on.png"
        alt="音乐"
        className="layer music-btn"
      />

      {/* 可交互：湖面涟漪 */}
      <div
        className="interactive-water"
        onClick={handleWaterClick}
      />

      {/* 涟漪动画 */}
      {rippleActive && (
        <div className="ripple-effect" />
      )}

      {/* 可交互：三张卡片 */}
      <div className="cards-area">
        <div
          className={`interactive-card card-1 ${activeCard === 1 ? 'active' : ''}`}
          onClick={() => handleCardClick(1)}
        />
        <div
          className={`interactive-card card-2 ${activeCard === 2 ? 'active' : ''}`}
          onClick={() => handleCardClick(2)}
        />
        <div
          className={`interactive-card card-3 ${activeCard === 3 ? 'active' : ''}`}
          onClick={() => handleCardClick(3)}
        />
      </div>

      {/* 向下箭头 */}
      <img
        src="/birthday-fanfan/assets/assets/common/down-arrow.png"
        alt=""
        className="layer down-arrow"
        onClick={onNext}
      />
    </div>
  )
}

export default Screen2
