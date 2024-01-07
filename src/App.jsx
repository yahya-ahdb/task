import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Breeds from './pages/Breeds/Breeds'
import Facts from './pages/facts/Facts'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home />}  />
      <Route path='/breeds' element={<Breeds />}  />
      <Route path='/facts' element={<Facts />}  />
    </Routes>
    </>
  )
}

export default App
