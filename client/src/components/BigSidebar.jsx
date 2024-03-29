import NavLinks from './NavLinks';
import Logo from './Logo';
import { useDashboardContext } from '../pages/DashboardLayout';
import Wrapper from '../assets/wrappers/BigSidebar';

const BigSidebar = () => {
    const { showSidebar } = useDashboardContext();

    return (
        <Wrapper>
            <div
                className={
                    showSidebar
                        ? 'sidebar-container'
                        : 'sidebar-container show-sidebar'
                }
            >
                <div className="content">
                    <header>
                        {/* <Logo className={'logo--sidebar'} /> */}
                    </header>
                    <NavLinks isBigSidebar />
                </div>
            </div>
        </Wrapper>
    );
};
export default BigSidebar;
