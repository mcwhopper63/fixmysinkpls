export const authenticateUser = async (req, res, next) => {
    console.log('authenticator middleware');
    next();
};

// export default authenticateUser;
