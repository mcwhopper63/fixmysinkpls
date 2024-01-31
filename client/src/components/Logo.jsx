import logo from '../assets/images/logo.svg';

const Logo = ({ className }) => {
    return (
        <img
            src={logo}
            alt="fixmysinkpls logo"
            className={className || 'logo'}
        />
    );
};
export default Logo;
