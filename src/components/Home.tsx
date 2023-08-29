import { Link } from 'react-router-dom';
import '../style/Home.scss'


const Home = () => {
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