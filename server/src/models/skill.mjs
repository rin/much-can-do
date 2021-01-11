import mongoose from 'mongoose';

const Skill = mongoose.model('Skill', {
  title: {
    type: String,
    required: [true, 'What can you do?'],
  },
  strength: {
    type: Number,
    min: [1, 'Must be between 1 and 9'],
    max: [9, 'Must be between 1 and 9'],
    required: [true, 'Yeah but how much exactly?'],
  },
});

// TODO: Add a custom validator to make sure title is unique

export default Skill;
