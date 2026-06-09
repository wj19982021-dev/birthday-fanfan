import { useState } from 'react'
import './App.css'

const screens = [
  { id: 1, bg: '/birthday-fanfan/assets/assets/screens/screen-1-bg.png' },
  { id: 2, bg: '/birthday-fanfan/assets/assets/screens/screen-2-bg.png' },
  { id: 3, bg: '/birthday-fanfan/assets/assets/screens/screen-3-bg.png' },
  { id: 4, bg: '/birthday-fanfan/assets/assets/screens/screen-4-bg.png' },
  { id: 5, bg: '/birthday-fanfan/assets/assets/screens/screen-5-bg.png' },
]

function App() {
  const [currentScreen, setCurrentScreen] = useState(1)
  const [sealGlow, setSealGlow] = useState(false)
  const [ripple, setRipple] = useState(false)
  const [lampOn, setLampOn] = useState(false)
  const [activeDish, setActiveDish] = useState(null)
  const [activeTag, setActiveTag] = useState(null)
  const [buttonClicked, setButtonClicked] = useState(false)

  const handleSealClick = () => {
    setSealGlow(true)
    setTimeout(() => setCurrentScreen(2), 1200)
  }

  const handleWaterClick = () => {
    setRipple(true)
    setTimeout(() => setRipple(false), 1500)
  }

  const handleLampClick = () => setLampOn(!lampOn)

  const handleDishClick = (i) => {
    setActiveDish(activeDish === i ? null : i)
  }

  const handleTagClick = (i) => {
    setActiveTag(activeTag === i ? null : i)
  }

  const handleButtonClick = () => {
    setButtonClicked(true)
  }

  return (
    <div className="app">
      <div className="canvas">
        {screens.map((s) => (
          <div
            key={s.id}
            className={`screen ${currentScreen === s.id ? 'active' : ''}`}
          >
            <img src={s.bg} alt="" className="screen-bg" />

            {/* Screen 1: 印章点击区域 */}
            {s.id === 1 && (
              <div
                className={`hitbox seal-hitbox ${sealGlow ? 'glowing' : ''}`}
                onClick={handleSealClick}
              />
            )}

            {/* Screen 2: 湖面点击 + 卡片 */}
            {s.id === 2 && (
              <>
                <div className="hitbox water-hitbox" onClick={handleWaterClick} />
                {ripple && <div className="ripple-effect" />}
                <div className="hitbox card-hitbox card-1" onClick={() => {}} />
                <div className="hitbox card-hitbox card-2" onClick={() => {}} />
                <div className="hitbox card-hitbox card-3" onClick={() => {}} />
                <div
                  className="hitbox arrow-hitbox"
                  onClick={() => setCurrentScreen(3)}
                />
              </>
            )}

            {/* Screen 3: 台灯 + 菜品 */}
            {s.id === 3 && (
              <>
                <div
                  className={`hitbox lamp-hitbox ${lampOn ? 'on' : ''}`}
                  onClick={handleLampClick}
                />
                <div
                  className={`hitbox dish-hitbox dish-1 ${activeDish === 1 ? 'active' : ''}`}
                  onClick={() => handleDishClick(1)}
                />
                <div
                  className={`hitbox dish-hitbox dish-2 ${activeDish === 2 ? 'active' : ''}`}
                  onClick={() => handleDishClick(2)}
                />
                <div
                  className="hitbox arrow-hitbox"
                  onClick={() => setCurrentScreen(4)}
                />
              </>
            )}

            {/* Screen 4: 签牌 */}
            {s.id === 4 && (
              <>
                <div className={`hitbox tag-hitbox t1 ${activeTag === 1 ? 'active' : ''}`} onClick={() => handleTagClick(1)} />
                <div className={`hitbox tag-hitbox t2 ${activeTag === 2 ? 'active' : ''}`} onClick={() => handleTagClick(2)} />
                <div className={`hitbox tag-hitbox t3 ${activeTag === 3 ? 'active' : ''}`} onClick={() => handleTagClick(3)} />
                <div className={`hitbox tag-hitbox t4 ${activeTag === 4 ? 'active' : ''}`} onClick={() => handleTagClick(4)} />
                <div className={`hitbox tag-hitbox t5 ${activeTag === 5 ? 'active' : ''}`} onClick={() => handleTagClick(5)} />
                <div
                  className="hitbox arrow-hitbox"
                  onClick={() => setCurrentScreen(5)}
                />
              </>
            )}

            {/* Screen 5: 按钮 */}
            {s.id === 5 && !buttonClicked && (
              <div
                className="hitbox button-hitbox"
                onClick={handleButtonClick}
              />
            )}
            {s.id === 5 && buttonClicked && (
              <div className="final-overlay">
                <span>愿你每天都有小开心 ✨</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
