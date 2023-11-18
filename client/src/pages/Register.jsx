import { Link } from 'react-router-dom';
import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
import { Logo, FormRow } from '../components';

const Register = () => {
    return (
        <Wrapper>
            <form action="" className="form">
                <Logo />
                <h3>Register</h3>
                <FormRow type="text" name="name" defaultValue="John" />
                <FormRow
                    type="text"
                    name="last name"
                    labelText="Last Name"
                    defaultValue="Tenant"
                />
                <FormRow
                    type="text"
                    name="propertyLocation"
                    labelText="Property Location"
                    defaultValue="Sleepy Hills"
                />
                <FormRow
                    type="text"
                    name="apartment"
                    // labelText="Property Location"
                    defaultValue="19H"
                />
                <FormRow
                    type="email"
                    name="email"
                    defaultValue="john@email.com"
                />
                <FormRow
                    type="password"
                    name="password"
                    defaultValue="password1234"
                />
                <FormRow
                    type="text"
                    name="phone number"
                    labelText="phone number"
                    defaultValue="212-888-7777"
                />
                <button type="submit" className="btn btn-block">
                    submit
                </button>
                <p>
                    Already a Member?
                    <Link to="/login" className="member-btn">
                        Login
                    </Link>
                </p>
            </form>
        </Wrapper>
    );
};
export default Register;
