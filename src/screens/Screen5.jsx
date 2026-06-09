import { useState } from 'react'
import './Screen5.css'

const Screen5 = ({ isActive, onFinal, showFinal }) => {
  const [buttonClicked, setButtonClicked] = useState(false)

  const handleButtonClick = () => {
    if (buttonClicked) return
    setButtonClicked(true)
    onFinal()
  }

  return (
    <div className={`screen screen-5 ${isActive ? 'active' : ''}`}>
      {/* Background */}
      <img
        src="/birthday-fanfan/assets/assets/screens/screen-5-bg.png"
        alt=""
        className="screen-bg"
      />

      {/* Music button */}
      <img
        src="/birthday-fanfan/assets/assets/layers/screen-5-music-on.png"
        alt="音乐"
        className="layer music-btn"
      />

      {/* 可交互：按钮 */}
      {!showFinal && (
        <div
          className={`interactive-button ${buttonClicked ? 'clicked' : ''}`}
          onClick={handleButtonClick}
        />
      )}

      {/* 最终祝福 */}
      {showFinal && (
        <img
          src="/birthday-fanfan/assets/assets/layers/screen-5-final-note.png"
          alt="愿你每天都有小开心✨"
          className="layer final-note"
        />
      )}
    </div>
  )
}

export default Screen5
