import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from "./components/Navbar.jsx"
import Home from "./components/Home.jsx"
import About from './components/About.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navbar/>}>
        <Route index element={<Home/>}/>
        <Route path='About' element={<About/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
