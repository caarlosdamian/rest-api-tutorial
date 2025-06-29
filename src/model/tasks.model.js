import mongoose, { Schema } from 'mongoose';

const taskSchema = new Schema({
  title: String,
  description: String,
  isCompleted: Boolean,
});

const Task = mongoose.model('Task', taskSchema);

export default Task;
