import mongoose from 'mongoose';

const ConcatSchema = new mongoose.Schema({
    contactName: { type: String, required: true },
    celular: { type: String, required: true },
    email: String,
    remarks: String
});
export default ConcatSchema;

