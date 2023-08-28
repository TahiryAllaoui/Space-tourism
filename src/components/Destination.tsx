import '../style/Destination.scss';
import moon from '../assets/destination/image-moon.png';
import mars from '../assets/destination/image-mars.png';
import europa from '../assets/destination/image-europa.png';
import titan from '../assets/destination/image-titan.png';
import { useContext, useEffect } from 'react'
import DestinationContexe from '../context/destinationContext';

interface data {
    links: string;
    name: string;
    images: any;
    distance: string;
    description: string,
    travel: string;
}

const Destination = () => {
    const destinationContext = useContext(DestinationContexe)

    const datas: data[] = [{
        links: './destination/moon',
        name: "Moon",
        images: { moon },
        description: "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
        distance: "384,400 km",
        travel: "3 days"
    },
    {
        links: './destination/mars',
        name: "Mars",
        images: { mars },
        description: "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
        distance: "225 mil. km",
        travel: "9 months"
    },
    {
        links: './destination/europa',
        name: "Europa",
        images: { europa },
        description: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
        distance: "628 mil. km",
        travel: "3 years"
    },
    {
        links: './destination/titan',
        name: "Titan",
        images: { titan },
        description: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
        distance: "1.6 bil. km",
        travel: "7 years"
    }];

    const dataImages = [moon, mars, europa, titan];
    const handleClick = (i: number) => {
        destinationContext!.setId(i);
    };

    // useEffect(() => {
    //     let image = document.querySelector('.container img') as HTMLImageElement;
    //     let description = document.querySelector('.destination-description') as HTMLDivElement;
    //     let detail = document.querySelector('.destination-detail') as HTMLDivElement;
    //     // image.style.opacity = '0';
    //     // description.style.opacity = '0';
    //     // detail.style.opacity = '0';
    //     // setTimeout(() => {
    //     //     image.style.animationName = 'fondue';
    //     //     image.style.animat
    //     // }, 300)
    //     const fadeAnimation = `@keyframes fade {
    //         0% { opacity: 0%; }    
    //         100% { opacity: 100%; }
    //     }`;
    //     const styleElement = document.createElement('style');
    //     styleElement.appendChild(document.createTextNode(fadeAnimation))
    //     document.head.appendChild(styleElement);

    //     image.style.animation = 'fade 1s ease-out';

    // }, [destinationContext!.id])

    return (
        <div className="destination">
            <h2 className='title'><span>01 </span>Pick your destination</h2>
            <div className="container">
                <img src={dataImages[destinationContext!.id]} alt="" />
                <div className="content-text">
                    <div className="inner-nav">
                        {[0, 1, 2, 3].map((i) => <div key={i} onClick={() => handleClick(i)}>
                            {datas[i].name}
                        </div>)}
                    </div>
                    <div className="destination-description">
                        <h2>{datas[destinationContext!.id].name}</h2>
                        <p>{datas[destinationContext!.id].description}</p>
                    </div>
                    <div className="destination-detail">
                        <div className="distance">
                            <h3>AVG. DISTANCE</h3>
                            <p>{datas[destinationContext!.id].distance}</p>
                        </div>
                        <div className="time">
                            <h3>EST. TIME</h3>
                            <p>{datas[destinationContext!.id].travel}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Destination;