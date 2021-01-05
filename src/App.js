import NavDex from './components/NavDex'
import PokeBlock from './components/poke-list/PokeBlock'

function App() {
  return (
    <div>
      <NavDex />
      <div className="main-grid container">
        <PokeBlock />
        <div className=""></div>
      </div>
    </div>
  )
}

export default App
