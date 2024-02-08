import mongoose from 'mongoose';
import Questions from '../models/questions.schema.js';


export const addQuestion = async (req, res, next) => {
  const{question , options , correctAnswer, tip ,points} =req.body
   
  if (!question || !options || !correctAnswer || !tip) {
    return res.status(400).json({ message: 'Missing required parameters' });
  }
  try {
     
   
    const newQuestion = await Questions.create({
      question: question,
      options:options,
      correctAnswer:correctAnswer,
      tip:tip,
      points :points

    })

    if (!newQuestion) {
      return res.status(404).json({ message: ' not found' });
    }


    res.status(201).json(newQuestion);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
export const getQuestions = async (req, res, next) => {
  
  try {
    const question = await Questions.find({});

    if (!question) {
      return res.status(404).json({ message: 'not found' });
    }

    res.status(200).json(question);
  } catch (err) {
    console.error(err);
    next();
  }
};


export const deleteQuestion = async (req, res, next) => {
  const { id } = req.params;
  try {
    const deletedQuestion = await Questions.deleteOne({ _id: id });

    if (deletedQuestion.deletedCount === 0) {
      return res.status(404).json({ message: 'Question not found' });
    }

    res.status(200).json({ message: 'The question was deleted successfully' });
  } catch (err) {
    console.error(err);
    next(err); // Passing the error to the error handling middleware
  }
};