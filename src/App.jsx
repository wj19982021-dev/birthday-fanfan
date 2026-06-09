import { useState } from 'react'
import LoadingScreen from './components/LoadingScreen'
import MusicToggle from './components/MusicToggle'
import PetalLayer from './components/PetalLayer'
import SceneIntro from './components/SceneIntro'
import SceneJiangnan from './components/SceneJiangnan'
import SceneLife from './components/SceneLife'
import SceneWishes from './components/SceneWishes'
import SceneLetter from './components/SceneLetter'
import './App.css'

function App() {
  const [loaded, setLoaded] = useState(false)

  return (
    <>
      <LoadingScreen onComplete={() => setLoaded(true)} />

      <div className="app">
        <PetalLayer active={loaded} />
        <MusicToggle />

        <main className="scenes">
          <SceneIntro />
          <SceneJiangnan />
          <SceneLife />
          <SceneWishes />
          <SceneLetter />
        </main>

        <footer className="site-footer">
          <p>愿这份小笺，陪你走过每一个温柔的日子</p>
        </footer>
      </div>
    </>
  )
}

export default App
