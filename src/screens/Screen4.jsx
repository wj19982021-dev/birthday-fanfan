import { useState } from 'react'
import './Screen4.css'

const Screen4 = ({ isActive, onNext }) => {
  const [activeTag, setActiveTag] = useState(null)

  const handleTagClick = (tagIndex) => {
    setActiveTag(activeTag === tagIndex ? null : tagIndex)
  }

  return (
    <div className={`screen screen-4 ${isActive ? 'active' : ''}`}>
      {/* Background */}
      <img
        src="/birthday-fanfan/assets/assets/screens/screen-4-bg.png"
        alt=""
        className="screen-bg"
      />

      {/* Music button */}
      <img
        src="/birthday-fanfan/assets/assets/layers/screen-4-music-on.png"
        alt="音乐"
        className="layer music-btn"
      />

      {/* 可交互：五个签牌 */}
      <div className="tags-area">
        <div
          className={`interactive-tag tag-1 ${activeTag === 1 ? 'active' : ''}`}
          onClick={() => handleTagClick(1)}
        />
        <div
          className={`interactive-tag tag-2 ${activeTag === 2 ? 'active' : ''}`}
          onClick={() => handleTagClick(2)}
        />
        <div
          className={`interactive-tag tag-3 ${activeTag === 3 ? 'active' : ''}`}
          onClick={() => handleTagClick(3)}
        />
        <div
          className={`interactive-tag tag-4 ${activeTag === 4 ? 'active' : ''}`}
          onClick={() => handleTagClick(4)}
        />
        <div
          className={`interactive-tag tag-5 ${activeTag === 5 ? 'active' : ''}`}
          onClick={() => handleTagClick(5)}
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

export default Screen4
