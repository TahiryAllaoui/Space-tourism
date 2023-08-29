import '../style/Tech.scss';
import vehicle from '../assets/technology/image-launch-vehicle-portrait.jpg';
import port from '../assets/technology/image-spaceport-portrait.jpg';
import capsule from '../assets/technology/image-space-capsule-portrait.jpg';
import vehicleT from '../assets/technology/image-launch-vehicle-landscape.jpg';
import portT from '../assets/technology/image-spaceport-landscape.jpg';
import capsuleT from '../assets/technology/image-space-capsule-landscape.jpg';
import TechContexe from '../context/techContext';
import { useContext } from 'react';

interface data {
    name: string;
    description: string;
}

const Tech = () => {
    let body = document.querySelector('body') as HTMLElement;
    const techContext = useContext(TechContexe)

    const datas: data[] = [{
        name: "Launch vehicle",
        description: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
    },
    {
        name: "Spaceport",
        description: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."
    },
    {
        name: "Space capsule",
        description: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
    }]

    const datasItem = [vehicle, port, capsule];
    const datasItemTablet = [vehicleT, portT, capsuleT];

    const handleClick = (i: number) => {
        techContext!.setId(i);
    };

    return (
        <div className="tech">
            <h2 className='title'><span>03 </span>SPACE LAUNCH 101</h2>
            <div className="container">
                <div className="content">
                    <div className="numero">
                        {[0, 1, 2].map((i) => <div className='numero-item' key={i} onClick={() => handleClick(i)} style={techContext!.id == i ? { backgroundColor: '#FFF', color: '#0B0D17' } : { backgroundColor: 'transparent', color: '#FFF' }}>{i}</div>)}
                    </div>
                    <div className="description">
                        <h3>THE TERMINOLOGY...</h3>
                        <h2>{datas[techContext!.id].name}</h2>
                        <p>{datas[techContext!.id].description}</p>
                    </div>
                </div>
                {body.clientWidth <= 768 ? <img className='sary' src={datasItemTablet[techContext!.id]} /> : <img className='sary' src={datasItem[techContext!.id]} />}
            </div>
        </div>
    );
};

export default Tech;