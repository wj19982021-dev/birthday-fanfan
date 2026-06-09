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

      {/* Title text */}
      <img
        src="/birthday-fanfan/assets/assets/layers/screen-4-title-text.png"
        alt=""
        className="layer title-text"
      />

      {/* Tags */}
      <div className="tags-container">
        {/* Tag 1 */}
        <img
          src={`/birthday-fanfan/assets/assets/layers/screen-4-tag-1-${activeTag === 1 ? 'open' : 'normal'}.png`}
          alt="好好吃饭"
          className={`layer tag tag-1 ${activeTag === 1 ? 'tag-active' : ''}`}
          onClick={() => handleTagClick(1)}
        />

        {/* Tag 2 */}
        <img
          src={`/birthday-fanfan/assets/assets/layers/screen-4-tag-2-${activeTag === 2 ? 'open' : 'normal'}.png`}
          alt="多睡好觉"
          className={`layer tag tag-2 ${activeTag === 2 ? 'tag-active' : ''}`}
          onClick={() => handleTagClick(2)}
        />

        {/* Tag 3 */}
        <img
          src={`/birthday-fanfan/assets/assets/layers/screen-4-tag-3-${activeTag === 3 ? 'open' : 'normal'}.png`}
          alt="少些焦虑"
          className={`layer tag tag-3 ${activeTag === 3 ? 'tag-active' : ''}`}
          onClick={() => handleTagClick(3)}
        />

        {/* Tag 4 */}
        <img
          src={`/birthday-fanfan/assets/assets/layers/screen-4-tag-4-${activeTag === 4 ? 'open' : 'normal'}.png`}
          alt="喜乐暴富"
          className={`layer tag tag-4 ${activeTag === 4 ? 'tag-active' : ''}`}
          onClick={() => handleTagClick(4)}
        />

        {/* Tag 5 */}
        <img
          src={`/birthday-fanfan/assets/assets/layers/screen-4-tag-5-${activeTag === 5 ? 'open' : 'normal'}.png`}
          alt="继续做喜欢的自己"
          className={`layer tag tag-5 ${activeTag === 5 ? 'tag-active' : ''}`}
          onClick={() => handleTagClick(5)}
        />
      </div>

      {/* Result panel */}
      <img
        src="/birthday-fanfan/assets/assets/layers/screen-4-result-panel.png"
        alt=""
        className={`layer result-panel ${activeTag ? 'show' : ''}`}
      />

      {/* Dog */}
      <img
        src="/birthday-fanfan/assets/assets/layers/screen-4-dog-normal.png"
        alt=""
        className="layer dog"
      />

      {/* Hand tip */}
      <img
        src="/birthday-fanfan/assets/assets/layers/screen-4-hand-tip.png"
        alt="轻轻点一枚愿望签"
        className={`layer hand-tip ${activeTag ? 'hide' : ''}`}
      />

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

export default Screen4
