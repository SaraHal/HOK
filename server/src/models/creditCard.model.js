import mongoose from 'mongoose';

const CreditCardSchema = new mongoose.Schema({
    creditNumber: {
        type: String,
        required:true
    },
    expiringDate: {
        type: Date,
        required:true
    },
    cvv2: {
        type: String,
        required:true
    }
});

export default CreditCardSchema;

