import { Link } from 'react-router-dom';
import Wrapper from '../assets/wrappers/LandingPage';
import main from '../assets/images/hero - dalle.png';
import { Logo } from '../components';

const Landing = () => {
    return (
        <Wrapper>
            <nav>
                <Logo className="logo--landingPage" />
            </nav>
            <div className="container page">
                <div className="info">
                    <h1>
                        A <span>Property Management</span> Tool
                    </h1>
                    <p>
                        Created with convenience and efficiency in mind, tenants
                        can easily submit and manage repair tickets. Property
                        Managers can efficiently track and resolve these
                        requests.
                    </p>
                    <Link to="/register" className="btn register-link">
                        Register
                    </Link>
                    <Link to="/login" className="btn">
                        Log In / Demo User
                    </Link>
                </div>
                <img
                    src={main}
                    alt="property management"
                    className="img main-img"
                />
            </div>
        </Wrapper>
    );
};
export default Landing;
