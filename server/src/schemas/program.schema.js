import mongoose from 'mongoose';

const ProgramSchema = new mongoose.Schema({
    customer: {
        type:{
            id: String,
            firstName: String,
            lastName: String,
        },
        required:true
    },
    project: {
        type:mongoose.Schema.Types.ObjectId,
        required:true
    },
    organization:  {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Organization",
        required:true
    },
    sum: {
        type: Number,
        required: true
    },
    startDate:  {
        type: Date,
        required: true
    },
    endDate: Date,
    launchDay: {
        type: Number,
        index: true,
        required:true
    },
    bankAccount: {
        type:{
            bankId: {
                type: String,
                required: true
            },
            branchId: {
                type: String,
                required: true
            },
            accountId: {
                type: String,
                required: true
            }
        },
        required:true
    },
    isActive: {
        type: Boolean,
        default: true
    }
});

module.exports = mongoose.model('Program', ProgramSchema);