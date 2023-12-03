import User from '../models/UserModel.js';
import { StatusCodes } from 'http-status-codes';

export const getAllUsers = async (req, res) => {
    const users = await User.find({});
    res.status(StatusCodes.OK).json({ users });
};

export const createUser = async (req, res) => {
    const user = await User.create(req.body);
    res.status(StatusCodes.CREATED).json({ user });
};

export const getUser = async (req, res) => {
    const user = await User.findById(req.params.id);
    res.status(StatusCodes.OK).json({ user });
};

export const updateUser = async (req, res) => {
    const updatedUser = User.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });
    res.status(StatusCodes.OK).json({ user: updatedUser });
};

export const deleteUser = async (req, res) => {
    const removedUser = await User.findByIdAndDelete(req.params.id);
    res.status(StatusCodes.OK).json({ msg: 'user deleted', user: removedUser });
};
