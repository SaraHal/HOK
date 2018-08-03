import mongoose from 'mongoose';

const CustomerSchema = new mongoose.Schema({
  id: String,
  firstName: String,
  lastName: String,  
  organization: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Organizaion'
  }

});

module.exports = mongoose.model('Customer', CustomerSchema);

