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
import BackgroundContext, { BackgroundContextType } from '../context/BackgroundContext'

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
  let tech: TechContextType = {
    id: techId,
    setId: setTechId,
  }

  const [background, setBackground] = useState('');
  let bg: BackgroundContextType = {
    path: background,
    setPath: setBackground,
  }

  return (
    <BrowserRouter>
      <BackgroundContext.Provider value={bg}>
        <DestinationContexe.Provider value={destination}>
          <CrewContexe.Provider value={crew}>
            <TechContexe.Provider value={tech}>
              <div className='app' style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover' }}>
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
      </BackgroundContext.Provider>
    </BrowserRouter>
  )
}

export default App
