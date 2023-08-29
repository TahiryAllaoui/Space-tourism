import { BrowserRouter, Route, Routes } from 'react-router-dom'
import '../style/App.scss'
import Home from './Home'
import Navbar from './Navbar'
import Destination from './Destination'
import DestinationContexe, { DestinationContextType } from '../context/destinationContext'
import { useState } from 'react'
import Crew from './Crew'
import CrewContexe, { CrewContextType } from '../context/crewContext'
import Tech from './Tech'
import TechContexe, { TechContextType } from '../context/techContext'

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
  };

  const [techId, setTechId] = useState(0);
  const [width, setWidth] = useState('');
  let tech: TechContextType = {
    id: techId,
    setId: setTechId,
    width: width,
    setWidth: setWidth
  }


  return (
    <BrowserRouter>
      <DestinationContexe.Provider value={destination}>
        <CrewContexe.Provider value={crew}>
          <TechContexe.Provider value={tech}>
            <div className='app'>
              <Navbar />
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/destination' element={<Destination />} />
                <Route path='/crew' element={<Crew />} />
                <Route path='/technology' element={<Tech />} />
              </Routes>
            </div>
          </TechContexe.Provider>
        </CrewContexe.Provider>
      </DestinationContexe.Provider>
    </BrowserRouter>
  )
}

export default App
