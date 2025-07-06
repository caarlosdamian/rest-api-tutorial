import Task from '../model/tasks.model.js';

export const getAllTodos = () => {
  return Task.find({});
};

export const createTodo = (body) => {
  return Task.create(body);
};

export const getTodo = (id) => {
  return Task.findOne({ _id: id });
};

export const patchTodo = (id, body) => {
  return Task.findOneAndUpdate({ _id: id }, body, { new: true });
};

export const deleteTodo = (id) => {
  return Task.findByIdAndDelete({ _id: id });
};
