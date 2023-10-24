import { Routes, Route } from 'react-router-dom'
import './App.css'
import SobreMim from './pages/SobreMim'
import Conhecimentos from './pages/Conhecimentos'
import Projetos from './pages/Projetos'
import ProjetoId from './pages/ProjetoId'

function App() {

  return (
    <Routes>
      <Route exact path="/" element={<SobreMim />} />
      <Route exact path="/conhecimentos" element={<Conhecimentos />} />
      <Route exact path="/projetos" element={<Projetos />} />
      <Route exact path="/projetos/:id" element={<ProjetoId />} />
    </Routes>
  )
}

export default App
