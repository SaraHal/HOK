import mongoose from 'mongoose';

const OrganizationSchema = new mongoose.Schema({
  name: String,
  code: String,

  communication: {
    address: {
      city: {
        id: String,
        name: String
      },
      street: String
    },
    phone: String,
    email: String
  },
  masavData: {
    credit: {
      codeNosse: String,
      senderCode: String
    },
    charge: {
      codeNosse: String,
      senderCode: String
    }
  }

});

module.exports = mongoose.model('Organization', OrganizationSchema);

