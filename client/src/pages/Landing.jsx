import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Wrapper from '../assets/wrappers/LandingPage';
import main from '../assets/images/landingMain.svg';
import { Logo } from '../components';

const Landing = () => {
    return (
        <Wrapper>
            <nav>
                <Logo />
            </nav>
            <div className="container page">
                <div className="info">
                    <h1>
                        A <span>Property Management</span> Solution
                    </h1>
                    <p>
                        A platform for tenants and property managers to
                        seamlessly communicate. Tenants can submit their repair
                        tickets. Property Managers can announce notices.
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
