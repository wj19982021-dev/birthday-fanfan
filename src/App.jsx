import { useState, useCallback } from 'react'
import Screen1 from './screens/Screen1'
import Screen2 from './screens/Screen2'
import Screen3 from './screens/Screen3'
import Screen4 from './screens/Screen4'
import Screen5 from './screens/Screen5'
import './App.css'

function App() {
  const [currentScreen, setCurrentScreen] = useState(1)
  const [showFinal, setShowFinal] = useState(false)

  const goToScreen = useCallback((screen) => {
    setCurrentScreen(screen)
  }, [])

  return (
    <div className="app">
      <div className="canvas">
        <Screen1
          isActive={currentScreen === 1}
          onOpen={() => goToScreen(2)}
        />
        <Screen2
          isActive={currentScreen === 2}
          onNext={() => goToScreen(3)}
        />
        <Screen3
          isActive={currentScreen === 3}
          onNext={() => goToScreen(4)}
        />
        <Screen4
          isActive={currentScreen === 4}
          onNext={() => goToScreen(5)}
        />
        <Screen5
          isActive={currentScreen === 5}
          onFinal={() => setShowFinal(true)}
          showFinal={showFinal}
        />
      </div>
    </div>
  )
}

export default App
