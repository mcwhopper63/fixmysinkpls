import {
    Link,
    Form,
    redirect,
    useActionData,
    useNavigate,
} from 'react-router-dom';
import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
import { FormRow, Logo, SubmitBtn } from '../components';
import customFetch from '../utils/customFetch';
import { toast } from 'react-toastify';

export const action = async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    const errors = { msg: '' };
    if (data.password.length < 3) {
        errors.msg = 'password too short';
        return errors;
    }
    try {
        await customFetch.post('/auth/login', data);
        toast.success('Login successful');
        return redirect('/dashboard');
    } catch (error) {
        // toast.error(error?.response?.data?.msg);
        errors.msg = error.response.data.msg;
        return errors;
    }
};

const Login = () => {
    const errors = useActionData();
    const navigate = useNavigate();
    const loginDemoUser = async () => {
        const data = {
            email: 'test@gmail.com',
            password: 'secret12',
        };
        try {
            await customFetch.post('/auth/login', data);
            toast.success('take a test drive');
            navigate('/dashboard');
        } catch (error) {
            toast.error(error?.response?.data?.msg);
        }
    };
    return (
        <Wrapper>
            <Form method="post" className="form">
                <Logo />
                <h3>login</h3>
                {errors && <p style={{ color: 'red' }}>{errors.msg}</p>}
                <FormRow name="email" type="email" />
                <FormRow name="password" type="password" />
                <SubmitBtn />
                <button
                    type="button"
                    className="btn btn-block"
                    onClick={loginDemoUser}
                >
                    explore the app
                </button>
                <p>
                    Not a Member?
                    <Link to="/register" className="member-btn">
                        Register
                    </Link>
                </p>
            </Form>
        </Wrapper>
    );
};
export default Login;
