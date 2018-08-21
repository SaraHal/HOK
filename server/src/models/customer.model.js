import mongoose from 'mongoose';
import communicationSchema from './communication.model';

const CustomerSchema = new mongoose.Schema({
  id: String,
  firstName: String,
  lastName: String,  
  communication: communicationSchema,
  organization: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Organizaion'
  }

});

export default mongoose.model('Customer', CustomerSchema);

