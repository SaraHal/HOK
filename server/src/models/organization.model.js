import mongoose from 'mongoose';
import concatSchema from './contact.model';
import communicationSchema from './communication.model';
import paymentMethodSchema from './paymentMethod.model';
const OrganizationSchema = new mongoose.Schema({
  name: String,
  code: String,

  communication: communicationSchema,
  masavData: {
    credit: {
      codeNosse: String,
      senderCode: String
    },
    charge: {
      codeNosse: String,
      senderCode: String
    }
  },
  concats: [concatSchema],
  paymentAgreement: {
    minPrice: Number,
    commissionPerUnit: Number,
    dayOfCharge: Number,
    paymentMethod: {
      type: paymentMethodSchema,
      required: true
    },
  }
});

module.exports = mongoose.model('Organization', OrganizationSchema);

