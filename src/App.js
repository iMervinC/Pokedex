import NavDex from './components/NavDex'
import PokeBlock from './components/poke-list/PokeBlock'
import Pokemon from './components/poke-details/Pokemon'

function App() {
  return (
    <div>
      <NavDex />
      <div className="main-grid container">
        <PokeBlock />
        <Pokemon />
      </div>
    </div>
  )
}

export default App
