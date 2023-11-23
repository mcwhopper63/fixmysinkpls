import { NotFoundError } from '../errors/customErrors.js';
import errorHandlerMiddleware from '../middleware/errorHandlerMiddleware.js';
import Job from '../models/JobModel.js';
import { StatusCodes } from 'http-status-codes';

export const getAllJobs = async (req, res) => {
    const jobs = await Job.find({});
    res.status(StatusCodes.OK).json({ jobs });
};

export const createJob = async (req, res) => {
    const { company, position } = req.body;
    const job = await Job.create(req.body);
    res.status(StatusCodes.CREATED).json({ job });
};

export const getJob = async (req, res) => {
    const { id } = req.params;
    const job = await Job.findById(id);
    if (!job)
        throw new NotFoundError(`the job doesn't exist with that id ${id}`);

    res.status(StatusCodes.OK).json({ job });
};

export const updateJob = async (req, res) => {
    const { id } = req.params;
    const updatedJob = await Job.findByIdAndUpdate(id, body.req, { new: true });

    if (!updatedJob)
        throw new errorHandlerMiddleware(
            `that job doesn't exist with that id: ${id}`
        );

    res.status(StatusCodes.OK).json({ job: updatedJob });
};

export const deleteJob = async (req, res) => {
    const { id } = req.params;
    const removedJob = await Job.findByIdAndDelete(id);

    if (!removedJob) throw new errorHandlerMiddleware(`no job with id ${id}`);

    res.status(StatusCodes.OK).json({ msg: 'job deleted', job: removedJob });
};
