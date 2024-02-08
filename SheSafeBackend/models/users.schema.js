import mongoose from "mongoose";

// Define a schema for the users collection
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  points: {
    type: Number,
    default: 0,
  },
});

const User = mongoose.model("User", userSchema);

export default User;


// // Create a model based on the schema
// const User = mongoose.model('User', userSchema);

// // Example usage:
// const newUser = new User({
//   username: 'john_doe',
//   email: 'john.doe@example.com',
//   password: 'hashed_password',
//   questionsAttempted: [],
// });

// // Save the new user to the database
// newUser.save();