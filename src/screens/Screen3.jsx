import { useState } from 'react'
import './Screen3.css'

const Screen3 = ({ isActive, onNext }) => {
  const [lampOn, setLampOn] = useState(false)
  const [activeDish, setActiveDish] = useState(null)
  const [showBubble, setShowBubble] = useState(false)

  const handleLampClick = () => {
    setLampOn(!lampOn)
  }

  const handleDishClick = (dishIndex) => {
    setActiveDish(activeDish === dishIndex ? null : dishIndex)
    if (dishIndex) {
      setShowBubble(true)
      setTimeout(() => setShowBubble(false), 3000)
    }
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

      {/* 可交互：台灯 */}
      <div
        className={`interactive-lamp ${lampOn ? 'on' : ''}`}
        onClick={handleLampClick}
      />

      {/* 可交互：菜品 */}
      <div
        className={`interactive-dish dish-1 ${activeDish === 1 ? 'active' : ''}`}
        onClick={() => handleDishClick(1)}
      />
      <div
        className={`interactive-dish dish-2 ${activeDish === 2 ? 'active' : ''}`}
        onClick={() => handleDishClick(2)}
      />

      {/* 气泡提示 */}
      {showBubble && (
        <img
          src="/birthday-fanfan/assets/assets/layers/screen-3-food-bubble.png"
          alt="今天的饭，也要吃得暖乎乎的呀✨"
          className="layer food-bubble"
        />
      )}

      {/* 提示文字 */}
      <img
        src="/birthday-fanfan/assets/assets/layers/screen-3-surprise-tip.png"
        alt="悄悄点一下，会有小惊喜哦✨"
        className="layer surprise-tip"
      />

      {/* 向上滑动提示 */}
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
