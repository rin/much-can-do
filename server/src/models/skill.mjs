import mongoose from 'mongoose';

const Skill = mongoose.model('Skill', {
  title: String,
  strength: Number,
});

export default Skill;
