import { BrowserRouter, Route, Routes } from 'react-router-dom'
import '../style/App.scss'
import Home from './Home'
import Navbar from './Navbar'
import Destination from './Destination'
import DestinationContexe, { DestinationContextType } from '../context/destinationContext'
import { useState } from 'react'

function App() {
  const [destinationId, setDestinationId] = useState(0);
  let destination: DestinationContextType = {
    id: destinationId,
    setId: setDestinationId
  };

  return (
    <BrowserRouter>
      <DestinationContexe.Provider value={destination}>
        <div className='app'>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/destination' element={<Destination />} />
          </Routes>
        </div>
      </DestinationContexe.Provider>
    </BrowserRouter>
  )
}

export default App
