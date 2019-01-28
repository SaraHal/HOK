import mongoose from 'mongoose';

const OrganizationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  code: {
    type: String,
    required: true
  },
  projects: [{
    name: {
      type: String,
      required: true
    },
    code: {
      type: String,
      required: true
    }
  }]
});

module.exports = mongoose.model('Organization', OrganizationSchema);