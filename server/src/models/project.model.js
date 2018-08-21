import mongoose from 'mongoose';

const ProjectSchema = new mongoose.Schema({ 
  name: String,  
  organization: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Organizaion'
  }

});

export default mongoose.model('Project', ProjectSchema);

