import { BrowserRouter, Route, Routes } from 'react-router-dom'
import '../style/App.scss'
import Home from './Home'
import Navbar from './Navbar'

function App() {

  return (
    <BrowserRouter>
      <div className='app'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
