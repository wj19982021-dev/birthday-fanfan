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

      {/* Letter paper */}
      <img
        src={`/birthday-fanfan/assets/assets/layers/screen-5-letter-paper-${buttonClicked ? 'received' : 'normal'}.png`}
        alt=""
        className={`layer letter-paper ${buttonClicked ? 'received' : ''}`}
      />

      {/* Main text */}
      <img
        src="/birthday-fanfan/assets/assets/layers/screen-5-main-text.png"
        alt=""
        className="layer main-text"
      />

      {/* Button */}
      {!showFinal && (
        <img
          src={`/birthday-fanfan/assets/assets/layers/screen-5-button-${buttonClicked ? 'active' : 'normal'}.png`}
          alt="收下这份碎碎念✨"
          className={`layer button ${buttonClicked ? 'clicked' : ''}`}
          onClick={handleButtonClick}
        />
      )}

      {/* Final note */}
      {showFinal && (
        <img
          src="/birthday-fanfan/assets/assets/layers/screen-5-final-note.png"
          alt="愿你每天都有小开心✨"
          className="layer final-note"
        />
      )}

      {/* Dog with envelope */}
      <img
        src={`/birthday-fanfan/assets/assets/layers/screen-5-dog-envelope-${buttonClicked ? 'active' : 'normal'}.png`}
        alt=""
        className={`layer dog-envelope ${buttonClicked ? 'active' : ''}`}
      />

      {/* Inkstone and brush */}
      <img
        src="/birthday-fanfan/assets/assets/layers/screen-5-inkstone-brush.png"
        alt=""
        className="layer inkstone-brush"
      />
    </div>
  )
}

export default Screen5
