import { Link } from 'react-router-dom';
import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
import { Logo, FormRow } from '../components';

const Login = () => {
    return (
        <Wrapper>
            <form action="" className="form">
                <Logo />
                <h3>login</h3>
                <FormRow
                    name="email"
                    type="email"
                    defaultValue="john@tenant.com"
                />
                <FormRow
                    name="password"
                    type="password"
                    defaultValue="password1234"
                />
                <button type="submit" className="btn btn-block">
                    submit
                </button>
                <button type="button" className="btn btn-block">
                    Explore the app
                </button>
                <p>
                    Not a Member?
                    <Link to="/register" className="member-btn">
                        Register
                    </Link>
                </p>
            </form>
        </Wrapper>
    );
};
export default Login;
