import { Link } from 'react-router-dom';
import { useContext, useEffect } from 'react'
import '../style/Home.scss'
import homeBg from '../assets/home/background-home-desktop.jpg'
import homeBgTablet from '../assets/home/background-home-tablet.jpg'
import homeBgMobile from '../assets/home/background-home-mobile.jpg'
import BackgroundContext from '../context/BackgroundContext';


const Home = () => {
    const bgContext = useContext(BackgroundContext);

    useEffect(() => {
        let app = document.querySelector('.app') as HTMLElement;
        let home = document.querySelector('.home') as HTMLElement;
        home.style.opacity = '0';
        setTimeout(() => {
            home.style.opacity = '1';
        }, 100)
        if (app.clientWidth > 820) {
            bgContext.setPath(homeBg);
        }
        else if (app.clientWidth < 428) {
            bgContext.setPath(homeBgMobile);
        }
        else {
            bgContext.setPath(homeBgTablet);
        }
    }, [])



    return (
        <div className="home">
            <div className="container">
                <div className="content">
                    <h3 className='title'>SO, YOU WANT TO TRAVEL TO</h3>
                    <h2 className='space'>Space</h2>
                    <p className='description'>Let’s face it;
                        if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it.
                        Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
                </div>
                <div className='my-button'>
                    <div className='hovering'>
                        <div className='hovering-inner'>
                            <Link to='/destination' className='big-button'>
                                EXPLORE
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;