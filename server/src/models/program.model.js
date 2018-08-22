import mongoose from 'mongoose';
import PaymentMethodSchema from './paymentMethod.model';

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
  paymentMethod: {
    type:PaymentMethodSchema,
    required:true
  },
  isActive: {
    type: Boolean,
    default: true
  },

});

export default mongoose.model('Program', ProgramSchema);

