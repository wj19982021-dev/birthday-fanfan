import { useState } from 'react'
import './Screen3.css'

const Screen3 = ({ isActive, onNext }) => {
  const [lampOn, setLampOn] = useState(false)
  const [activeDish, setActiveDish] = useState(null)

  const handleLampClick = () => {
    setLampOn(!lampOn)
  }

  const handleDishClick = (dishIndex) => {
    setActiveDish(activeDish === dishIndex ? null : dishIndex)
  }

  return (
    <div className={`screen screen-3 ${isActive ? 'active' : ''}`}>
      {/* Background */}
      <img
        src="/birthday-fanfan/assets/assets/screens/screen-3-bg.png"
        alt=""
        className="screen-bg"
      />

      {/* Music button */}
      <img
        src="/birthday-fanfan/assets/assets/layers/screen-3-music-on.png"
        alt="音乐"
        className="layer music-btn"
      />

      {/* Main text */}
      <img
        src="/birthday-fanfan/assets/assets/layers/screen-3-main-text.png"
        alt=""
        className="layer main-text"
      />

      {/* Dog */}
      <img
        src="/birthday-fanfan/assets/assets/layers/screen-3-dog-normal.png"
        alt=""
        className="layer dog"
      />

      {/* Lamp - off */}
      {!lampOn && (
        <img
          src="/birthday-fanfan/assets/assets/layers/screen-3-lamp-off.png"
          alt="台灯"
          className="layer lamp"
          onClick={handleLampClick}
        />
      )}

      {/* Lamp - on */}
      {lampOn && (
        <img
          src="/birthday-fanfan/assets/assets/layers/screen-3-lamp-on.png"
          alt="台灯"
          className="layer lamp lamp-on"
          onClick={handleLampClick}
        />
      )}

      {/* Rice */}
      <img
        src="/birthday-fanfan/assets/assets/layers/screen-3-rice.png"
        alt=""
        className="layer rice"
      />

      {/* Dish 1 */}
      <img
        src={`/birthday-fanfan/assets/assets/layers/screen-3-dish-1-${activeDish === 1 ? 'active' : 'normal'}.png`}
        alt=""
        className={`layer dish dish-1 ${activeDish === 1 ? 'dish-active' : ''}`}
        onClick={() => handleDishClick(1)}
      />

      {/* Dish 2 */}
      <img
        src={`/birthday-fanfan/assets/assets/layers/screen-3-dish-2-${activeDish === 2 ? 'active' : 'normal'}.png`}
        alt=""
        className={`layer dish dish-2 ${activeDish === 2 ? 'dish-active' : ''}`}
        onClick={() => handleDishClick(2)}
      />

      {/* Food bubble */}
      {activeDish && (
        <img
          src="/birthday-fanfan/assets/assets/layers/screen-3-food-bubble.png"
          alt="今天的饭，也要吃得暖乎乎的呀✨"
          className="layer food-bubble"
        />
      )}

      {/* Surprise tip */}
      <img
        src="/birthday-fanfan/assets/assets/layers/screen-3-surprise-tip.png"
        alt="悄悄点一下，会有小惊喜哦✨"
        className="layer surprise-tip"
      />

      {/* Hand icon */}
      <img
        src="/birthday-fanfan/assets/assets/layers/screen-3-hand-icon.png"
        alt=""
        className="layer hand-icon"
      />

      {/* Swipe tip */}
      <img
        src="/birthday-fanfan/assets/assets/layers/screen-3-swipe-tip.png"
        alt=""
        className="layer swipe-tip"
        onClick={onNext}
      />
    </div>
  )
}

export default Screen3
