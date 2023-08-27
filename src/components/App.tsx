import { BrowserRouter, Route, Routes } from 'react-router-dom'
import '../style/App.scss'
import Home from './Home'
import Navbar from './Navbar'
import Destination from './Destination'
import DestinationContexe, { DestinationContextType } from '../context/destinationContext'
import { useState } from 'react'
import Crew from './Crew'
import CrewContexe, { CrewContextType } from '../context/crewContext'

function App() {
  const [destinationId, setDestinationId] = useState(0);
  let destination: DestinationContextType = {
    id: destinationId,
    setId: setDestinationId
  };

  const [crewId, setCrewId] = useState(0);
  let crew: CrewContextType = {
    id: crewId,
    setId: setCrewId
  }


  return (
    <BrowserRouter>
      <DestinationContexe.Provider value={destination}>
        <CrewContexe.Provider value={crew}>
          <div className='app'>
            <Navbar />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/destination' element={<Destination />} />
              <Route path='/crew' element={<Crew />} />
            </Routes>
          </div>
        </CrewContexe.Provider>
      </DestinationContexe.Provider>
    </BrowserRouter>
  )
}

export default App
