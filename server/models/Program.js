import mongoose from 'mongoose';

const ProgramSchema = new mongoose.Schema({
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Customer'
  },
  sum: Number,
  startDate: {
    type: Date
  },
  numOfPayments: {
    type: Number
  },
  launchDay: {
    type: Number
  },
  paymentMethodDetails: {
    bankId: Number,
    branchId: Number,
    accountNumber: {
      type: String
    },
    creditNumber: {
      type: String
    },
    expiringDate: {
      type: Date
    },
    cvv2: {
      type: String
    }
  },
  isActive: {
    type: Boolean,
    default: true
  },

});

module.exports = mongoose.model('Program', ProgramSchema);

