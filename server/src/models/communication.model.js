import mongoose from 'mongoose';

const CommunicationSchema = new mongoose.Schema({
    address: {
        city: {
            id: String,
            name: String
        },
        street: String
    },
    phone: String,
    email: String
});
export default CommunicationSchema;

