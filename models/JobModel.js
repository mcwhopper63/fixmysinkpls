import mongoose from 'mongoose';

const JobSchema = new mongoose.Schema(
    {
        company: String,
        position: String,
        jobStatus: {
            type: String,
            enum: ['in progress', 'declined', 'pending'],
            default: 'pending',
        },
        jobType: {
            type: String,
            enum: ['urgent', 'not urgent', 'essential', 'non-essential'],
            default: 'urgent',
        },
        jobLocation: {
            type: Number,
            enum: [201, 202],
            default: 201,
        },
    },
    { timestamps: true }
);

export default mongoose.model('Job', JobSchema);
