import mongoose from "mongoose";

// Schema for the questions collection
const questionSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
  },
  correctAnswer: {
    type: String,
    required: true,
  },
  options:{ type : Array},
  points: {
    type: Number,
    required: true,
  },

  category: {
    type: String,
    default: 'General', // Default category if not specified
  },
  difficulty: {
    type: String,
    enum: ['Easy', 'Medium', 'Hard'],
    default: 'Medium',
  },
  tip: {
    type: String,
    
  },
});


const Questions = mongoose.model("Question", questionSchema);

export default Questions;