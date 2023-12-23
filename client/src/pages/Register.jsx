import { Form, redirect, useNavigation, Link } from 'react-router-dom';
import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
import { Logo, FormRow } from '../components';

export const action = async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    console.log(data);
    try {
        await customFetch.post('/auth/register', data);
        return redirect('/login');
    } catch (error) {
        return error;
    }
};

const Register = () => {
    return (
        <Wrapper>
            <Form method="post" action="" className="form">
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
            </Form>
        </Wrapper>
    );
};
export default Register;
