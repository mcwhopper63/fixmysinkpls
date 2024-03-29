import Wrapper from '../assets/wrappers/Navbar';
import { FaAlignLeft } from 'react-icons/fa';
import { Logo } from '../components';
import { useDashboardContext } from '../pages/DashboardLayout';
import LogoutContainer from './LogoutContainer';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
    const { toggleSidebar, logoutUser } = useDashboardContext();

    return (
        <Wrapper>
            <div className="nav-center">
                <button
                    className="toggle-btn"
                    type="button"
                    onClick={toggleSidebar}
                >
                    <FaAlignLeft />
                </button>
                <div>
                    <Logo className={'logo--sidebar'} />
                    {/* <h4 className="logo-text">Fix My Sink Pls</h4> */}
                </div>
                <div className="btn-container">
                    <ThemeToggle />
                    <LogoutContainer />
                </div>
            </div>
        </Wrapper>
    );
};
export default Navbar;
