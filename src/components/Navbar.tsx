import '../style/Navbar.scss'
import logo from '../assets/shared/logo.svg'
import { Link } from 'react-router-dom';
import { HiX, HiOutlineMenu } from 'react-icons/hi'

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

    //Phone button
    const handleClickX = () => {
        let hiX = document.querySelector('#hi-X') as HTMLElement;
        let blur = document.querySelector('.nav-item-blur') as HTMLElement;
        let hiMenu = document.querySelector('#hi-menu') as HTMLElement;
        hiX.style.left = '23.35rem';
        blur.style.left = '100%';
        hiMenu.style.display = 'block';

    };

    const handleClickMenu = () => {
        let hiX = document.querySelector('#hi-X') as HTMLElement;
        let blur = document.querySelector('.nav-item-blur') as HTMLElement;
        let hiMenu = document.querySelector('#hi-menu') as HTMLElement;
        hiX.style.left = '19.5rem';
        blur.style.left = '30%';
        hiMenu.style.display = 'none';
    };

    const handleClick = () => {
        let hiX = document.querySelector('#hi-X') as HTMLElement;
        let blur = document.querySelector('.nav-item-blur') as HTMLElement;
        let hiMenu = document.querySelector('#hi-menu') as HTMLElement;
        hiX.style.left = '23.35rem';
        blur.style.left = '100%';
        hiMenu.style.display = 'block';
    };

    return (
        <nav>
            <div className="nav-container">
                <div className="sphere">
                    <img src={logo} style={{ width: '100%' }} />
                </div>
                <HiOutlineMenu id='hi-menu' onClick={handleClickMenu} />
            </div>
            <div className="line"></div>
            <div className="nav-item-blur">
                <div className="X">
                    <HiX id='hi-X' onClick={handleClickX} />
                </div>
                <div className="side-button"></div>
                <div className="nav-item-container">
                    {[0, 1, 2, 3].map((i) => <Link to={navLink[i]} className='nav-item' key={i} onClick={handleClick}>
                        <div className='numero'>{navItem[i].numero}</div>
                        <div className='label'>{navItem[i].label}</div>
                    </Link>)}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;