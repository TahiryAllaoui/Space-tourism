import '../style/Crew.scss'
import { useContext, useEffect } from 'react'
import douglas from '../assets/crew/image-douglas-hurley.png'
import anousheh from '../assets/crew/image-anousheh-ansari.png'
import mark from '../assets/crew/image-mark-shuttleworth.png'
import victor from '../assets/crew/image-victor-glover.png'
import CrewContexe from '../context/crewContext'
import crewBg from '../assets/crew/background-crew-desktop.jpg'
import crewBgTablet from '../assets/crew/background-crew-tablet.jpg'
import crewBgMobile from '../assets/crew/background-crew-mobile.jpg'
import BackgroundContext from '../context/BackgroundContext'


interface data {
    name: string;
    role: string;
    bio: string
};

const Crew = () => {
    const bgContext = useContext(BackgroundContext);
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

    const handleClick = (i: number) => {
        let content = document.querySelector('.container .left-content .content') as HTMLElement;
        let image = document.querySelector('.container .bg') as HTMLElement;
        content.style.opacity = '0';
        image.style.opacity = '0';
        setTimeout(() => {
            crewContext!.setId(i);
            content.style.opacity = '1';
            image.style.opacity = '1';
        }, 100)
    };

    useEffect(() => {
        let crew = document.querySelector('.crew') as HTMLElement;
        let app = document.querySelector('.app') as HTMLElement
        crew.style.opacity = '0';
        setTimeout(() => {
            crew.style.opacity = '1';
        }, 100)
        if (app.clientWidth > 820) {
            bgContext.setPath(crewBg);
        }
        else if (app.clientWidth < 428) {
            bgContext.setPath(crewBgMobile);
        }
        else {
            bgContext.setPath(crewBgTablet);
        }
    }, [])

    return (
        <div className="crew">
            <h2 className="title"><span>02 </span> MEET YOUR CREW</h2>
            <div className="container">
                <div className="left-content">
                    <div className="content" >
                        <h3>{datas[crewContext!.id].role}</h3>
                        <h2>{datas[crewContext!.id].name}</h2>
                        <p>{datas[crewContext!.id].bio}</p>
                    </div>
                    <div className="sphere-button">
                        {
                            [0, 1, 2, 3].map((i) => <div className={`sphere-${i}`} key={i} onClick={() => handleClick(i)}
                                style={crewContext!.id == i ? { opacity: '100%' } : { opacity: '0.1744' }}></div>)
                        }
                    </div>
                </div>
                <div style={{ backgroundImage: `url(${dataItems[crewContext!.id]})` }} className='bg'></div>
            </div>
        </div>
    );
};

export default Crew;