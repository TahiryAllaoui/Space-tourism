import '../style/Crew.scss'
import { useContext } from 'react'
import douglas from '../assets/crew/image-douglas-hurley.png'
import anousheh from '../assets/crew/image-anousheh-ansari.png'
import mark from '../assets/crew/image-mark-shuttleworth.png'
import victor from '../assets/crew/image-victor-glover.png'
import CrewContexe from '../context/crewContext'

interface data {
    name: string;
    role: string;
    bio: string
};

const Crew = () => {

    const crewContext = useContext(CrewContexe);

    const datas: data[] = [{
        name: "Douglas Hurley",
        role: "Commander",
        bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
    },
    {
        name: "Mark Shuttleworth",
        role: "Mission Specialist",
        bio: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
    },
    {
        name: "Victor Glover",
        role: "Pilot",
        bio: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer."
    },
    {
        name: "Anousheh Ansari",
        role: "Flight Engineer",
        bio: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space."
    }];

    const dataItems = [douglas, mark, victor, anousheh];

    return (
        <div className="crew">
            <div className="container" style={{ backgroundImage: `url(${dataItems[crewContext!.id]})` }}>
                <div className="title">
                    <h2><span>02 </span> MEET YOUR CREW</h2>
                </div>
                <div className="content" >
                    <h3>{datas[crewContext!.id].role}</h3>
                    <h2>{datas[crewContext!.id].name}</h2>
                    <p>{datas[crewContext!.id].bio}</p>
                </div>
                <div className="sphere-button">
                    <div className="sphere-1"></div>
                    <div className="sphere-2"></div>
                    <div className="sphere-3"></div>
                    <div className="sphere-4"></div>
                </div>
            </div>
            {/* <img src={dataItems[crewContext!.id]} /> */}
        </div>
    );
};

export default Crew;