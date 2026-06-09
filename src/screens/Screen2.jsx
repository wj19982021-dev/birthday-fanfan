import { useState } from 'react'
import './Screen2.css'

const Screen2 = ({ isActive, onNext }) => {
  const [rippleActive, setRippleActive] = useState(false)
  const [activeCard, setActiveCard] = useState(null)

  const handleWaterClick = () => {
    setRippleActive(true)
    setTimeout(() => setRippleActive(false), 1000)
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

      {/* Girl figure */}
      <img
        src="/birthday-fanfan/assets/assets/layers/screen-2-girl.png"
        alt=""
        className="layer girl"
      />

      {/* Main text */}
      <img
        src="/birthday-fanfan/assets/assets/layers/screen-2-main-text.png"
        alt=""
        className="layer main-text"
      />

      {/* Water tip */}
      <img
        src="/birthday-fanfan/assets/assets/layers/screen-2-water-tip.png"
        alt="轻轻点一下，湖面泛起涟漪"
        className="layer water-tip"
      />

      {/* Ripple - normal */}
      {!rippleActive && (
        <img
          src="/birthday-fanfan/assets/assets/layers/screen-2-ripple-normal.png"
          alt=""
          className="layer ripple"
          onClick={handleWaterClick}
        />
      )}

      {/* Ripple - active */}
      {rippleActive && (
        <img
          src="/birthday-fanfan/assets/assets/layers/screen-2-ripple-active.png"
          alt=""
          className="layer ripple-active"
        />
      )}

      {/* Dog */}
      <img
        src="/birthday-fanfan/assets/assets/layers/screen-2-dog-normal.png"
        alt=""
        className="layer dog"
      />

      {/* Cards */}
      <div className="cards-container">
        {/* Card 1 */}
        <img
          src={`/birthday-fanfan/assets/assets/layers/screen-2-card-1-${activeCard === 1 ? 'active' : 'normal'}.png`}
          alt="长桥风起"
          className={`layer card ${activeCard === 1 ? 'card-active' : ''}`}
          onClick={() => handleCardClick(1)}
        />

        {/* Card 2 */}
        <img
          src={`/birthday-fanfan/assets/assets/layers/screen-2-card-2-${activeCard === 2 ? 'active' : 'normal'}.png`}
          alt="柳下听风"
          className={`layer card ${activeCard === 2 ? 'card-active' : ''}`}
          onClick={() => handleCardClick(2)}
        />

        {/* Card 3 */}
        <img
          src={`/birthday-fanfan/assets/assets/layers/screen-2-card-3-${activeCard === 3 ? 'active' : 'normal'}.png`}
          alt="湖边小晴天"
          className={`layer card ${activeCard === 3 ? 'card-active' : ''}`}
          onClick={() => handleCardClick(3)}
        />
      </div>

      {/* Down arrow */}
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
