import mongoose from "mongoose";

const operatorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  code: {
    type: String,
    required: true, 
  }
//   assignedTournaments: [{
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'Tournament'
//   }],

}, { timestamps: true });

const Operator = mongoose.model("Operator", operatorSchema);

export default Operator; 