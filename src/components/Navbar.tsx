import '../style/Navbar.scss'
import logo from '../assets/shared/logo.svg'
import { Link } from 'react-router-dom';

const Navbar = () => {
    const navItem = [{
        numero: '00',
        label: 'Home'
    },
    {
        numero: '01',
        label: 'Destination'
    }, {
        numero: '02',
        label: 'Crew'
    },
    {
        numero: '03',
        label: 'Technologie'
    }];
    const navLink: string[] = ['/', '/destination', '/crew', 'technology'];


    return (
        <nav>
            <div className="sphere">
                <img src={logo} style={{ width: '100%' }} />
            </div>
            <div className="line"></div>
            <div className="nav-item-blur">
                <div className="nav-item-container">
                    {[0, 1, 2, 3].map((i) => <Link to={navLink[i]} className='nav-item' key={i}>
                        <div className='numero'>{navItem[i].numero}</div>
                        <div className='label'>{navItem[i].label}</div>
                    </Link>)}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;