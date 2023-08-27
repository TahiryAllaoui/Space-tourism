import '../style/Navbar.scss'

const Navbar = () => {
    const navItem = [{
        num: '00',
        label: 'Home'
    },
    {
        num: '01',
        label: 'Destination'
    }, {
        num: '02',
        label: 'Crew'
    },
    {
        num: '03',
        label: 'Technologie'
    }];


    return (
        <nav>
            <div className="sphere"></div>
            <div className="line"></div>
            <div className="nav-item">
                {navItem.map(())}
            </div>
        </nav>
    );
};

export default Navbar;