import { Form, redirect, Link } from 'react-router-dom';
import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
import { Logo, FormRow, SubmitBtn } from '../components';
import customFetch from '../utils/customFetch';
import { toast } from 'react-toastify';

export const action = async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    try {
        await customFetch.post('/auth/register', data);
        toast.success('Registration successful');
        return redirect('/login');
    } catch (error) {
        toast.error(error?.response?.data?.msg);
        return error;
    }
};

const Register = () => {
    return (
        <Wrapper>
            <Form method="post" action="" className="form">
                <Logo />
                <h3>Register</h3>
                <FormRow type="text" name="name" />
                <FormRow type="text" name="lastName" labelText="Last Name" />
                <FormRow
                    type="text"
                    name="location"
                    labelText="Property Location"
                />
                <FormRow
                    type="text"
                    name="apartment"
                    // labelText="Property Location"
                />
                <FormRow type="email" name="email" />
                <FormRow type="password" name="password" />
                <FormRow
                    type="text"
                    name="phone number"
                    labelText="phone number"
                />
                <SubmitBtn />
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
