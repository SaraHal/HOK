import mongoose from 'mongoose';
import bankAccountSchema from './bankAccount.model';
import creditCardSchema from './creditCard.model';

const PaymentMethodSchema = new mongoose.Schema({
    bankAccount:bankAccountSchema,
    creditCardSchema:creditCardSchema
});

export default PaymentMethodSchema;