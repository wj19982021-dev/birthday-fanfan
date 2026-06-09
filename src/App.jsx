import { useState, useEffect, useRef } from 'react'
import './App.css'

const CANVAS_W = 946
const CANVAS_H = 2048

const screens = [
  { id: 1, bg: '/birthday-fanfan/assets/assets/screens/screen-1-bg.png' },
  { id: 2, bg: '/birthday-fanfan/assets/assets/screens/screen-2-bg.png' },
  { id: 3, bg: '/birthday-fanfan/assets/assets/screens/screen-3-bg.png' },
  { id: 4, bg: '/birthday-fanfan/assets/assets/screens/screen-4-bg.png' },
  { id: 5, bg: '/birthday-fanfan/assets/assets/screens/screen-5-bg.png' },
]

function App() {
  const canvasRef = useRef(null)
  const [currentScreen, setCurrentScreen] = useState(1)
  const [sealGlow, setSealGlow] = useState(false)
  const [ripple, setRipple] = useState(false)
  const [lampOn, setLampOn] = useState(false)
  const [activeDish, setActiveDish] = useState(null)
  const [activeTag, setActiveTag] = useState(null)
  const [buttonClicked, setButtonClicked] = useState(false)

  // 动态缩放画布
  useEffect(() => {
    const updateScale = () => {
      const canvas = canvasRef.current
      if (!canvas) return
      const vw = window.innerWidth
      const vh = window.innerHeight
      const scaleX = vw / CANVAS_W
      const scaleY = vh / CANVAS_H
      const scale = Math.min(scaleX, scaleY)
      canvas.style.transform = `scale(${scale})`
      // 居中
      const offsetX = (vw - CANVAS_W * scale) / 2
      const offsetY = (vh - CANVAS_H * scale) / 2
      canvas.style.marginLeft = `${offsetX}px`
      canvas.style.marginTop = `${offsetY}px`
    }
    updateScale()
    window.addEventListener('resize', updateScale)
    return () => window.removeEventListener('resize', updateScale)
  }, [])

  const handleSealClick = () => {
    setSealGlow(true)
    setTimeout(() => setCurrentScreen(2), 1200)
  }

  const handleWaterClick = () => {
    setRipple(true)
    setTimeout(() => setRipple(false), 1500)
  }

  const handleLampClick = () => setLampOn(!lampOn)
  const handleDishClick = (i) => setActiveDish(activeDish === i ? null : i)
  const handleTagClick = (i) => setActiveTag(activeTag === i ? null : i)
  const handleButtonClick = () => setButtonClicked(true)

  return (
    <div className="app">
      <div className="canvas" ref={canvasRef}>
        {screens.map((s) => (
          <div
            key={s.id}
            className={`screen ${currentScreen === s.id ? 'active' : ''}`}
          >
            <img src={s.bg} alt="" className="screen-bg" />

            {s.id === 1 && (
              <div
                className={`hitbox seal-hitbox ${sealGlow ? 'glowing' : ''}`}
                onClick={handleSealClick}
              />
            )}

            {s.id === 2 && (
              <>
                <div className="hitbox water-hitbox" onClick={handleWaterClick} />
                {ripple && <div className="ripple-effect" />}
                <div className="hitbox card-hitbox card-1" />
                <div className="hitbox card-hitbox card-2" />
                <div className="hitbox card-hitbox card-3" />
                <div className="hitbox arrow-hitbox" onClick={() => setCurrentScreen(3)} />
              </>
            )}

            {s.id === 3 && (
              <>
                <div className={`hitbox lamp-hitbox ${lampOn ? 'on' : ''}`} onClick={handleLampClick} />
                <div className={`hitbox dish-hitbox dish-1 ${activeDish === 1 ? 'active' : ''}`} onClick={() => handleDishClick(1)} />
                <div className={`hitbox dish-hitbox dish-2 ${activeDish === 2 ? 'active' : ''}`} onClick={() => handleDishClick(2)} />
                <div className="hitbox arrow-hitbox" onClick={() => setCurrentScreen(4)} />
              </>
            )}

            {s.id === 4 && (
              <>
                <div className={`hitbox tag-hitbox t1 ${activeTag === 1 ? 'active' : ''}`} onClick={() => handleTagClick(1)} />
                <div className={`hitbox tag-hitbox t2 ${activeTag === 2 ? 'active' : ''}`} onClick={() => handleTagClick(2)} />
                <div className={`hitbox tag-hitbox t3 ${activeTag === 3 ? 'active' : ''}`} onClick={() => handleTagClick(3)} />
                <div className={`hitbox tag-hitbox t4 ${activeTag === 4 ? 'active' : ''}`} onClick={() => handleTagClick(4)} />
                <div className={`hitbox tag-hitbox t5 ${activeTag === 5 ? 'active' : ''}`} onClick={() => handleTagClick(5)} />
                <div className="hitbox arrow-hitbox" onClick={() => setCurrentScreen(5)} />
              </>
            )}

            {s.id === 5 && !buttonClicked && (
              <div className="hitbox button-hitbox" onClick={handleButtonClick} />
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
