import bcrypt from 'bcrypt'// To hash passwords

import User from '../models/users.schema.js';

// Registration function
export const createUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      questionsAttempted: [],
    });

    // Save the user to the database
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Login function
export const loginUser =  async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find the user by email
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Compare the provided password with the hashed password
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const { username } = user;
    res.status(200).json({ username });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
export const updatePoints= async(req , res) =>{
  try {
    const {points , username} = req.body;

    const user = await User.findOne({ username });

    if (!user) {
      return res.status(404).json({ error: 'NOT FOUND' });
    }
    
    user.points = points;
    await user.save();
    res.status(200).json({ message: 'Pointes updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

export const getPoints= async(req , res) =>{
  try {
    console.log( req.body);
    const {username} = req.body;
    console.log(username);

    const user = await User.findOne({ username });

    if (!user) {
      return res.status(404).json({ error: 'NOT FOUND' });
    }
    
    res.status(200).json(user.points);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}


