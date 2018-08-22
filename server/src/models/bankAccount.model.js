import mongoose from 'mongoose';

const BankAccountSchema = new mongoose.Schema({
    bankId: {
        type: String,
        required:true
    },
    branchId: {
        type: String,
        required:true
    },
    accountNumber: {
        type: String,
        required:true
    },
});
export default BankAccountSchema;

  